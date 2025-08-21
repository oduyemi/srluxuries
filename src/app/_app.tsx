import { AppProps } from 'next/app';
import RootLayout from '../app/layout';

function Srl({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default Srl;
