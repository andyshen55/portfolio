"use client";
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
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
          handout. To their credit, some of the problems took the instructors
          over 25 minutes to solve! Sensing an opportunity to deviate from the
          handout-centric math curriculum, I animated some videos to motivate a
          computational approach to problem solving.
        </p>
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
          into a quarter long group project.{" "}
        </p>
      </section>
    </>
  );
}
