"use client";

import React from "react";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
      className="hover:opacity-60 bg-sky-100 rounded-lg p-4 shadow-lg"
    >
      <p className="mt-1 text-lg font-medium text-gray-900 ">{props.name}</p>
      <h3 className="mt-4 text-base text-gray-700 text-center">{props.desc}</h3>
      <h3 className="mt-4 text-sm text-gray-500 text-right">{props.topic}</h3>
    </a>
  );
}

function HandoutGallery() {
  return (
    <section className="full-bleed">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
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
    </section>
  );
}

function VideoSection() {
  return (
    <section className="full-bleed">
      <div className="flex items-center justify-center p-8">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qoU44qFJ95E&list=PLNC_Fddtqhottfl9HtRu48wDEvxC4HmAM"
          className="react-player"
          controls={false}
        />
      </div>
    </section>
  );
}

function SetSection() {
  return (
    <section>
      <p className="mt-4">
        Once the children were sold on programming, we decided to teach Python
        through a series of{" "}
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://drive.google.com/drive/folders/1wGkHiOdH0azXRg1l6AFCng73Ti84ESlA?usp=sharing"
        >
          Colab notebooks
        </a>
        . Coordinating access to laptops was chaotic, but well worth the effort
        to let the kids proceed at their own pace.
      </p>
      <p className="mt-4">
        After the cohort had developed basic Python proficiency, we launched
        into a quarter long group project. The goal was to learn the pure math
        necessary to model the geometry of the game{" "}
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://en.wikipedia.org/wiki/Set_(card_game)"
        >
          Set
        </a>
        , and then program a solver as a class.
      </p>
      <p className="mt-2 ">
        Over the course of 10 weeks we covered: groups, finite fields, vector
        spaces, as well as Python functions and classes. These topics culminated
        in a handout modeling{" "}
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://drive.google.com/file/d/1sE6V4dxndbhc-YPkzJubU9LPOmHadKPv/view?usp=sharing"
        >
          Set as a vector space
        </a>
        , and a{" "}
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://github.com/andyshen55/pyset"
        >
          class-wide implementation of a solver.
        </a>
      </p>

      <p className="mt-4 text-base text-right">
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://docs.google.com/document/d/1YmcxxgYqi62egp1rkU7uX0T9uiB3ldv9_xfvVmad5oU/edit?usp=sharing"
        >
          Game driver design doc
        </a>
      </p>
      <p className="text-base text-right">
        <a
          target="_blank"
          className="text-sky-500 hover:text-amber-400"
          href="https://www.overleaf.com/read/njcyczwzgvjv"
        >
          TeX for the pure math handouts
        </a>
      </p>
    </section>
  );
}

function IntroSection() {
  return (
    <section>
      <h1 className="font-semibold text-xl tracking-tighter mb-2">
        I describe the UCLA Math Circle as a Sunday school for gifted kids.
      </h1>
      <p className="">
        {
          "As a lead instructor at the Circle, I guided my cohort of students through topics from UCLA's undergraduate math curriculum, redesigned for their cognitive capacities. Take a look at some of my favorite handouts that we taught!"
        }
      </p>
    </section>
  );
}

function ProgrammingSection() {
  return (
    <>
      <section>
        <h2 className="font-semibold text-lg tracking-tighter mb-2">
          We also experimented with teaching programming.
        </h2>
        <p>
          I noticed that some students struggled with solving cryptarithms.
          Sensing an opportunity to deviate from pen and paper, I animated some
          videos to illustrate how a computational approach to problem solving
          could automate insight.
        </p>
      </section>
      <VideoSection />
      <SetSection />
    </>
  );
}
export default function CirclePage() {
  return (
    <>
      <IntroSection />
      <HandoutGallery />
      <ProgrammingSection />
    </>
  );
}
