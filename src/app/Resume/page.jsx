import React from "react";
import Link from "next/link";
import Image from "next/image";
import cv from "../Contact/Images/cv.jpg";

export default function page() {
  return (
    <div>
      <ul className="flex  text-xl md:justify-end justify-normal space-x-2 md:space-x-20 md:mr-[30%] ml-[10%] mt-3">
        <Link href="/">
          <li className="hover:underline">HOME</li>
        </Link>
        <Link href="/About">
          <li className="hover:underline">ABOUT</li>
        </Link>
        <Link href="/Contact">
          <li className="hover:underline">CONTACT</li>
        </Link>
      </ul>
      <Image src={cv} alt="cv" />
    </div>
  );
}
