import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-auto bg-[#FFFAFA]">
      <div className="flex items-center justify-around pt-11">
        <div className="flex flex-col items-start justify-start ">
          <h2 className="font-bold text-2xl text-[#4B4B4B]">Lush Layers</h2>
          <br />
          <p className="font-instrument-sans text-[#4B4B4B] text-xl text-wrap max-w-[15rem]">
            Crafting sweet memories with artisanal cakes for your special
            celebrations.
          </p>
          <div className="flex items-center justify-start gap-1">
            <button className="hover:cursor-pointer">
              <Image
                src={"/icons/social-media/Pinterest.png"}
                alt="Pinterest"
                height={31.12}
                width={31.12}
              />
            </button>
            <button className="hover:cursor-pointer">
              <Image
                src={"/icons/social-media/Facebook.png"}
                alt="Facebook"
                height={31.12}
                width={31.12}
              />
            </button>
            <button className="hover:cursor-pointer">
              <Image
                src={"/icons/social-media/Instagram.png"}
                alt="Instagram"
                height={31.12}
                width={31.12}
              />
            </button>
            <button className="hover:cursor-pointer">
              <Image
                src={"/icons/social-media/Twitter.png"}
                alt="Twitter"
                height={31.12}
                width={31.12}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-bold text-xl text-[#4B4B4B] mt-1">Quick Links</h3>
          <Link
            href={"/"}
            className="font-instrument-sans text-[#4B4B4B] text-xl"
          >
            Shop
          </Link>
          <Link
            href={"/"}
            className="font-instrument-sans text-[#4B4B4B] text-xl"
          >
            About Us
          </Link>
          <Link
            href={"/"}
            className="font-instrument-sans text-[#4B4B4B] text-xl"
          >
            Services
          </Link>
          <Link
            href={"/"}
            className="font-instrument-sans text-[#4B4B4B] text-xl"
          >
            Blog
          </Link>
        </div>
        <div className="flex flex-col items-start justify-normal">
          <h3 className="font-bold text-xl text-[#4B4B4B] mt-1">Contact Us</h3>
          <div className="flex items-center justify-start gap-3">
            <Image
              src={"/icons/pin.svg"}
              alt="Location Pin"
              height={21.01}
              width={14.44}
            />
            <p className="font-instrument-sans text-[#4B4B4B] text-xl">
              123, Bakery street, Mumbai
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              height={18.32}
              width={14.06}
            />
            <p className="font-instrument-sans text-[#4B4B4B] text-xl">
              +91-79877-58405
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image
              src={"/icons/email.svg"}
              alt="Email"
              height={9}
              width={14.01}
            />
            <p className="font-instrument-sans text-[#4B4B4B] text-xl">
              hello@lushlayers
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-bold text-xl text-[#4B4B4B] mb-2">Newsletter</h3>
          <p className="font-instrument-sans text-[#4B4B4B] text-xl ">
            Subscribe for sweet updates and offers.
          </p>
          <div className="flex items-center justify-start gap-5">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border-2 border-none bg-[#4B4B4B] text-[#FFFAFA] p-4 placeholder:text-[#FFFAFA]"
            />
            <button className="flex items-center justify-center rounded-xl bg-[#CF9F9F] px-2.5 py-3 hover:cursor-pointer">
              <Image
                src={"/icons/right-arrow.svg"}
                alt="arrow right"
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  h-16 mt-10">
        <p className="font-instrument-sans text-[#4B4B4B] text-base">
          2024 Lush layers. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
