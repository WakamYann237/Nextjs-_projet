import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-end space-x-5 py-20 px-40">
        <div className="flex space-x-2">
        <Image 
          src="/projet_nextjs/Logo(4).png" 
          alt="logo 7" 
          width={80} 
          height={40} 
          className="h-10 w-10 rounded-full "
        />
        <Link href="#" className="underline text-white-400 ">DesignCode</Link>
        </div>
        <div className="flex space-x-2">
        <Image 
          src="/projet_nextjs/Twitter.png" 
          alt="twitter" 
          width={80} 
          height={40} 
          className="h-15 w-15 rounded-full "
        />
        <Link href="#" className="underline text-white-400 ">@akonvady</Link>

        </div>
        <div className="flex flex-row">
        <Image 
          src="/projet_nextjs/Instagram.png" 
          alt="Instagram" 
          width={80} 
          height={40} 
          className="h-13 w-13 rounded-full "
        />
        <Link href="#" className="underline text-white-400 ">akondesign</Link>

        </div>
    </div>
  );
};

export default Footer;

