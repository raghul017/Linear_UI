import { Container } from "./Container";
import Link from "next/Link";
import Logo from "./icons/Logo";
import { TwitterIcon } from "./icons/TwitterIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { SlackIcon } from "./icons/SlackIcon";
const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: " #" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-transparent-white mt-12 py-[5.6rem] text-md">
      <Container className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex flex-row lg:flex-col justify-between h-full ">
            <div className="flex items-center text-grey">
              <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
            </div>
            <div className="flex text-grey space-x-4 mt-auto">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0">
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul className="">
                {column.links.map((link) => (
                  <li className="[&_a]:last:mb-0  transition-colors hover:text-off-white">
                    <Link
                      className="mb-3  block text-grey hover:text-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
