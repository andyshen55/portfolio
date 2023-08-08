"use client";

import React from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import handouts from "../api/data/handouts.json";

function HandoutCard(props: {
  name: string;
  desc: string;
  topic: string;
  href: string;
}) {
  return (
    <a
      target="_blank"
      href={props.href}
      className="hover:opacity-50 bg-sky-100 rounded-lg p-4 shadow-lg"
    >
      <p className="mt-1 text-lg font-medium text-gray-900 ">{props.name}</p>
      <h3 className="mt-4 text-base text-gray-700 text-center">{props.desc}</h3>
      <h3 className="mt-4 text-sm text-gray-400 text-right">{props.topic}</h3>
    </a>
  );
}

export function Gallery() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6  xl:grid-cols-4 xl:gap-x-8">
        {handouts.map((handout, idx) => (
          <HandoutCard
            name={handout.name}
            desc={handout.desc}
            topic={handout.topic}
            href={handout.href}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default function CirclePage() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-xl tracking-tighter mb-2">
          I describe the UCLA Math Circle as a Sunday school for gifted kids.
        </h1>
        <p className="">
          As a lead instructor at the Circle, I guided my cohort of students
          through topics from UCLA's undergraduate math curriculum, redesigned
          for their cognitive capacities. Take a look at some of my favorite
          handouts that we taught!
        </p>
      </section>
      <section className="full-bleed">
        <Gallery />
      </section>
      <section>
        <h2 className="font-semibold text-lg tracking-tighter mb-2">
          We also experimented with teaching programming.
        </h2>
        <p>
          I noticed that a lot of the students struggled with the cryptarithms
          handout. Sensing an opportunity to deviate from the handout-centric
          math curriculum, I animated some videos to illustrate how a
          computational approach to problem solving could automate insight.
        </p>
      </section>
      <section className="full-bleed">
        <div className="flex items-center justify-center p-8">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qoU44qFJ95E&list=PLNC_Fddtqhottfl9HtRu48wDEvxC4HmAM"
            className="react-player"
            controls={false}
          />
        </div>
      </section>
      <section>
        <p className="mt-4">
          Once the children were sold on programming, we decided to teach Python
          through a series of{" "}
          <a
            target="_blank"
            className=" text-violet-600 hover:text-teal-400"
            href="https://drive.google.com/drive/folders/1wGkHiOdH0azXRg1l6AFCng73Ti84ESlA?usp=sharing"
          >
            Colab notebooks
          </a>
          . Coordinating access to laptops was chaotic, but well worth it to let
          the kids proceed at their own pace.
        </p>
        <p className="mt-4">
          Once the cohort had developed basic Python proficiency, we launched
          into a quarter long group project. The goal was to learn the pure math
          necessary to model the geometry of the game{" "}
          <a
            target="_blank"
            className=" text-violet-600 hover:text-teal-400"
            href="https://en.wikipedia.org/wiki/Set_(card_game)"
          >
            Set
          </a>
          , and then program a solver as a class.
        </p>
        <p className="mt-2 ">
          We covered: axioms, groups, modular arithmetic, fields, vector spaces,
          as well as Python functions and classes.
        </p>
        <p className="mt-4 text-base text-right">
          <a
            target="_blank"
            className=" text-violet-600 hover:text-teal-400"
            href="https://www.overleaf.com/read/njcyczwzgvjv"
          >
            TeX for the pure math handouts
          </a>
        </p>
        <p className="text-base text-right">
          <a
            target="_blank"
            className=" text-violet-600 hover:text-teal-400"
            href="https://github.com/andyshen55/pyset"
          >
            Base repo for the PySet solver
          </a>
        </p>
      </section>
    </>
  );
}
