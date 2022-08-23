import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface NavigationMenu {
  id: string | number;
  label: string;
  url: string;
  children?: NavigationMenu[];
}

export interface NavigationProperty {
  companyName: string;
  companyLogo: string;
  children: React.ReactNode;
}

export function Navigation({
  companyName,
  companyLogo,
  children,
}: NavigationProperty) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className={`bg-secondary h-screen p-5 pt-8 ${
          open ? "w-80" : "w-24"
        } duration-300 relative`}
      >
        <button
          className={`bg-slate-600 text-white absolute -right-3 top-9 cursor-pointer rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          Click
        </button>
        <header className="inline-flex gap-2">
          <div className="bg-amber-400 rounded cursor-pointer block w-12 gap-x-2">
            {/* <img src={companyLogo} alt={companyName} /> */}
          </div>
          <h1
            className={`origin-left font-medium duration-75 ${
              !open && "scale-0"
            }`}
          >
            {companyName}
          </h1>
        </header>

        <ul className="pt-2">{children}</ul>
      </div>
    </>
  );
}

export default Navigation;
