import Head from "next/head";

import About from "../components/About";
import Contract from "../components/Contract";
import Form from "../components/Form";
import Gains from "../components/Gains";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Power from "../components/Power";
import Separetor from "../components/Separetor";
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
      <Separetor></Separetor>
      <Power></Power>
      <About></About>
      <OurServices></OurServices>
      <Gains></Gains>
      <Contract></Contract>
      <Separetor></Separetor>
    </>
  );
}
