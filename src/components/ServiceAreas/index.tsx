import { useState } from "react";
import styles from "./styles.module.scss";

export default function ServiceAreas() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllNeighborhoods, setShowAllNeighborhoods] = useState(false);
  
  const initialItemsCount = 6;
  const cities = [
    "Jacksonville",
    "Jacksonville Beach",
    "Atlantic Beach",
    "Neptune Beach",
    "Ponte Vedra",
    "Orange Park",
    "Fleming Island",
    "St. Johns",
    "Nocatee",
    "Fernandina Beach",
    "St. Augustine",
    "Mandarin",
    "Riverside",
    "Avondale",
    "San Marco",
    "Southside",
    "Baymeadows",
    "Beaches",
    "Julington Creek",
    "Fruit Cove",
    "Bartram Park",
    "Durbin",
    "World Golf Village",
    "Palm Valley",
    "Sawgrass",
    "Amelia Island",
    "Yulee",
    "Callahan",
    "Middleburg",
    "Green Cove Springs",
  ];

  const neighborhoods = [
    "Downtown Jacksonville",
    "Riverside",
    "Avondale",
    "San Marco",
    "Southside",
    "Baymeadows",
    "Mandarin",
    "Beaches",
    "Atlantic Beach",
    "Neptune Beach",
    "Jacksonville Beach",
    "Ponte Vedra Beach",
    "Ponte Vedra",
    "Sawgrass",
    "Palm Valley",
    "Nocatee",
    "Julington Creek",
    "Fruit Cove",
    "Bartram Park",
    "Durbin",
    "World Golf Village",
    "Orange Park",
    "Fleming Island",
    "Middleburg",
    "Green Cove Springs",
    "St. Johns",
    "Fernandina Beach",
    "Amelia Island",
    "Yulee",
    "Callahan",
    "St. Augustine",
    "Vilano Beach",
    "Crescent Beach",
    "Butler Beach",
    "Ponte Vedra Beach",
    "Palm Coast",
    "Jax Beach",
    "Mayport",
    "Arlington",
    "Springfield",
    "Murray Hill",
    "Ortega",
    "San Jose",
    "Lakewood",
    "Brentwood",
    "Durkeeville",
    "Eastside",
    "Northside",
    "Westside",
    "Oceanway",
    "Tallulah",
    "Cedar Hills",
    "Westside",
    "Hyde Park",
    "Brooklyn",
    "LaVilla",
    "East Jacksonville",
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Areas We Serve</h2>
          <p className={styles.description}>
            M&R Home Cleaning Services proudly serves Jacksonville, FL and surrounding areas
            with professional residential and commercial cleaning services. We
            provide reliable, high-quality cleaning solutions to homes and
            businesses throughout the region. We proudly serve Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra, Orange Park, Fleming Island, St. Johns, Nocatee, Fernandina Beach, St. Augustine, and surrounding areas.
          </p>

          <div className={styles.areasGrid}>
            <div className={styles.areaCard}>
              <h3 className={styles.subtitle}>Major Cities</h3>
              <ul className={styles.areaList}>
                {(showAllCities ? cities : cities.slice(0, initialItemsCount)).map(
                  (city, index) => (
                    <li key={index}>{city}</li>
                  )
                )}
              </ul>
              {cities.length > initialItemsCount && (
                <button
                  className={styles.seeMoreButton}
                  onClick={() => setShowAllCities(!showAllCities)}
                >
                  {showAllCities ? "See less" : "See more"}
                </button>
              )}
              <h3 className={styles.subtitle}>Neighborhoods & Communities</h3>
              <ul className={styles.areaList}>
                {(showAllNeighborhoods
                  ? neighborhoods
                  : neighborhoods.slice(0, initialItemsCount)
                ).map((neighborhood, index) => (
                  <li key={index}>{neighborhood}</li>
                ))}
              </ul>
              {neighborhoods.length > initialItemsCount && (
                <button
                  className={styles.seeMoreButton}
                  onClick={() => setShowAllNeighborhoods(!showAllNeighborhoods)}
                >
                  {showAllNeighborhoods ? "See less" : "See more"}
                </button>
              )}
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                title="M&R Home Cleaning Services - Jacksonville, FL"
                src="https://www.google.com/maps?q=Jacksonville,+FL&output=embed"
                className={styles.map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <p className={styles.footerNote}>
            Don&apos;t see your area listed? Give us a call at{" "}
            <a href="tel:8572044715" className={styles.phoneLink}>
              (857) 204-4715
            </a>{" "}
            to check if we serve your location. We&apos;re always expanding our
            service area!
          </p>
        </div>
      </div>
    </>
  );
}

