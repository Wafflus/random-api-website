import '../styles/globals.css';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
