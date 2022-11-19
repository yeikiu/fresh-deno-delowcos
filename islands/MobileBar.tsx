import { asset } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";
import { useSignal } from "@preact/signals";

import { PageID } from "../signals/currentPageIdSignal.ts";

interface MobileBarProps {
  logoPath?: string;
  navBgColor?: string;
  toggleBgColor?: string;
  toggleIconColor?: string;
  menuItemsBgColor?: string;
  menuItemsBgColorHover?: string;
  menuItemsTextColor?: string;
  menuItemsTextColorHover?: string;
}

export default function MobileBar({
  logoPath = 'img/logo.png',
  navBgColor = 'black',
  toggleBgColor = 'gray-500',
  toggleIconColor = 'red-500',
  menuItemsBgColor = 'white',
  menuItemsBgColorHover = 'gray-500',
  menuItemsTextColor = 'black',
  menuItemsTextColorHover = 'white',
}: MobileBarProps) {
  const isOpen = useSignal(false);

  const menuHrefStyle = `transition duration-200 hover:bg-${menuItemsBgColorHover} hover:text-${menuItemsTextColorHover} py-2`;

  const MenuLink = (props: { children: ComponentChildren, targetId: PageID}) => (
    <button
      class={`${menuHrefStyle} py-8 border border-b`}
      onClick={() => {
        document.getElementById(props.targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        isOpen.value = false;
      }}>
      {props.children}
    </button>
  )

  return (
    <nav class={`h-12 sticky top-0 right-0 w-full z-50 bg-${navBgColor} sm:hidden`}>
      {/* Mobile menu bar */}
      <div class="flex sm:hidden justify-between">
        {/* LOGO */}
        <img
          class="h-12"
          src={asset(logoPath)}
          alt="Redaktor logo"
        />

        {/* <!-- mobile menu button --> */}
        <button
          onClick={() => isOpen.value = !isOpen.value}
          class={`focus:outline-none bg-${toggleBgColor} text-${toggleIconColor}`}
        >
          <svg
            class="h-8 w-12 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      {isOpen.value
        ? (
          <div class={`w-full absolute flex flex-col text-center bg-${menuItemsBgColor} text-${menuItemsTextColor}`}>
            <MenuLink targetId="inicio">
              Inicio
            </MenuLink>
            <MenuLink targetId="instalaciones">
              Instalaciones
            </MenuLink>
            <MenuLink targetId="servicios">
              Servicios
            </MenuLink>
            <MenuLink targetId="contacto">
              Contacto
            </MenuLink>
          </div>
        )
        : null}
    </nav>
  );
}
