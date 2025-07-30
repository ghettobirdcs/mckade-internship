import React, { useEffect, useState } from "react";

const Timer = ({ expiryDate }) => {
  const initialNow = Date.now();
  const [now, setNow] = useState(initialNow);
  const [expired, setExpired] = useState(initialNow >= expiryDate);

  useEffect(() => {
    if (expired) return; // no need to set interval if already expired

    const intervalId = setInterval(() => {
      const current = Date.now();

      if (current >= expiryDate) {
        setExpired(true);
        clearInterval(intervalId);
      } else {
        setNow(current);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiryDate, expired]);

  if (expired) return null;

  const msLeft = expiryDate - now;
  const hours = Math.floor(msLeft / (1000 * 60 * 60));
  const minutes = Math.floor((msLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((msLeft / 1000) % 60);

  return (
    <div className="de_countdown">
      {hours}h {minutes.toString().padStart(2, "0")}m{" "}
      {seconds.toString().padStart(2, "0")}s
    </div>
  );
};

export default Timer;
