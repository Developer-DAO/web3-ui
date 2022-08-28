import React, { useEffect, useState } from 'react';
import { Provider as AnkrProvider } from 'ankr-react';
// TODO: HooksProvider is not working on build for storybook or docs on vercel
// import { HooksProvider } from '@web3-ui/hooks';
// import { AlchemyProvider } from '@web3-ui/hooks';
import { CSS, getCssText, createTheme } from '../../theme/stitches.config';

export interface IWeb3uiProviderProps {
  children: React.ReactNode;
  theme?: CSS | null;
  id?: string;
  alchemyKey?: string;
  ankrKey?: string;
}

const attr = 'data-web3ui';
const createThemeRootProps = (id: string | undefined) => ({ [attr]: id || '' });

const createThemeRootSelector = (id: string | undefined) => {
  if (id && !/^[a-zA-Z0-9_]+$/.test(id)) {
    throw new Error(`Invalid ID: ${id}`);
  }

  return id ? `[${attr}="${id}-theme"]` : `[${attr}]`;
};

export const Web3uiProvider = ({
  children,
  theme,
  id,
}: IWeb3uiProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-default');

  // TODO: add types for theme
  const CustomTheme = createTheme('custom-theme', {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(theme as any),
  });

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (theme) setCurrentTheme(CustomTheme.className);
  }, [theme, setCurrentTheme, CustomTheme]);

  // const testScript = `<img src=??? onerror="alert('test script here')">`;

  // console.log(HooksProvider);
  const selector = createThemeRootSelector(id);

  if (!isMounted) return null;

  // TODO dangerous set innerHTML is set for ssr.  need to test this. https://stitches.dev/docs/server-side-rendering
  return (
    <AnkrProvider>
      <div {...createThemeRootProps(id)} className={currentTheme}>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{
            __html: [`${selector}${getCssText()}`].join(),
          }}
        />
        {children}
      </div>
    </AnkrProvider>
  );
};
