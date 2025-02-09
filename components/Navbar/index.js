import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const className = scroll > 100 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header />
    </div>
  );
}
