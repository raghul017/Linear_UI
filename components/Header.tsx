"use client";
import { use, useEffect, useState } from "react";
import Logo from "./icons/Logo";
import Link from "next/link";
import { Container } from "../components/Container";
import { Button } from "./Button";
import { Hamburger } from "./icons/Hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hambugerIsOpen, setHamburgerIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hambugerIsOpen);
  }, [hambugerIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerIsOpen]);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-lg" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hambugerIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "h-[calc(100vh_-_var(--navigation-height))] md:block fixed md:relative top-navigation-height md:top-0 md:h-auto md:w-auto left-0 w-full bg-background md:bg-transparent md:opacity-100 md:translate-x-0 transition-opacity md:transition-none duration-500 overflow-auto",
              hambugerIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vh]"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                " ease in [&_a]:text-lg [&_a:hover]:text-grey [&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center  md:[&_a]:text-md [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:duration-300 [&_a]:transition-[color,transform] [&_a]:md:transition-colors",
                hambugerIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto h-full items-center flex">
          <Link className="text-md mr-6" href="#">
            Log in
          </Link>
          <Button variant="primary" href="#">
            Sign Up
          </Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => {
            setHamburgerIsOpen(!hambugerIsOpen);
          }}
        >
          <span className="sr-only">Toggle menu</span>
          <Hamburger />
        </button>
      </Container>
    </header>
  );
};
