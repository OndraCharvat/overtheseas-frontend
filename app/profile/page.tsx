"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { handleGetProfile } from "../handlers/profileHandler";
import { useMutation } from "@tanstack/react-query";
import { handleUpdateProfile } from "../handlers/profileHandler";

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
export interface IupdateProfile {
  firstName?: string;
  lastName?: string;
  address?: string;
}


export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    country: "",
    visa: "",
    duration: "",
    about: "",
    school: "",
    host: "",
    dateOfBirth: ""
  });

  const profileQuery = useQuery({
    queryKey: ["profile"],
    queryFn: () => handleGetProfile(),
    onSuccess: (data) => {
      setUserData((prev) => ({
        ...prev,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        address: data.address || "",
        email: data.users[0]?.email || prev.email,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : prev.dateOfBirth
      }));
    }
  });

  const updateProfileMutation = useMutation({
    mutationFn: (updatedData: Partial<IupdateProfile>) => handleUpdateProfile(updatedData),
    onSuccess: () => {
      setIsEditing(false); 
      profileQuery.refetch(); 
    },
  });

  const handleSave = () => {
    const updatedData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address,
    };
  
    updateProfileMutation.mutate(updatedData);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });  
  };

  return (
    <main className="flex justify-center items-center p-12 min-h-screen px-4">
      <div className="w-full max-w-5xl bg-brightpurple p-6 sm:p-24 rounded-2xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-5xl font-bold mb-7">Můj Profil</h1>
            <h2 className="text-lg sm:text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <button 
            className="bg-purpleots text-white px-4 py-2 rounded-md hover:bg-secondary transition mt-4 sm:mt-0"
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setIsEditing(true);
            }
          }}
          >
            {isEditing ? "Uložit" : "Upravit"}
          </button>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {[
            { name: "firstName", placeholder: "Jméno" },
            { name: "lastName", placeholder: "Příjmení" },
            { name: "address", placeholder: "Adresa" },
            { name: "phone", placeholder: "Telefon" },
            { name: "email", placeholder: "Email" },
            { name: "dateOfBirth", placeholder: "Datum narození" },
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              type="text"
              name={name}
              placeholder={placeholder}
              value={(userData as any)[name] || ""}
              onChange={handleChange}
              disabled={name === "phone" || name === "email" || name === "dateOfBirth" || !isEditing}
              className={`p-3 border rounded-md w-full bg-white ${isEditing ? "border-secondary" : "border-white"}`}
            />
          ))}
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
            type="text"
            name="about"
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