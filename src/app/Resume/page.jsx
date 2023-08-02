import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <ul className="flex  text-xl md:justify-between justify-between space-x-2 md:space-x-20 md:mr-[30%] ml-[10%] mt-3">
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
      <Image src="/n.jpg" alt="cv" width={1000} height={-1} className="mt-10" />
    </div>
  );
}
