"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // Mockovaná data - později nahradíme reálnými daty z DB
  const [userData, setUserData] = useState({
    firstName: "David",
    lastName: "Procházka",
    email: "davidprochazka@gmail.com",
    phone: "",
    country: "United States of America 🇺🇸",
    visa: "J1",
    duration: "1 rok",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-5xl bg-brightpurple p-6 sm:p-24 rounded-2xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-5xl font-bold mb-7">Můj Profil</h1>
            <h2 className="text-lg sm:text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <button 
            className="bg-purpleots text-white px-4 py-2 rounded-md hover:bg-secondary transition mt-4 sm:mt-0"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Uložit" : "Upravit"}
          </button>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          <input 
            type="text" 
            name="firstName"
            placeholder="Jméno" 
            value={userData.firstName} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Příjmení" 
            value={userData.lastName} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
          <input 
            type="text" 
            name="phone"
            placeholder="Telefon" 
            value={userData.phone} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={userData.email} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
        </div>

        {/* Info o programu */}
        <div className="p-4 rounded-md bg-white">
          <h3 className="text-lg font-bold mb-6">Informace o programu</h3>
          <p className="mb-0.5"><strong>Země pobytu:</strong> {userData.country}</p>
          <p className="mb-0.5"><strong>Vízum:</strong> {userData.visa}</p>
          <p className="mb-0.5"><strong>Délka:</strong> {userData.duration}</p>
        </div>
      </div>
    </main>
  );
}
