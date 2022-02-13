import type { GetServerSideProps } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

import { IResult } from "../types";

interface IHomeProps {
  results: IResult[];
}

function Home({ results }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Nav />
        <Results results={results} />
      </main>
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { genre } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre as keyof typeof requests]?.url ||
      requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};
