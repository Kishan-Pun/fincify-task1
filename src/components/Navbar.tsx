import React, { useState, useRef, useEffect } from "react";
import { Menu, Bell, Search, ChevronDown } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowSearch(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-[#0f1b2e] px-4 py-3 border-b border-white/10 relative">
      <div className="flex items-center gap-3" ref={searchRef}>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={onMenuClick}
        >
          <Menu size={22} className="text-white" />
        </button>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-3 py-2 rounded-lg w-48 md:w-64 text-sm outline-none border border-gray-700 transition-all duration-200"
            autoFocus
          />
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => {
            setShowSearch((prev) => !prev);
            setShowDropdown(false);
          }}
        >
          <Search size={20} className="text-white" />
        </button>

        <button className="p-2 rounded-lg hover:bg-white/10 transition relative">
          <Bell size={20} className="text-white" />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-white/10 transition"
            onClick={() => {
              setShowDropdown((prev) => !prev);
              setShowSearch(false);
            }}
          >
            <img
              src="https://via.placeholder.com/42"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:inline text-sm text-white">Kishan</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 text-white">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 text-white">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
