import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { user, navigation, userNavigation } from "../../constants/navigation";
import { Link } from "react-router-dom";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  // 1. Contoh variabel kondisi (nanti bisa diganti dengan logic login beneran)
  const isLoggedIn = false;

  return (
    <Disclosure as="nav" className="bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                className="size-8"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
                {isLoggedIn ? (
                  <img
                    className="size-8 rounded-full outline outline-2 outline-white/10"
                    src={user.imageUrl}
                    alt="User Profile"
                  />
                ) : (
                  <div className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors">
                    <Link
                      to="/login"
                      className="text-white font-semibold text-sm"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </MenuButton>
              {isLoggedIn && (
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              )}
            </Menu>
          </div>

          <div className="-mr-2 flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              className={({ isActive }) =>
                classNames(
                  isActive ? "bg-gray-900 text-white" : "text-gray-300",
                  "block px-3 py-2 rounded-md"
                )
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>

        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="shrink-0">
              {isLoggedIn ? (
                <img
                  className="size-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              ) : (
                <div className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors">
                  <p className="text-white font-semibold text-sm">Login</p>
                </div>
              )}
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {isLoggedIn &&
              userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
