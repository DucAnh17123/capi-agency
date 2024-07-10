"use client";
import { useState, useEffect } from "react";

export default function Counter({ limit }: any) {
  const [count, setCount] = useState(0);
  const timeToCount = 1000 / limit;

  useEffect(() => {
    if (count < limit) {
      const timer = setTimeout(() => setCount(count + 1), timeToCount);
      return () => clearTimeout(timer);
    }
  }, [count, limit, timeToCount]);

  return (
    <>
      <span className="text-sm font-medium text-gray-600">{count}</span>
    </>
  );
}
