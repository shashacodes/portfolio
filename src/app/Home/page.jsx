import Link from "next/link";
import React from "react";

export default function home() {
  return (
    <div className=" bg-slate-600 h-screen md:p-8 p-2 text-white border-transparent-[2px] rounded-tr-xl  outline-offset-4 outline-2 outline-transparent shadow-2xl shadow-slate-600 md:text-lg text-base  w-full">
      <div className="bg-slate-600">
        <ul className="flex justify-end space-x-16 mr-[10%] md:p-4 p-2 mb-4 md:text-3xl text-lg font-bold">
          <Link href="/About">
            <li className="hover:underline">About</li>
          </Link>
          <Link href="/Contact">
            <li className="hover:underline">Contact</li>
          </Link>
        </ul>
        <h2 className="md:font-extrabold font-bold md:text-2xl text-lg md:p-4 p-1">
          {" "}
          Welcome to Sharon's Frontend Development Hub!
        </h2>
        <p className="md:p-3 p-2">
          <span className="font-bold">
            Unlock the Potential of Web Experiences. <br />{" "}
          </span>
          Are you looking to elevate your online presence and create exceptional
          user experiences? Look no further!!{" "}
          <span className="font-bold">Sharon</span> , a talented frontend
          developer, is here to turn your vision into reality. Seamless
          Functionality, With a passion for design and an eye for detail,{" "}
          <span className="font-bold">Sharon</span> specializes in crafting
          visually stunning websites that captivate audiences. She combines her
          expertise in HTML, CSS, JavaScript and React to bring your ideas to
          life, ensuring every element is pixel-perfect and responsive across
          devices. User-Centered Approach.{" "}
        </p>

        <p className="md:p-3 p-2">
          {" "}
          <span className="font-bold">Sharon</span> believes in the power of
          user-centered design. By prioritizing usability and accessibility, she
          ensures your website is intuitive and inclusive to all users. From
          seamless navigation to engaging interactions, every aspect is
          meticulously designed to enhance user satisfaction and drive
          engagement. Collaboration and Communication
          <span className="font-bold">Sharon</span> understands the importance
          of teamwork. She thrives in collaborative environments, actively
          engaging with cross-functional teams to achieve the best results. Her
          exceptional communication skills allow her to effectively communicate
          complex technical concepts to both technical and non-technical
          stakeholders, ensuring everyone is on the same page. Staying Ahead of
          the Curve{" "}
        </p>

        <h3 className="font-extrabold md:text-2xl text-base md:p-4 p-2">
          Ready to Transform Your Web Presence?
        </h3>
        <p className="p-3">
          {" "}
          Join <span className="font-bold">Sharon's</span> Network Take the
          first step towards unlocking the true potential of your web
          experiences. <br />
          Contact <span className="font-bold">Sharon</span> today to discuss
          your project, collaborate on ideas, and embark on a journey to create
          remarkable online experiences that leave a lasting impression. <br />
        </p>
        <div className="flex justify-evenly">
          <Link href="/Contact">
            <button className=" md:p-3 p-1 h-[50px] justify-center items-center mx-auto md:w-[150px] w-[100px] text-white animate-pulse bg-neutral-400 rounded-2xl text-xl font-extrabold">
              CONTACT
            </button>{" "}
          </Link>
          <Link href="/">
            {" "}
            <p className="animate-bounce font-bold mx-auto border rounded-xl md:text-2xl text-base hover:text-black pt-2 text-center hover:bg-zinc-50 hover:scale-125 mt-4 md:w-[300px] w-[150px] h-[60px]">
              Back to FrontPage{" "}
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
