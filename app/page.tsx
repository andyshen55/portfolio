import Link from "next/link";
import Image from "next/image";
import { JSX, ClassAttributes, AnchorHTMLAttributes } from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

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

function Footer() {
  return (
    <footer className="mt-16">
      <div className="flex justify-end items-center space-x-8">
        <a
          href="https://www.linkedin.com/in/thantzinoo-andy/"
          className=" hover:text-teal-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>

        <a
          href="https://github.com/andyshen55"
          className=" hover:text-teal-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={30} />
        </a>

        <a href="mailto:andyshen55@g.ucla.edu" className=" hover:text-teal-400">
          <AiOutlineMail size={30} />
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-xl tracking-tighter">
          {`Hi, I'm Andy Shen 👋`}
        </h1>
        <p className="text-lg mt-2">
          I’m a software engineer, math educator, and avid reader.{" "}
        </p>

        <p className="mt-8">
          I currently work at{" "}
          <Badge href="https://ixl.com">
            <Image src="/ixl.png" width="25" height="25" alt="IXL logo" />
            &thinsp; Learning
          </Badge>
          , where I help improve the teacher experience for coordinating
          classrooms. Before that, I was a lead instructor at the{" "}
          <Badge href="https://circles.math.ucla.edu/">
            <Image src="/ormc.png" width="13" height="13" alt="ORMC logo" />
            &nbsp; UCLA Olga Radko Endowed Math Circle
          </Badge>
          . Predictably, I’m broadly passionate about education: from policy to
          personalized learning.
        </p>
        <p className="mt-8">
          Take a look at some{" "}
          <Link
            className=" text-violet-600 hover:text-teal-400 transition-all"
            href="/circle"
          >
            puzzling math{" "}
          </Link>
          I’ve taught, or the
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
      <Footer />
    </>
  );
}
