import React from "react";

export default function ProductsNav({ selectedNav, setSelectedNav }) {
  return (
    <div className="flex gap-10">
      <a
        className={
          selectedNav === "recommended"
            ? "px-2 py-1 rounded bg-[#F2C94C]"
            : "px-2 py-1 rounded text-black hover:bg-[#F2C94C] sm:block"
        }
        onClick={() => setSelectedNav("recommended")}
      >
        Recommended
      </a>
      <a
        className={
          selectedNav === "popular"
            ? "px-2 py-1 rounded bg-[#F2C94C]"
            : "px-2 py-1 rounded text-black hover:bg-[#F2C94C] sm:block"
        }
        onClick={() => setSelectedNav("popular")}
      >
        Popular
      </a>
      <a
        className={
          selectedNav === "all"
            ? "px-2 py-1 rounded bg-[#F2C94C]"
            : "px-2 py-1 rounded text-black hover:bg-[#F2C94C] sm:block"
        }
        onClick={() => setSelectedNav("all")}
      >
        All
      </a>
    </div>
  );
}
