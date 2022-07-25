import { useState, useEffect } from 'react';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { darkTheme } from '@web3-ui/components';

export const Header = () => {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

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
        <button
          onClick={() =>
            setTheme(
              theme === 'theme-default' ? darkTheme.className : 'theme-default'
            )
          }
        >
          {theme === 'theme-default' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  );
};
