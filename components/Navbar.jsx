"use client";
import { Fragment } from "react";
import { GrTime } from "react-icons/gr";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Popover className="fixed top-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          {/* Logo Section */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center space-x-2">
              <GrTime className="text-3xl sm:text-4xl text-white" />
              <span className="text-2xl sm:text-3xl font-bold text-teal-400">
                My Portfolio
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="-mr-2 flex md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-teal-300 hover:text-white focus:outline-none">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Popover.Button>
          </div>

          {/* Desktop Navigation Links */}
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {[
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/resources" },
              { name: "Contact_Me", href: "/Contact" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`text-lg ${
                  pathname === href
                    ? "font-bold text-teal-400"
                    : "font-medium text-white"
                } hover:text-teal-300`}
              >
                {name}
              </Link>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="md:hidden absolute top-0 inset-x-0 z-50 p-2 transition transform origin-top-right"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-neutral-900 divide-y divide-gray-700">
            <div className="pt-5 pb-6 px-5 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <GrTime className="text-2xl text-teal-400" />
                <span className="text-xl font-bold text-white">My Portfolio</span>
              </Link>
              <Popover.Button className="rounded-md p-2 text-neutral-400 hover:text-white">
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Popover.Button>
            </div>
            <div className="py-6 px-5 space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Skills", href: "/resources" },
                { name: "Contact_Me", href: "/Contact" },
              ].map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`block text-lg ${
                    pathname === href
                      ? "font-bold text-teal-400"
                      : "font-medium text-white"
                  } hover:text-teal-300`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
