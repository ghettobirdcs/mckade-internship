import React, { useEffect, useState } from "react";

const Timer = ({ expiryDate }) => {
  const [now, setNow] = useState(Date.now());
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Updates every 1 sec
    const id = setInterval(() => setNow(Date.now()), 1000);

    if (now >= expiryDate) {
      setExpired(true);
      return;
    }

    // Clears on unmount
    return () => clearInterval(id);
  }, [expiryDate, now]);

  if (expired) {
    return null;
  }

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
