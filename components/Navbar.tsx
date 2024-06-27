"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = (props: any) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="sm:px-16 px-6  w-full hidden lg:flex   items-center  mx-auto z-100  rounded-lg  h-14 relative  z-50">
        <div className="w-full  md:flex justify-between items-center mx-auto text-textColorWhite dark:text-textColor">
          <Link
            href="/"
            className="flex items-center gap-2 logo"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={props.darkMode ? `./logo-l.svg` : `./logo.svg`}
              alt="logo"
              className="w-10 h-10"
            />
          </Link>
          <div className="flex items-center gap-4">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navItems.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActive(link.name);
                    }}
                    className={`${
                      active === link.name
                        ? "text-textHover"
                        : "text-textColorWhite dark:text-textColor"
                    } hover:text-textHover text-[16px] font-medium cursor-pointer`}
                  >
                    {index == 2 ? (
                      <button className="bg-buttonBgWhite hover:bg-buttonBgWhiteHover dark:bg-buttonBg dark:hover:bg-buttonHover  rounded-3xl px-4 py-1">
                        <a href={`#${link.id}`}>{link.name}</a>
                      </button>
                    ) : (
                      <a href={`#${link.id}`}>{link.name}</a>
                    )}
                  </li>
                );
              })}
            </ul>
            <RxDividerVertical />
            <button onClick={props.toggleDarkMode}>
              {props.darkMode ? (
                <MdDarkMode className="text-backgroundWhite " />
              ) : (
                <MdLightMode className="text-buttonBg" />
              )}
            </button>
            <RxDividerVertical />
          </div>
        </div>
      </nav>
      <nav className="lg:hidden flex flex-1 justify-between items-center mx-10 text-textColor relative  z-50">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
              src={props.darkMode ? `./logo-l.svg` : `./logo.svg`}
              alt="logo"
              className="w-10 h-10"
            />
        </Link>
        <div className="flex gap-8 justify-center items-center">
          <button onClick={props.toggleDarkMode}>
            {props.darkMode ? (
              <MdDarkMode className="text-backgroundWhite " />
            ) : (
              <MdLightMode className="text-buttonBg" />
            )}
          </button>
          <RxDividerVertical orientation="vertical" color="#414853" />

          {toggle ? (
            <ImCross
              className={` ${
                props.darkMode ? "text-backgroundWhite" : "text-buttonBg"
              } w-12 h-12  font-bold  cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className={` ${
                props.darkMode ? "text-backgroundWhite" : "text-buttonBg"
              } w-12 h-12  font-bold  cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
        </div>
      </nav>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        }  mx-10 mt-6 justify-center lg:hidden relative z-50`}
      >
        <ul className="list-none flex flex-col items-center gap-5">
          {navItems.map((link, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.name);
                }}
                className={`${
                  active === link.name
                    ? "text-textHover"
                    : " dark:text-textColor text-textColorWhite"
                } hover:text-textHover text-[18px] font-medium cursor-pointer`}
              >
                {index == 2 ? (
                  <button className="bg-buttonBgWhite hover:bg-buttonBgWhiteHover dark:bg-buttonBg dark:hover:bg-buttonHover  rounded-3xl px-4 py-1">
                    <a href={`#${link.id}`}>{link.name}</a>
                  </button>
                ) : (
                  <a href={`#${link.id}`}>{link.name}</a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
