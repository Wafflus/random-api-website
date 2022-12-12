import { RandomPictures } from '@modules';
import Head from 'next/head';
import type { NextPage } from 'next';

const RandomPicturesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Random Pictures API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RandomPictures />
    </>
  )
}

export default RandomPicturesPage;
