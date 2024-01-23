import React from "react";
const NAV_BAR = [
  { title: "Home" },
  { title: "About" },
  { title: "Services" },
  { title: "Contact" },
];
function NavBar() {
  return (
    <nav className="w-full flex justify-end items-center p-4 gap-x-4 bg-red-400 h-20">
      {NAV_BAR.map((item) => (
        <a key={item.title}>{item.title}</a>
      ))}
    </nav>
  );
}

export default NavBar;
