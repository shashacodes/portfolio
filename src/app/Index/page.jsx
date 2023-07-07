import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen text-xl md:font-bold text-white font-normal justify-center bg-slate-600 h-screen gap-5">
      <nav className="flex mt-2">
        <Image
          src="/favicon.ico"
          alt="favicon"
          width={100}
          height={100}
          className="border rounded-full md:mt-3  ml-5"
        />
        <ul className="flex md:text-2xl text-base  md:justify-end justify-normal space-x-3 md:space-x-20 md:mr-[20%] ml-[18%] ">
          <Link href="/">
            <li className="hover:underline">HOME</li>
          </Link>
          <Link href="/About">
            <li className="hover:underline">ABOUT</li>
          </Link>
          <Link href="/Contact">
            <li className="hover:underline">CONTACT</li>
          </Link>
          <Link href="/Resume">
            <li className="">RESUME</li>
          </Link>
        </ul>
      </nav>
      <h1>Projects.</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://newsignupapp.netlify.app/">
            <section>
              <p>A project with next.js</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/pwdgen/">
            <section>
              <p>Password Generator With javascript</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/javascript-project/third%20javascript.html">
            <section>
              <p>Timer with javascript</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://json-app.netlify.app/better">
            <section>
              <p>next.js: use state, onchange.....</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://json-app.netlify.app/">
            <section>
              <p>Json</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/javascript-project/gpa.html">
            <section>
              <p>Gpa calculator with javascript</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/javascript-project/array.html">
            <section>
              <p>prompt Adding list items </p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/javascript-project/bmi.html">
            <section>
              <p>Calculate Your Body Mass Index with js</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/javascript-project/bday.html">
            <section>
              <p>Birthday Countdown with javascript </p>
            </section>
          </Link>
        </div>
        {/* <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/tailwindclasswork.html">
            <section>
              <p>
                FrontPage using <br /> tailwind
              </p>
            </section>
          </Link>
        </div> */}
        <div className="border w-[300px] bg-black  border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/html/markup.html">
            <section>
              <p>Marking up a page with css and html</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/tailwind-6b2/index.html">
            <section>
              <p>
                Blog Page using <br /> tailwind
              </p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/frontpage.html">
            <section>
              <p>IndexPage</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/tailwindfinal.html">
            <section>
              <p>lorem</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/html/form2.html">
            <section>
              <p>SignUp form with html</p>
            </section>
          </Link>
        </div>
        <div className="border w-[300px] bg-black border-transparent rounded-lg h-[150px] ml-8 mt-5">
          <Link href="https://shashacodes.github.io/frontend/former.html">
            <section>
              <p>First time using html</p>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
}
