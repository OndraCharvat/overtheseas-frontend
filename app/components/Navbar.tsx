"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FileText, User, Menu, X, PhoneIcon } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {getAccessTokenSilently, isAuthenticated, loginWithRedirect, logout} = useAuth0();
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <Link href="/" className="text-xl font-bold">
        <span className="font-black tracking-[-0.05em]">overtheseas</span>
        <span className="text-sm text-gray-400 tracking-[-0.05em]" >.students portfolio</span>
      </Link>

      {/* Phone burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation buttons */}
      <div className={`md:flex items-center gap-4 ${isOpen ? "flex flex-col absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg" : "hidden md:flex"}`}>

     
        <button onClick={()=>{ logout({ logoutParams: { returnTo: window.location.origin } });
          setTimeout(() => loginWithRedirect(), 500);
      }} className="bg-secondary text-white text-sm px-6 py-3 tracking-[-0.05em] font-extrabold rounded-full hover:bg-purpleots transition">
           Odhlásit se
        </button>
   

        <Link href="/documents">
          <button className="p-2 rounded-lg hover:bg-secondary bg-brightpurple transition flex items-center">
            <FileText size={24} className="text-purpleots" />
            <span className="ml-2 md:hidden">Dokumenty</span>
          </button>
        </Link>

        <Link href="/profile">
          <button className="p-2 rounded-lg hover:bg-secondary bg-brightpurple transition flex items-center">
            <User size={24} className="text-purpleots" />
            <span className="ml-2 md:hidden">Profil</span>
          </button>
        </Link>

        <Link href="/contact">
        <button className="p-2 rounded-lg hover:bg-secondary bg-brightpurple transition flex items-center">
          <PhoneIcon size={24} className="text-purpleots" />
          <span className="ml-2 md:hidden">Kontaktuj nás</span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
