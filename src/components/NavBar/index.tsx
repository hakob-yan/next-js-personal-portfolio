import React from "react";
const NAV_BAR = [
  { title: "Home" },
  { title: "About" },
  { title: "Services" },
  { title: "Contact" },
];
function NavBar() {
  return (
    <nav className="w-full flex justify-end items-center py-4 px-20 gap-x-20 bg-[var(--surface-primary)] h-20">
      {NAV_BAR.map((item) => (
        <a
          key={item.title}
          className="cursor-pointer border-b-transparent hover:border-b-[var(--color-primary)] border-b-[0.2rem] pb-1 ease-in duration-200"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
