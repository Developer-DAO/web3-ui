import { useState, useEffect } from 'react';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { darkTheme, Button } from '@web3-ui/components';

export const Header = () => {
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
    document.body.classList.toggle('dark-mode');

    // console.log(document.body.classList);
  }, [theme]);

  return (
    <header>
      <nav id="bar" className="header">
        <Link href="/">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Elements
          </a>
        </Link>
        <Link href="/web3-components">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Components
          </a>
        </Link>
        <Link href="/colors">
          <a className="mx-8 hover:text-blue-500 active" aria-current="page">
            Colors
          </a>
        </Link>
        <button
          style={{}}
          onClick={() =>
            setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')
          }
        >
          {theme === 'theme-default' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  );
};
