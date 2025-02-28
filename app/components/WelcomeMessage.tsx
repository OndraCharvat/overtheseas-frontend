"use client";

import React, { useState, useEffect } from "react";

const messages = [
  "Vítej zpět!☺️",
  "Jdi si za svým cílem 💪",
  "Nikdy se nevzdávej! 🚀",
  "Ahoooj! 👋",
  "Životní zkušenost už je za rohem! 🚀 ",
];

const WelcomeMessage = () => {
  const [randomMessage, setRandomMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Náhodně vybere jednu zprávu
    setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);

    // Nastaví aktuální datum
    const today = new Date();
    const formattedDate = today.toLocaleDateString("cs-CZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="mb-6 mt-8">
      <h1 className="text-4xl font-bold tracking-tight">{randomMessage}</h1>
      <p className="mt-4 text-gray-500 text-sm">Dnes je: {currentDate}</p>
    </div>
  );
};

export default WelcomeMessage;
