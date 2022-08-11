import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {
    title: 'Getting Started',
    href: '/getting-started',
  },
];

const themeNavigation = [
  {
    title: 'Default Theme',
    href: '/theme/default-theme',
  },
  {
    title: 'Customize Theme',
    href: '/theme/customize-theme',
  },
  {
    title: 'Dark Mode',
    href: '/theme/dark-mode',
  },
];

export const SideNavigation = () => {
  const router = useRouter();

  return (
    <div>
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">
        Documentation
      </p>

      <div className="block lg:hidden sticky inset-0">
        <button
          id="menu-toggle"
          className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none"
        >
          <svg
            className="fill-current h-3 float-right"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
        id="menu-content"
      >
        <ul className="list-reset">
          {navigation.map((nav, index) => (
            <li key={index} className="py-1 md:my-0">
              <Link href={nav.href}>
                <a
                  className={classNames(
                    router.pathname === nav.href
                      ? 'border-soilGreen-600 left-active text-white bg-purple-800/80 cursor-default'
                      : 'left  border-black/20 text-gray-700 hover:text-white hover:bg-purple-800/60',
                    'block w-full rounded-lg p-2'
                  )}
                >
                  <span className="text-sm font-bold">{nav.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Disclosure as="div" className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-gray-900">Theme</span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? '-rotate-180' : 'rotate-0',
                        'h-6 w-6 transform'
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2">
                {themeNavigation.map((nav, index) => (
                  <Link href={nav.href} key={index}>
                    <a
                      className={classNames(
                        router.pathname === nav.href
                          ? 'border-soilGreen-600 left-active text-white bg-purple-800/80 cursor-default'
                          : 'border-black/20 text-gray-700 hover:text-white hover:bg-purple-800/60',
                        'block w-full rounded-lg p-2 my-1'
                      )}
                    >
                      <span className="text-sm font-bold">{nav.title}</span>
                    </a>
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
