import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.allContent}>
        <p className={styles.title}>What We Offer</p>

        <p className={styles.description}>
          At M&R, we offer a variety of services to meet your residential
          cleaning needs:
        </p>

        <div className={styles.container} id="Home">
          <div className={styles.leftContainer}>
            <img src="/regular.svg" alt="" />

            <p className={styles.subtitle}>Regular Cleaning</p>

            <p className={styles.description}>
              Clean kitchen, countertops, exterior of refrigerator, microwave,
              bedrooms, window sills, living and dining room, wash bathrooms,
              mop throughout the house, dust entire house, take out trash cans,
              dust baseboards throughout the house.
            </p>

            <img src="/regular-line.svg" alt="" />
          </div>

          <div className={styles.rightContainer}>
            <img src="/deep-icon.svg" alt="" />

            <p className={styles.subtitle}>Deep Cleaning</p>

            <p className={styles.description}>
              Kitchen cleaning including exterior of refrigerator and cabinets,
              countertops, microwave, all bedrooms, window sills, living and
              dining room, wash bathrooms, mop throughout the house, dust entire
              house, take out trash cans, clean baseboards throughout the house,
              cleaning of vents, interior doors, and frames.
            </p>

            <img src="/deep-line.svg" alt="" />
          </div>
        </div>

        <div className={styles.container} id="Home">
          <div className={styles.rightContainer}>
            <img src="/post.svg" alt="" />

            <p className={styles.subtitle}>Post Construction</p>

            <p className={styles.description}>
              PACK MIMO (For Empty Homes): Includes blinds, shutters, ceiling
              fans & blades, baseboards, frames, and doors (cleaning walls and
              ceilings not included), inside oven, inside fridge (if empty),
              inside cabinets & drawers (if empty). Regular cleaning includes:
              home dusting (furniture etc.) and all floors vacuumed & mopped.
              Bathrooms: tub, toilet, and sink area thoroughly cleaned and
              disinfected. Kitchen: wipe down all counters, backsplash, sink
              area, spot clean the outside of cabinets, small appliances
              (microwave, coffee machine) in and out, bigger appliances only
              outside (fridge, oven). Ensure water and electricity are on during
              cleaning.
            </p>

            <img src="/deep-line.svg" alt="" />
          </div>
          <div className={styles.leftContainer}>
            <img src="/movein.svg" alt="" />

            <p className={styles.subtitle}>Move In/ Move Out</p>

            <p className={styles.description}>
              PACK PCHD (For Empty & Furnished Homes): Includes blinds,
              shutters, ceiling fans, baseboards, frames, doors (cleaning walls
              and ceilings not included), inside oven, fridge, cabinets &
              drawers (if empty), windows & racks (if reachable). Regular
              cleaning: dusting furniture, vacuuming & mopping floors, cleaning
              and disinfecting tub, toilet, sink areas. Kitchen: wipe counters,
              backsplash, sink, spot clean cabinet exteriors, clean small
              appliances (microwave, coffee machine) in and out, larger
              appliances (fridge, oven) outside only. Ensure water and
              electricity are on during cleaning.
            </p>

            <img src="/regular-line.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
