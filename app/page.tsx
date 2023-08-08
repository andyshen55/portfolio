import Link from "next/link";
import Image from "next/image";
import { JSX, ClassAttributes, AnchorHTMLAttributes } from "react";

function Badge(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter">
        {`Hi, I'm Andy Shen 👋`}
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I’m a software engineer, educator, and serial sketcher.{" "}
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        I currently work at{" "}
        <span className="not-prose">
          <Badge href="https://ixl.com">
            <Image src="/ixl.png" width="25" height="25" alt="IXL logo" />
            &thinsp; Learning
          </Badge>
        </span>
        , where I help improve the teacher experience for coordinating
        classrooms. Before that, I was a lead instructor at the{" "}
        <span className="not-prose">
          <Badge href="https://https://circles.math.ucla.edu/">
            <Image src="/ormc.png" width="13" height="13" alt="ORMC logo" />
            &nbsp; UCLA Olga Radko Endowed Math Circle
          </Badge>
        </span>
        . Predictably, I’m broadly passionate about education: from policy to
        personalized learning.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        Take a look at some{" "}
        <Link
          className=" text-violet-600 hover:text-teal-400 transition-all"
          href="/circle"
        >
          puzzling math{" "}
        </Link>
        I’ve taught, or my thoughts on the
        <Link
          className=" text-amber-600 hover:text-teal-400 transition-all"
          href="/books"
        >
          {" "}
          books
        </Link>{" "}
        I love.{" "}
      </p>
    </section>
  );
}
