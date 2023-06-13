import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="border border-transparent w-full h-screen bg-[url('https://media.tenor.com/D8N2aMZtd4YAAAAC/rain.gif')] bg-no-repeat bg-cover rounded-3xl outline-2 shadow-xl shadow-black justify-center items-center text-center md:p-20 p-3 md:text-4xl text-lg font-extrabold text-white ">
      <div className="border border-transparent w-full bg-[url('https://media.tenor.com/D8N2aMZtd4YAAAAC/rain.gif')] bg-no-repeat bg-cover rounded-3xl outline-2 shadow-xl shadow-black justify-center items-center text-center md:p-20 p-3 md:text-4xl text-lg font-extrabold text-white">
        <ul className="grid md:grid-cols-3 grid-cols-1 text-white gap-3 justify-center md:gap-3 md:pb-8 mb-5">
          <Link href="/Home">
            <li className="animate-bounce hover:underline">HOME</li>{" "}
          </Link>
          <Link href="/About">
            <li className="animate-pulse hover:underline">ABOUT</li>{" "}
          </Link>
          <Link href="/Contact">
            <li className="animate-bounce hover:underline">CONTACT</li>
          </Link>
        </ul>
        <div className=" border rounded-2xl outline-offset-4 hover:bg-gradient-to-l from-slate-400 md:h-[300px] h-[150px] p-5 md:p-20">
          <Link href="/Index">
            <h3>Hello, My name is Sharon.</h3>
            See some <span className="text-blue-700"> PROJECTS </span>{" "}
          </Link>
        </div>
      </div>
      <footer className="mr-[60%]">&copy; Sharon{2023}</footer>
    </div>
  );
}
