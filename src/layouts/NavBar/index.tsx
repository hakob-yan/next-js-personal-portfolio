import React from "react";
const NAV_BAR = [
  { title: "Home" },
  { title: "About" },
  { title: "Services" },
  { title: "Contact" },
];
function NavBar() {
  return (
    <nav className="w-full flex justify-center items-center bg-red-500">
      {NAV_BAR.map((item) => (
        <a className="bg-red-400" key={item.title}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
