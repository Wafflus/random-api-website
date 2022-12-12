import '../styles/globals.css';
import { AiFillPicture } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { Link, Menu, MenuArea, MenuItem } from '@components/global';
import { MdOutgoingMail } from 'react-icons/md';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const extraMenuOptions = (
    <>
      <Link href='mailto:contact@wafflus.com'><>Contact me <MdOutgoingMail size={20} aria-label='(Opens in the mail app)'/></></Link>
      <Link href='https://github.com/Wafflus/random-api-website'><>Check the code on Github <BiLinkExternal aria-label='(Opens in a new tab)'/></></Link>
    </>
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      
      <div className='flex flex-col h-full min-h-screen bg-secondaryColor-light font-roboto md:flex-row'>
        <Menu title='Random API' defaultActiveItem={pathname.slice(1)} separateItemsChildren={extraMenuOptions}>
          <MenuArea title='Navigation' >
            <MenuItem id='random-pictures' href='/random-pictures'><><AiFillPicture/> <span>Random Pictures</span></></MenuItem>
          </MenuArea>
        </Menu>

        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp;
