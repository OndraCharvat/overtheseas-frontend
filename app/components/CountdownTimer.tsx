"use client"
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    dní: 0,
    hodin: 0,
    minut: 0,
    sekund: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dní: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hodin: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minut: Math.floor((difference / 1000 / 60) % 60),
        sekund: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className=" relative p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Odlet do Kanady za:</h3>
      <p className="text-xl">{timeLeft.dní}d {timeLeft.hodin}h {timeLeft.minut}m {timeLeft.sekund}s</p>
    </div>
  );
};

export default CountdownTimer;