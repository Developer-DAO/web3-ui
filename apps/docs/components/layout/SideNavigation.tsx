const navigation = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Getting Started',
    href: '/getting-started',
  },
];

export const SideNavigation = () => {
  return (
    <div>
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>

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
            <li
              key={index}
              className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent"
            >
              <a
                href={nav.href}
                className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
              >
                <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">
                  {nav.title}
                </span>
              </a>
            </li>
          ))}
          {/* <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
            <a
              href="/"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500"
            >
              <span className="pb-1 md:pb-0 text-sm text-gray-900 font-bold">
                Home
              </span>
            </a>
          </li>
          <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
            <a
              href="/getting-started"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className="pb-1 md:pb-0 text-sm">Getting Started</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
