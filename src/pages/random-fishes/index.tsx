import { fishApiLinksData } from '@content/data/api-links';
import { IFishDataType } from '@modules/random-fishes/types';
import { RandomFishes } from '@modules/random-fishes';
import Head from 'next/head';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const RandomFishesPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Random Fishes API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RandomFishes data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: IFishDataType[] }> = async (context) => {
  const res = await fetch(fishApiLinksData[0].apiUrl);
  const data: IFishDataType[] = await res.json();
  
  return {
    props: {
      data
    }
  }
}

export default RandomFishesPage;