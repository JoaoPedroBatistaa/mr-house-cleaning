import Head from "next/head";

import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceAreas from "../components/ServiceAreas";
import SetUsApart from "../components/SetUsApart";
import WeOffer from "../components/WeOffer";
import Welcome from "../components/Welcome";
import Who from "../components/Who";

export default function Home() {
  return (
    <>
      <Head>
        <title>M&R Home Cleaning Services | House Cleaning in Jacksonville, FL</title>
        <meta name="description" content="Professional residential and commercial cleaning services in Jacksonville, FL. Deep cleaning, move-in/out, post-construction. Get a free quote today!" />
        <meta name="keywords" content="house cleaning, home cleaning services, professional cleaning, residential cleaning, deep cleaning, move in move out cleaning, post construction cleaning, cleaning services Jacksonville, cleaning services Jacksonville Beach, cleaning services Atlantic Beach, cleaning services Ponte Vedra, maid service, housekeeping, commercial cleaning Jacksonville FL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="M&R Home Cleaning Services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="M&R Home Cleaning Services | House Cleaning in Jacksonville, FL" />
        <meta property="og:description" content="Professional residential and commercial cleaning services in Jacksonville, FL. Trusted since 2016. Get your free quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mr-house-cleaning.vercel.app" />
        <meta property="og:image" content="https://mr-house-cleaning.vercel.app/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M&R Home Cleaning Services | Professional House Cleaning" />
        <meta name="twitter:description" content="Professional residential and commercial cleaning services in Jacksonville, FL. Trusted since 2016." />
        <link rel="icon" href="/icon.svg" />
        <link rel="canonical" href="https://mr-house-cleaning.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "M&R Home Cleaning Services",
              image: "https://mr-house-cleaning.vercel.app/hero.jpg",
              "@id": "https://mr-house-cleaning.vercel.app",
              url: "https://mr-house-cleaning.vercel.app",
              telephone: "+18572044715",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.3322,
                longitude: -81.6557,
              },
              areaServed: {
                "@type": "City",
                name: "Jacksonville, FL",
              },
              description:
                "Professional residential and commercial cleaning services in Jacksonville, FL. Since 2016, M&R Home Cleaning offers regular cleaning, deep cleaning, move-in/move-out, and post-construction services.",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.instagram.com/mrhomeservices.jax1/profilecard/?igsh=aWNzZWN2b20yZzI1",
                "https://www.facebook.com/share/pioCou4Vue4QUfEJ/?mibextid=JRoKGi",
              ],
            }),
          }}
        />
      </Head>

      <Header></Header>
      <Hero></Hero>
      <Welcome></Welcome>
      <Who></Who>
      <WeOffer></WeOffer>
      <SetUsApart></SetUsApart>
      <ServiceAreas></ServiceAreas>
      <Form></Form>

      <Footer></Footer>
    </>
  );
}
