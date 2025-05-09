import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full  h-[5.625rem] flex justify-between items-center px-17">
      <div className=" flex items-center justify-center ">
        <Image
          src={"/images/Group14.svg"}
          width={235.72}
          height={49.02}
          alt="local lush"
        />
      </div>

      <div className="flex items-center justify-center gap-10 font-medium text-base h-auto">
        <Link href={"/"} className=" ">
          Shop
        </Link>
        <Link href={"/"} className="">
          About
        </Link>
        <Link href={"/"} className="">
          Service
        </Link>
        <Link href={"/"} className="">
          Blog
        </Link>
        <Link href={"/"} className="">
          Contact
        </Link>
      </div>
      <div className="flex items-center w-auto h-auto gap-3">
        <Link href={"/icons/MagnifiyingGlass.svg"}>
          <Image
            src={"/icons/MagnifiyingGlass.svg"}
            alt="Magnifying Glass"
            width={24}
            height={24}
          />
        </Link>
        <Link href={"/icons/User.svg"}>
          <Image src={"/icons/User.svg"} alt="Users" width={24} height={24} />
        </Link>
        <Link href={"/icons/ShoppingCart.svg"}>
          <Image
            src={"/icons/ShoppingCart.svg"}
            alt="Shopping Cart"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
