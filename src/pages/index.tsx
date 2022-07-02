import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "@components/Navigation";
import { catalogModel } from "src/lib/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Explorer</title>
        <meta name="description" content="Explorer test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation data={catalogModel} />
      </main>
    </>
  );
};

export default Home;
