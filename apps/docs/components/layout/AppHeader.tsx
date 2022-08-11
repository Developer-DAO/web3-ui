export const AppHeader = () => {
  return (
    <nav
      id="header"
      className="fixed w-full z-50 top-0 bg-white border-b border-gray-200 shadow-md"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4 flex items-center">
          <a
            className="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
            href="/"
          >
            @web3-ui
          </a>
        </div>
      </div>
    </nav>
  );
};
