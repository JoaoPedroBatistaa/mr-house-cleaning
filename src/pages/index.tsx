import Head from "next/head";

import Form from "../components/Form";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Weave</title>
        <meta name="description" content="Next Weave" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header></Header>
      <Hero></Hero>
      <Form></Form>
    </>
  );
}
