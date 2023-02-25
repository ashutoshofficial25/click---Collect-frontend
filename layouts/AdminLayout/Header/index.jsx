import React from "react";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
      <div className="flex items-center space-x-2">
        {/* @click="asideOpen = !asideOpen */}
        <button type="button" className="text-3xl">
          {" "}
          <i className="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
      {/* <div>@click="profileOpen = !profileOpen" @click.outside="profileOpen = false */}
      <button type="button" className="h-9 w-9 overflow-hidden rounded-full">
        <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
      </button>
      <div
        className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
        x-show="profileOpen"
        x-transition
      >
        {/* Top Avatar section */}
        <div className="flex items-center space-x-2 p-2">
          <img
            src="https://plchldr.co/i/40x40?bg=111111"
            alt="plchldr.co"
            className="h-9 w-9 rounded-full"
          />
          <div className="font-medium">Ashutosh Maurya</div>
        </div>

        {/* Hidden popup for profile */}
        <div className="flex hidden flex-col space-y-3 p-2">
          <a href="#" className="transition hover:text-blue-600">
            My Profile
          </a>
          <a href="#" className="transition hover:text-blue-600">
            Edit Profile
          </a>
          <a href="#" className="transition hover:text-blue-600">
            Settings
          </a>
        </div>

        {/* Logout section   */}
        <div className=" hidden p-2">
          <button className="flex items-center space-x-2 transition hover:text-blue-600">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            <div>Log Out</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
