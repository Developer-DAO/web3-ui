import 'nextra-theme-docs/style.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactElement) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
