import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="border border-transparent w-full h-screen bg-[url('https://media.tenor.com/D8N2aMZtd4YAAAAC/rain.gif')] bg-no-repeat bg-cover rounded-3xl outline-2 shadow-xl shadow-black justify-center items-center text-center md:p-20 p-3 md:text-4xl text-lg font-extrabold text-white ">
      <div className="border border-transparent w-full  rounded-3xl outline-2 shadow-xl shadow-black justify-center items-center text-center md:p-20 p-3 md:text-4xl text-lg font-extrabold text-white">
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
        <div className=" border rounded-2xl outline-offset-4 hover:bg-gradient-to-l from-slate-400  p-5 md:p-20">
          <Link href="/Index">
            <h3>Hello, My name is Sharon.</h3>
            <p>
              As a frontend focused web developer,I create and build the
              frontend of websites and web applications, contributing to the
              overall success of the products.
            </p>
            See some{" "}
            <button className="text-blue-700 bg-white p-2 hover:bg-gradient-to-l from-slate-400 border rounded-md">
              {" "}
              PROJECTS{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      <footer className="mr-[60%]">&copy; Sharon{2023}</footer>
    </div>
  );
}
