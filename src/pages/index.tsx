import Head from "next/head";

import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SetUsApart from "../components/SetUsApart";
import WeOffer from "../components/WeOffer";
import Welcome from "../components/Welcome";
import Who from "../components/Who";

export default function Home() {
  return (
    <>
      <Head>
        <title>M&R Home Cleaning</title>
        <meta name="description" content="Next Weave" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header></Header>
      <Hero></Hero>
      <Welcome></Welcome>
      <Who></Who>
      <WeOffer></WeOffer>
      <SetUsApart></SetUsApart>
      <Form></Form>

      <Footer></Footer>
    </>
  );
}
