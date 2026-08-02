import { NavLink } from "react-router-dom";

const base = "block px-4 py-2 rounded-md text-sm transition";

export default function SideNav() {
  return (
    <nav className="w-56 bg-black text-white flex flex-col gap-1 p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${base} ${isActive ? "bg-[#b7181e]" : "hover:bg-[#b7181e]/80"}`
        }
      >
        Sager
      </NavLink>
    </nav>
  );
}
