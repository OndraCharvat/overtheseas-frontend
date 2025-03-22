"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { handleGetProfile } from "../handlers/profileHandler";

export interface Iprofile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  process: {name: string, description: string};
  completedTasksIds: string[];
  users: {email: string}[];
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: () => handleGetProfile(),
  });


  const [userData, setUserData] = useState({
    email: "davidprochazka@gmail.com",
    phone: "",
    country: "United States of America 🇺🇸",
    visa: "J1",
    duration: "1 rok",
    about: "",
    school: "Georgetown High School",
    host:"John Smith",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });  
  };

  return (
    <main className="flex justify-center items-center p-12 min-h-screen px-4">
      <div className="w-full max-w-5xl bg-brightpurple p-6 sm:p-24 rounded-2xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-5xl font-bold mb-7">Můj Profil</h1>
            <h2 className="text-lg sm:text-xl font-bold">{profileQuery.data?.firstName} {profileQuery.data?.lastName}</h2>
            <p className="text-gray-600">{profileQuery.data?.users[0]?.email}</p>
          </div>
          <button 
            className="bg-purpleots text-white px-4 py-2 rounded-md hover:bg-secondary transition mt-4 sm:mt-0"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Uložit" : "Upravit"}
          </button>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          <input 
            type="text" 
            name="firstName"
            placeholder={profileQuery.data?.firstName} 
            value={profileQuery.data?.firstName} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
          <input 
            type="text" 
            name="lastName"
            placeholder={profileQuery.data?.lastName}  
            value={profileQuery.data?.lastName}  
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
          <input 
            type="text" 
            name="dateOfBirth"
            placeholder={profileQuery.data?.dateOfBirth ? new Date(profileQuery.data.dateOfBirth).toISOString().split('T')[0] : ""}  
            value={profileQuery.data?.dateOfBirth ? new Date(profileQuery.data.dateOfBirth).toISOString().split('T')[0] : ""}  
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
          <input 
            type="text" 
            name="adress"
            placeholder={profileQuery.data?.address}  
            value={profileQuery.data?.address}  
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
        </div>

 {/* Info o programu */}
 <div className="p-4 rounded-md mb-12 bg-white">
          <h3 className="text-lg font-bold mb-6">Informace o programu:</h3>
          <p className="mb-0.5"><strong>Země Pobytu:</strong> {userData.country}</p>
          <p className="mb-0.5"><strong>Vízum:</strong> {userData.visa}</p>
          <p className="mb-0.5"><strong>Délka:</strong> {userData.duration}</p>
          <p className="mb-0.5"><strong>Škola:</strong> {userData.school}</p>
          <p className="mb-0.5"><strong>Host Parent:</strong> {userData.host}</p>
        </div>
        <div className="p-4 rounded-md bg-white">
          <h3 className="text-lg font-bold mb-6">O studentovi:</h3>
          <input 
            type="O studentovi" 
            name="o studentovi"
            placeholder="Napiš něco o sobě" 
            value={userData.about} 
            onChange={handleChange}
            disabled={!isEditing} 
            className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
          />
        </div>
      </div>
    </main>
  );
}