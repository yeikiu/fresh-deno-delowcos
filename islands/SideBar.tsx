import { asset } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

import { currentPageIdSignal, type PageID } from "../signals/currentPageIdSignal.ts";

interface SideBarProps {
  logoPath?: string;
  navBgColor?: string;
  menuItemsBgColor?: string;
  menuItemsBgColorHover?: string;
  menuItemsIconColor?: string;
  menuItemsIconColorHover?: string;
}

const SideBar = ({
  logoPath = "img/logo.png",
  navBgColor = "black",
  menuItemsBgColor = "gray-100",
  menuItemsBgColorHover = "gray-700",
  menuItemsIconColor = "gray-700",
  menuItemsIconColorHover = "white",
}: SideBarProps) => {

  const menuItemStyle =
    `h-10 w-12 rounded-md flex items-center justify-center hover:bg-${menuItemsBgColorHover} hover:text-${menuItemsIconColorHover}`;
  
  const MenuItem = (
    props: { children?: ComponentChildren; targetId: PageID },
  ) => {
    return (
      <button
        class={`${currentPageIdSignal.value === props.targetId ? `bg-${menuItemsBgColorHover} text-${menuItemsIconColorHover}`:`bg-${menuItemsBgColor} text-${menuItemsIconColor}`} ${menuItemStyle}`}
        onClick={() => {
          document.getElementById(props.targetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        <svg
          viewBox="0 0 24 24"
          class="h-5"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {props.children}
        </svg>
      </button>
    );
  };

  return (
    <nav class="h-screen fixed w-24 hidden sm:flex">
      <div
        class={`flex flex-col bg-${navBgColor}`}
      >
        {/* LOGO */}
        <img
          class="w-24"
          src={asset(logoPath)}
          alt="DeLowCos logo"
        />

        {/* NAV PAGES */}
        <div
          class="flex flex-col mx-auto mt-4 space-y-4"
        >
          <MenuItem targetId="inicio">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </MenuItem>
          <MenuItem targetId="instalaciones">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </MenuItem>
          <MenuItem targetId="servicios">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </MenuItem>
          <MenuItem targetId="contacto">
            <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
          </MenuItem>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
