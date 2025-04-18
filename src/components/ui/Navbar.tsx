"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/data";
import { ChevronDown, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UrlObject } from "url";

interface Navitem {
  id: number;
  title: string;
  url: string;
}
interface NavItem {
  id: number;
  title: string;
  url: string;
  submenu?: Navitem[];
}
interface DropdownState {
  [key: string]: boolean;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopDropdowns, setDesktopDropdowns] = useState<DropdownState>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Check if the current path is active
  const isActivePath = (url: string) => {
    if (pathname === url) return true;
    if (pathname.startsWith(url) && url !== "/") return true;
    return false;
  };

  // Handle desktop dropdown toggle
  const handleDesktopDropdownToggle = (title: string, isOpen: boolean) => {
    setDesktopDropdowns((prev) => ({
      ...prev,
      [title]: isOpen,
    }));
  };

  // Close all menus
  const closeAllMenus = () => {
    setDesktopDropdowns({});
  };

  // Listen for scroll events and check initial scroll position
  useEffect(() => {
    // Check initial scroll position when component mounts
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if an item has a dropdown based on its submenu
  const hasDropdown = (item: NavItem) => {
    return item.submenu && item.submenu.length > 0;
  };

  // Get dropdown content based on the item
  const getDropdownContent = (item: NavItem) => {
    if (!item.submenu) return null;

    return item.submenu.map(
      (subItem: {
        id: React.Key | null | undefined;
        url: string | UrlObject;
        title:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            >
          | null
          | undefined;
      }) => (
        <Link
          key={subItem.id}
          href={subItem.url}
          className="w-full transition-all dura block p-2 rounded-md text-[#091120] hover:bg-gray-100/70"
          onClick={() => {
            closeAllMenus();
            setMobileMenuOpen(false);
          }}
        >
          {subItem.title}
        </Link>
      )
    );
  };

  return (
    <header
      className={`w-full z-40 transition-all ${
        isScrolled && "fixed top-0 bg-white shadow-md"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <div className="flex">
            <Search />
            {/* language */}
            <Select defaultValue="eng">
              <SelectTrigger>
                <SelectValue placeholder="Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">Eng</SelectItem>
                <SelectItem value="nep">Nep</SelectItem>
                <SelectItem value="in">Ind</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h2>Destro</h2>
          </div>
          <button className="flex items-center gap-1">
            {/* <Image
              src="/icons/menu-icon.png"
              alt="menu"
              width={24}
              height={24}
              className="object-contain"
            /> */}
            <span>Menu</span>
          </button>
        </div>
      </div>
      <div className="border-y border-[#E6E6E6]">
        <div className="container">
          <nav
            className={`flex items-center justify-between gap-5 h-12 transition-all duration-300 ${
              isScrolled ? "" : ""
            } rounded-lg`}
          >
            {/* <Link
              href="/"
              className="relative block w-[90px] min-w-[73px] h-9 md:h-10"
            >
              <Image
                src="/logo-black.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </Link> */}
            <div></div>

            {/* desktop nav */}
            <div className="hidden md:flex items-center gap-4 md:gap-8 lg:gap-10">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() =>
                    hasDropdown(item) &&
                    handleDesktopDropdownToggle(item.title, true)
                  }
                  onMouseLeave={() =>
                    hasDropdown(item) &&
                    handleDesktopDropdownToggle(item.title, false)
                  }
                >
                  {hasDropdown(item) ? (
                    <>
                      <button
                        className={`flex items-center uppercase cursor-pointer gap-1 after:transition-all after:duration-300 text-black after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-[4px] after:bg-black ${
                          isActivePath(item.url)
                            ? "after:w-full font-bold"
                            : "font-normal"
                        }`}
                      >
                        {item.title} <ChevronDown size={18} />
                      </button>
                      <div
                        className={`absolute left-0 mt-2 w-52 py-3 px-4 bg-white shadow-md rounded-md z-50 overflow-hidden transition-all duration-300 origin-top
                                        ${
                                          desktopDropdowns[item.title]
                                            ? "transform scale-y-100 opacity-100 visible max-h-96"
                                            : "transform scale-y-0 opacity-0 invisible max-h-0"
                                        }`}
                      >
                        {getDropdownContent(item)}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className={`h-full uppercase after:transition-all after:duration-300 text-black after:content-[''] after:absolute after:bottom-[-16px] after:left-0 after:w-0 after:h-[4px] after:bg-[#303030] ${
                        pathname === item.url
                          ? "after:w-full font-bold"
                          : isScrolled
                          ? "hover:after:w-full"
                          : "hover:after:w-full font-normal"
                      }`}
                      onClick={() => closeAllMenus()}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div
              className={`fixed top-0 left-0 w-full h-screen bg-white p-6 transform transition-transform duration-300 ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } md:hidden z-30`}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center gap-5 mt-10">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() =>
                      hasDropdown(item) &&
                      handleDesktopDropdownToggle(item.title, true)
                    }
                    onMouseLeave={() =>
                      hasDropdown(item) &&
                      handleDesktopDropdownToggle(item.title, false)
                    }
                  >
                    {hasDropdown(item) ? (
                      <>
                        <button
                          className={`flex items-center cursor-pointer text-xl gap-1 after:transition-all after:duration-300 text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:h-[4px] after:bg-black ${
                            isActivePath(item.url)
                              ? "font-bold"
                              : isScrolled
                              ? "font-bold"
                              : "font-bold"
                          }`}
                        >
                          {item.title} <ChevronDown size={18} />
                        </button>
                        <div
                          className={`w-full px-4 overflow-hidden transition-all duration-300 origin-top
                                        ${
                                          desktopDropdowns[item.title]
                                            ? "transform scale-y-100 opacity-100 visible max-h-96"
                                            : "transform scale-y-0 opacity-0 invisible max-h-0"
                                        }`}
                        >
                          {getDropdownContent(item)}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        className={`relative transition text-xl after:transition-all after:duration-300 text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-0 after:h-[3px] after:bg-[#303030] ${
                          pathname === item.url
                            ? "after:w-full font-bold"
                            : isScrolled
                            ? "hover:after:w-full font-bold"
                            : "hover:after:w-full font-bold"
                        }`}
                        onClick={() => {
                          closeAllMenus();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                {/* <Link
                href="/login"
                className="block sm:hidden py-2 px-5 bg-[#303030] text-[#FCFCFC] shadow-xs hover:bg-primary/90 rounded-md"
              >
                Login
              </Link> */}
                <Button>Book Now</Button>
                <Link
                  href="https://buy.stripe.com/6oE3dD2n1adN2oU3ci"
                  className="block sm:hidden py-2 px-5 rounded-md border border-[#303030] bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                >
                  Account Set Up Payment
                </Link>
              </div>
            </div>

            <div className="h-full flex items-center gap-2 md:gap-5">
              <Button
                size="lg"
                className="group h-full relative overflow-hidden uppercase"
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute left-0 top-1/2 h-full w-full rounded-full bg-[#176864] transition-transform duration-500 ease-in-out transform -translate-x-full -translate-y-1/2 group-hover:h-20 group-hover:scale-110 group-hover:translate-x-0 z-0"></span>
              </Button>
              {/* <Button
                variant="primary"
                size="lg"
                className="group relative overflow-hidden uppercase"
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute left-1/2 top-full h-5 w-5 -translate-x-1/2 rounded-full bg-[#176864] transform scale-0 origin-center transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:scale-[8] group-hover:-translate-y-1/2 z-0"></span>
              </Button>
              <Button
                variant="border"
                size="lg"
                className="group relative overflow-hidden uppercase"
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 translate-y-0 rounded-full bg-[#176864] transform origin-center scale-[8] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:scale-0 group-hover:-translate-y-full z-0"></span>
              </Button> */}

              {/* <Link
              href="/login"
              className="hidden sm:block py-2 px-5 bg-[#303030] text-[#FCFCFC] shadow-xs hover:bg-primary/90 rounded-md"
            >
              Login
            </Link> */}
              <button
                className="md:hidden cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Image
                  src="/icons/menu-icon.png"
                  alt="icon"
                  width={38}
                  height={38}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
