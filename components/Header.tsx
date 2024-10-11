"use client";
const { useState } = require("react");
import Logo from "./icons/Logo";
import Link from "next/link";
import { Container } from "../components/Container";
import { Button } from "./Button";
import { Hamburger } from "./icons/Hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hambugerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>

        <nav
          className={classNames(
            "h-[calc(100vh_-_var(--navigation-height))] md:block fixed md:relative top-navigation-height md:top-0 md:h-auto md:w-auto left-0 w-full bg-background md:bg-transparent overflow-auto",
            hambugerIsOpen ? "" : "hidden"
          )}
        >
          <ul
            className={classNames(
              "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
              "[&_a]:text-md [&_a:hover]:text-grey [&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:transition-colors md:[&_a]:text-sm"
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

        <div className="ml-auto h-full items-center flex">
          <Link className="text-sm mr-6" href="#">
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
