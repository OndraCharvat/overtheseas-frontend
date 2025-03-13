"use client"
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
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
    let timeLeft = {
      dní: 0,
      hodin: 0,
      minut: 0,
      sekund: 0,
    };

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
    <div className="relative mt-3 p-6 bg-brightpurple rounded-2xl text-center shadow-lg">
      <h3 className="text-lg font-bold tracking-[-0.02em]">Odlet do Kanady za:</h3>
      <p className="text-xl text-secondary font-semibold">{timeLeft.dní}d {timeLeft.hodin}h {timeLeft.minut}m {timeLeft.sekund}s</p>
    </div>
  );
};

export default CountdownTimer;