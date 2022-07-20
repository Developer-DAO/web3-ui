import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.classList.add(theme);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === 'theme-default' ? 'theme-dark' : 'theme-default');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header>
      <nav id="bar" className="header">
        <Link href="/">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Resources
          </a>
        </Link>
        <Link href="/web3-elements">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Web3-Elements
          </a>
        </Link>
        <Link href="/web3-components">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Web3-Components
          </a>
        </Link>
        <Link href="/definitions">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Definitions
          </a>
        </Link>
        <button style={{}} onClick={() => handleThemeChange()}>
          {theme === 'theme-default' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  );
};
