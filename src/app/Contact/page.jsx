import Link from "next/link";
import React from "react";
import Image from "next/image";
import pic from "./Images/email.png";
import look from "./Images/ig.png";
import twi from "./Images/twitter.png";
import lin from "./Images/linkedln.png";
import { TbStarFilled } from "react-icons/tb";
import git from "./Images/git.png";

export default function page() {
  return (
    <div className="  h-screen md:bg-slate-600 bg-slate-600 md:text-white text-black">
      <ul className="flex justify-between md:space-x-10 space-x-2 md:p-6 p-2 md:gap-6 gap-2 mb-4 md:text-2xl text-xl font-bold">
        <Link href="/">
          <li className="hover:underline">Home</li>
        </Link>
        <Link href="/About">
          <li className="hover:underline">About</li>
        </Link>
        <Link href="/Resume">
          <li className="hover:underline">Resume</li>
        </Link>
        <Link href="/Index">
          <li className="hover:underline">Projects</li>
        </Link>
      </ul>
      <span className="flex gap-3 md:ml-10 ml-1 mb-8">
        <h2 className="md:font-extrabold font-bold md:text-4xl text-xl text-white">
          CONTACT ME
        </h2>
        <span>
          <TbStarFilled size={25} />{" "}
        </span>{" "}
      </span>
      <h2 className="ml-[25%] font-bold md:text-2xl md:font-extrabold text-xl mb-8 animate-pulse">
        Love to hear from YOU <br /> Get in touch
      </h2>
      <div className="flex justify-evenly mb-8">
        <div className="grid grid-cols-2 text-black md:w-[400px]  w-[220px] md:h-[100px] h-[60px] md:gap-4 gap-2 md:p-4 p-2 md:font-extrabold font-normal">
          <Link href="mailto:ibsharon19@gmail.com">
            <div className="md:p-8 p-0 mb-8">
              {" "}
              EMAIL
              <Image src={pic} alt="email" width={50} height={50} />{" "}
            </div>
          </Link>

          <Link href="https://www.instagram.com/sharon_ibx/">
            <div className=" md:p-8 p-0 mb-8">
              {" "}
              INSTAGRAM
              <Image src={look} alt="ig" width={50} height={50} />{" "}
            </div>
          </Link>
          <Link href="https://twitter.com/ibsharon19_lee">
            <div className="md:p-8 p-0 mb-8">
              {" "}
              TWITTER
              <Image src={twi} alt="ig" width={50} height={50} />{" "}
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/sharon-ibanga-511894177/">
            <div className="md:p-8 p-0 mb-8">
              {" "}
              LINKEDLN
              <Image src={lin} alt="ig" width={50} height={50} />{" "}
            </div>
          </Link>
          <Link href="https://github.com/shashacodes">
            <div className=" md:p-8 p-0">
              {" "}
              GIT
              <Image src={git} alt="git" width={50} height={50} />{" "}
            </div>
          </Link>
        </div>
        <aside className="">
          <Image
            src="/favicon.ico"
            alt="favicon"
            width={100}
            height={100}
            className="border rounded-xl md:w-[250px] mr-[30%] md:h-[200px] h-[80px] w-[100px] mt-10"
          />{" "}
        </aside>
      </div>
      <Link href="/">
        <button className=" pt-[20%] md:ml-[60%] ml-[50%] md:text-2xl text-xl animate-pulse mb-8 font-bold ">
          Go back home
        </button>{" "}
      </Link>
    </div>
  );
}
