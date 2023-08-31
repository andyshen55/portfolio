"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import books from "../api/data/books.json";

function Shelf() {
  return (
    <div className="absolute w-full h-16 shadow-2xl">
      <Image src="/books/shelf_full.jpeg" alt="" layout="fill" />
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
        className="hover:opacity-50"
      />
    </div>
  );
}

function BookSlider(props: { setReview: () => void }) {
  const sliderOptions = {
    loop: false,
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

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderOptions);

  return (
    <div ref={sliderRef} className="keen-slider mx-4">
      {books.map((book, idx) => (
        <Book
          src={book.src}
          setReview={props.setReview}
          key={idx}
          // title={book.title}
          // content={book.content}
          // quote={book.quote}
          // author={book.author}
        />
      ))}
    </div>
  );
}

function Review(props: { closeReview: () => void }) {
  const reviewRef = useRef(null);

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

  return (
    <div
      ref={reviewRef}
      className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-300"
    >
      <p>test</p>
    </div>
  );
}

export default function BooksPage() {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  function swapReview() {
    setIsReviewOpen(true);
  }

  function closeReview() {
    setIsReviewOpen(false);
  }

  return (
    <>
      {isReviewOpen && <Review closeReview={closeReview} />}

      <section>
        <h1 className="font-semibold text-xl tracking-tighter">
          My dream job growing up was to be a librarian.
        </h1>
        <p className="mt-2">
          In my mind that meant getting paid to read books all day.
          Unfortunately, that didn’t come to pass. Instead, I maintain a set of
          books that have been particularly impactful on my worldview.
        </p>
        <p className="mt-4 text-lg">
          Click and drag to read my (mostly incoherent) thoughts.
        </p>
      </section>
      <section className="full-bleed mt-32">
        <BookSlider setReview={swapReview} />
        <Shelf />
      </section>
    </>
  );
}
