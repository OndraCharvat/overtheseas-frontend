"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FileText, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      {/* Logo button */}
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
      <Link href="/contact">
        <button className="bg-secondary text-white text-sm px-6 py-3 tracking-[-0.05em] font-extrabold rounded-full hover:bg-purpleots transition">
          Kontaktuj nás
        </button>
        </Link>

        <Link href="/login"> 
        <button className="bg-gray-400 text-white text-sm px-6 py-3 tracking-[-0.05em] font-extrabold rounded-full hover:bg-secondary transition">
           Odhlásit se
        </button>
        </Link>

        <Link href="/documents">
          <button className="p-2 rounded-lg hover:bg-white bg-brightpurple transition flex items-center">
            <FileText size={24} className="text-purpleots" />
            <span className="ml-2 md:hidden">Dokumenty</span>
          </button>
        </Link>

        <Link href="/profile">
          <button className="p-2 rounded-lg hover:bg-white bg-brightpurple transition flex items-center">
            <User size={24} className="text-purpleots" />
            <span className="ml-2 md:hidden">Profil</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
