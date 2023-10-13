"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";

import { BookMap } from "./types";
import booksData from "../api/data/books.json";

const books: BookMap = booksData as BookMap;

function Shelf() {
  return (
    <div className="absolute w-full h-16 shadow-2xl">
      <Image src="/books/shelf_full.jpeg" alt="" fill />
    </div>
  );
}

function Book(props: { src: string; setReview: () => void }) {
  return (
    <div
      className="keen-slider__slide flex items-end"
      onClick={props.setReview}
    >
      <Image
        alt=""
        src={props.src}
        height={400}
        width={200}
        className="hover:opacity-50 w-auto"
      />
    </div>
  );
}

function BookSlider(props: { setReview: (src: string) => void }) {
  const WheelControls: KeenSliderPlugin = (slider) => {
    let touchTimeout: ReturnType<typeof setTimeout>;
    let position: {
      x: number;
      y: number;
    };
    let wheelActive: boolean;

    function dispatch(e: WheelEvent, name: string) {
      position.x -= e.deltaX;
      position.y -= e.deltaY;
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: position.x,
            y: position.y,
          },
        })
      );
    }

    function wheelStart(e: WheelEvent) {
      position = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }

    function wheel(e: WheelEvent) {
      dispatch(e, "ksDrag");
    }

    function wheelEnd(e: WheelEvent) {
      dispatch(e, "ksDragEnd");
    }

    function eventWheel(e: WheelEvent) {
      e.preventDefault();
      if (!wheelActive) {
        wheelStart(e);
        wheelActive = true;
      }
      wheel(e);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        wheelEnd(e);
      }, 50);
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      });
    });
  };

  const sliderOptions = {
    loop: true,
    slides: { perView: 8 },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 4 },
      },
      "(max-width: 600px)": {
        slides: { perView: 3 },
      },
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    sliderOptions,
    [WheelControls]
  );

  return (
    <div ref={sliderRef} className="keen-slider mx-4">
      {Object.entries(books).map(([src, review]) => (
        <Book src={src} key={src} setReview={() => props.setReview(src)} />
      ))}
    </div>
  );
}

function ReviewDialog(props: { reviewSrc: string; closeReview: () => void }) {
  const reviewRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        reviewRef.current &&
        !reviewRef.current.contains(event.target as Node)
      ) {
        props.closeReview();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  const review = books[props.reviewSrc];

  return (
    <div
      ref={reviewRef}
      className={
        "fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " +
        "rounded-lg p-4 w-10/12 lg:w-1/3 overflow-y-scroll " +
        "backdrop-blur-lg bg-stone-100/80 shadow-2xl"
      }
    >
      <p className="text-base italic">{review.quote}</p>
      {review.content.split("\n").map((paragraph: string, index: number) => (
        <p className="mt-2 tracking-tighter" key={index}>
          {paragraph}
        </p>
      ))}

      <h2 className="mt-2 font-semibold text-lg text-right">{review.title}</h2>
      <h3 className="font-extralight text-right">{review.author}</h3>
    </div>
  );
}

export default function BooksPage() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewSrc, setReviewSrc] = useState("");

  function setReview(reviewSrc: string) {
    setIsReviewOpen(true);
    setReviewSrc(reviewSrc);
  }

  function closeReview() {
    setIsReviewOpen(false);
    setReviewSrc("");
  }

  return (
    <>
      {isReviewOpen && (
        <ReviewDialog reviewSrc={reviewSrc} closeReview={closeReview} />
      )}

      <section className={isReviewOpen ? "opacity-50" : ""}>
        <h1 className="font-semibold text-xl tracking-tighter">
          My dream job growing up was to be a librarian.
        </h1>
        <p className="mt-2">
          In my mind that meant getting paid to read books all day.
          Unfortunately, that didn’t quite come to pass. Instead, I maintain a
          set of books that have been particularly impactful on my worldview.
        </p>
        <p className="mt-4">
          Drag and click to read my (mostly incoherent) thoughts.
        </p>
      </section>
      <section
        className={
          "full-bleed mt-12 sm:mt-32 " + (isReviewOpen ? "opacity-50" : "")
        }
      >
        <BookSlider setReview={setReview} />
        <Shelf />
      </section>
    </>
  );
}
