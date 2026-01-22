import { useState } from "react";
import styles from "./styles.module.scss";

export default function ServiceAreas() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllNeighborhoods, setShowAllNeighborhoods] = useState(false);
  
  const initialItemsCount = 12;
  const cities = [
    "Tampa",
    "St. Petersburg",
    "Clearwater",
    "Largo",
    "Pinellas Park",
    "Brandon",
    "Riverview",
    "Wesley Chapel",
    "Plant City",
    "Temple Terrace",
    "Safety Harbor",
    "Dunedin",
    "Oldsmar",
    "Palm Harbor",
    "Tarpon Springs",
    "Holiday",
    "New Port Richey",
    "Port Richey",
    "Hudson",
    "Trinity",
    "Odessa",
    "Land O' Lakes",
    "Zephyrhills",
    "Apollo Beach",
    "Sun City Center",
    "Ruskin",
    "Gibsonton",
    "Wimauma",
    "Thonotosassa",
    "Seffner",
    "Valrico",
    "Lithia",
    "Fish Hawk",
    "Bloomingdale",
    "Carrollwood",
    "Westchase",
    "Citrus Park",
    "Town 'n' Country",
    "Hyde Park",
    "Davis Islands",
    "Soho",
    "Ybor City",
    "Seminole Heights",
    "Tampa Heights",
    "Palma Ceia",
    "Bayshore Beautiful",
    "Beach Park",
    "Sunset Park",
    "Gandy",
    "MacDill AFB",
  ];

  const neighborhoods = [
    "Downtown Tampa",
    "Channelside",
    "Harbour Island",
    "Hyde Park Village",
    "Bayshore Boulevard",
    "Davis Islands",
    "Soho District",
    "Ybor City Historic District",
    "Seminole Heights",
    "Tampa Heights",
    "Westshore",
    "International Plaza",
    "Carrollwood",
    "Carrollwood Village",
    "Westchase",
    "Citrus Park",
    "Town 'n' Country",
    "New Tampa",
    "Hunter's Green",
    "Pebble Creek",
    "Cory Lake Isles",
    "Live Oak Preserve",
    "Cheval",
    "Avila",
    "Bayshore Gardens",
    "Beach Park",
    "Sunset Park",
    "Palma Ceia",
    "Bayshore Beautiful",
    "Ballast Point",
    "Gandy",
    "MacDill AFB",
    "Downtown St. Petersburg",
    "Historic Old Northeast",
    "Snell Isle",
    "Shore Acres",
    "Riviera Bay",
    "Maximo",
    "Euclid-St. Paul's",
    "Crescent Lake",
    "Roser Park",
    "Historic Kenwood",
    "Central Oak Park",
    "Greater Ridgecrest",
    "Azalea",
    "Meadowlawn",
    "Disston Heights",
    "Gateway",
    "Bardmoor",
    "Belleair",
    "Belleair Bluffs",
    "Belleair Beach",
    "Belleair Shore",
    "Indian Rocks Beach",
    "Indian Shores",
    "Madeira Beach",
    "Redington Beach",
    "Redington Shores",
    "Treasure Island",
    "St. Pete Beach",
    "Pass-a-Grille",
    "Gulfport",
    "South Pasadena",
    "Pasadena",
    "Kenneth City",
    "Seminole",
    "Bardmoor",
    "Bay Pines",
    "Clearwater Beach",
    "Sand Key",
    "Island Estates",
    "Countryside",
    "East Lake",
    "Highland Lakes",
    "Largo Central Park",
    "Ridgecrest",
    "Belleair",
    "Feather Sound",
    "Carillon",
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Areas We Serve</h2>
          <p className={styles.description}>
            M&R Home Cleaning Services proudly serves the greater Tampa Bay Area
            with professional residential and commercial cleaning services. We
            provide reliable, high-quality cleaning solutions to homes and
            businesses throughout the region.
          </p>

          <div className={styles.areasGrid}>
            <div className={styles.areaSection}>
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
            </div>

            <div className={styles.areaSection}>
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
          </div>

          <p className={styles.footerNote}>
            Don&apos;t see your area listed? Give us a call at{" "}
            <a href="tel:8135762009" className={styles.phoneLink}>
              (813) 576-2009
            </a>{" "}
            to check if we serve your location. We&apos;re always expanding our
            service area!
          </p>
        </div>
      </div>
    </>
  );
}

