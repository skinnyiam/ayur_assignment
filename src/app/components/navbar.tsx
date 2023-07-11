import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const navbar = (props: Props) => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b backdrop- z-10 py-1 border-zinc-300 flex justify-around backdrop-filter backdrop-blur-lg">
      <div className="flex justify-center items-center">
        <Image src="logo.svg" alt="logo" width={60} height={60} />
      </div>
      <div className="flex justify-center items-start gap-6 p-4">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default navbar;
