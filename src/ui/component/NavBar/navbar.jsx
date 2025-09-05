
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Logo from "../../../../public/assets/svg/logo.svg"
import {Link} from "react-router-dom"
const products = [
  { name: 'Japan', description: 'Japan is an archipelago, or string of islands, on the eastern edge of Asia', href: '/country/japan'},
  { name: 'Italy', description: 'Italy is well-known for its architecture, culture, art, opera, literature, film, and fashion', href: '/country/italy'},
  { name: 'Greece', description: 'Greece is a fascinating country with a rich history, beautiful beaches, and delicious food', href: '/country/greece'},
  { name: 'Thai Land', description: 'Thailand is home to Buddhist temples, exotic wildlife and spectacular islands', href: '/country/thailand' },
  { name: 'India', description: 'India has a unique culture and is one of the oldest and greatest civilizations of the world.', href: '/country/india'},
]
const callsToAction = [
  { name: 'Book Now', href: '/form', icon: PlayCircleIcon },
  { name: 'Contact US', href: '/form', icon: PhoneIcon },
]

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white ">
      <nav aria-label="Global" className="mx-auto xl:mx-[100px] flex max-w-full items-center justify-between p-6 lg:px-1 ">
        <div className="flex lg:flex-1 lg:ml-8">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Logo}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-[3px] text-sm/6 font-semibold text-gray-900 font-pop lg:text-[16px]">
              Popular Destination
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-dark" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 lg:text-[16px]">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 font-pop lg:text-[16px]"
                  >
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900 font-pop">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600 font-pop">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex font-pop items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 " />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link to="/flights" className="text-sm/6 font-semibold text-gray-900 font-pop lg:text-[16px]">
            Flights
          </Link>
          <Link to="/hotels" className="text-sm/6 font-semibold text-gray-900 font-pop lg:text-[16px]">
            Hotels
          </Link>
          <Link to="/rentalcars" className="text-sm/6 font-semibold text-gray-900 font-pop lg:text-[16px]">
            Rental Cars
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-8">
          <Link to="/contact" className="text-sm/6 font-semibold text-gray-900 font-pop lg:text-[16px]">
            Contact US <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                alt=""
                src={Logo}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-medium text-gray-900 hover:bg-gray-50 font-pop">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gery hover:bg-gray-50 font-pop"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/country"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 font-pop"
                >
                  Counutry
                </Link>
                <Link
                  to="blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 font-pop"
                >
                  Blog
                </Link>
                <Link
                  to="about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50 font-pop"
                >
                  About US
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-gray-900 hover:bg-gray-50 font-pop"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar;
