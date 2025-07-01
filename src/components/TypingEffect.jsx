import React, { useEffect, useState } from "react";

const roles = [
  "Front-End Developer",
  "React Enthusiast",
  "UI/UX Explorer",
  "Electronics Engineer",
  "Tech Learner"
];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <span className="text-black font-bold text-2xl md:text-3xl min-h-[2.5rem] mt-3">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;