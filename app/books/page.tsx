"use client";

import Image from "next/image";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function BookDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="keen-slider__slide">
          <Image
            alt=""
            src={"/books/when-breath-becomes-air.jpeg"}
            height={400}
            width={200}
            className="hover:opacity-50"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
function BookSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: "auto" },
  });

  return (
    <div ref={sliderRef} className="keen-slider mx-4">
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
      <BookDialog />
    </div>
  );
}

function Shelf() {
  return <div className="h-16 bg-yellow-500"></div>;
}

function BookShelf() {
  return (
    <>
      <BookSlider />
      <Shelf />
    </>
  );
}
export default function BooksPage() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-xl tracking-tighter mb-2">
          My dream job growing up was to be a librarian.
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          In my mind that meant getting paid to read books all day.
          Unfortunately, that didn’t come to pass. Instead, I maintain a set of
          books that have been particularly impactful on my worldview.
        </p>
        <p className="mt-4 prose prose-neutral dark:prose-invert text-lg">
          Click on a title to read my (mostly incoherent) thoughts.
        </p>
      </section>
      <section className="full-bleed mt-40">
        <BookShelf />
      </section>
    </>
  );
}
