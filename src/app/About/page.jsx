import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <div className="md:p-20 p-2 bg-slate-600 h-screen  text-white">
      <ul className="flex justify-end space-x-10 md:p-4 p-0 md:mb-4 mb-1 md:text-3xl text-base font-bold">
        <Link href="/Contact">
          <li className="hover:underline">Contact</li>
        </Link>
        <Link href="/Resume">
          <li className="hover:underline">Resume</li>
        </Link>
        <Link href="/Index">
          <li className="hover:underline">Projects</li>
        </Link>
      </ul>
      <div className="border-transparent-[2px] md:p-5 p-2 bg-slate-600 rounded-xl outline-double outline-transparent shadow-2xl shadow-slate-500 md:text-xl text-base">
        <h2>
          Sharon is a highly skilled frontend developer with a passion for
          creating stunning and user-friendly web experiences.
        </h2>
        <p>
          {" "}
          With expertise in modern technologies and a keen eye for detail, she
          crafts seamless and visually appealing websites.{" "}
        </p>
        <p>
          {" "}
          Sharon is an advocate for user-centered design and accessibility,
          seamlessly integrating interactive elements and intuitive navigation.
          Her exceptional communication skills and collaborative nature make her
          an invaluable asset to any project.
        </p>
        <p>
          {" "}
          With a continuous learning mindset, she stays updated with the latest
          trends, delivering innovative solutions. Sharon's expertise,
          creativity, and commitment to excellence make her a true force in
          frontend development.
        </p>
      </div>
      <span className="mx-auto">
        <Link href="/">
          <button className="animate-pulse md:p-10 p-0 md:pt-2 pt-0 justify-center text-center font-bold md:font-extrabold mx-auto border rounded-xl md:text-2xl text-base hover:text-black hover:bg-gradient-to-l from-slate-400 hover:scale-125 mt-4 md:w-[300px] w-[130px] md:h-[60px] h-[50px]">
            Back to FrontPage
          </button>{" "}
        </Link>
      </span>
    </div>
  );
}
