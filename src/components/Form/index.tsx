import LoadingOverlay from "@/components/Loading";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection, db } from "../../../firebase"; // Ajuste o caminho conforme necessário
import styles from "./styles.module.scss";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [aptSuite, setAptSuite] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [accessInfo, setAccessInfo] = useState("");
  const [parking, setParking] = useState("");
  const [referral, setReferral] = useState("");
  const [cleaningRecommendation, setCleaningRecommendation] = useState("");
  const [flexibleTime, setFlexibleTime] = useState("");
  const [comments, setComments] = useState("");
  const [selectedPacks, setSelectedPacks] = useState([]);
  const [total, setTotal] = useState(0);

  const services = [
    // Serviços adicionais
    { name: "REGULAR CLEANING - Weekly - 1 Bedroom + 1 Bathroom", value: 98 },
    { name: "REGULAR CLEANING - Weekly - 2 Bedroom + 2 Bathroom", value: 120 },
    { name: "REGULAR CLEANING - Weekly - 3 Bedroom + 2 Bathroom", value: 130 },
    { name: "REGULAR CLEANING - Weekly - 3 Bedroom + 3 Bathroom", value: 140 },
    { name: "REGULAR CLEANING - Weekly - 4 Bedroom + 3 Bathroom", value: 160 },
    { name: "REGULAR CLEANING - Weekly - 4 Bedroom + 4 Bathroom", value: 180 },
    { name: "REGULAR CLEANING - Weekly - 5 Bedroom + 4 Bathroom", value: 230 },

    {
      name: "REGULAR CLEANING - Bi-Weekly - 1 Bedroom + 1 Bathroom",
      value: 110,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 2 Bedroom + 2 Bathroom",
      value: 130,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 3 Bedroom + 2 Bathroom",
      value: 140,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 3 Bedroom + 3 Bathroom",
      value: 150,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 4 Bedroom + 3 Bathroom",
      value: 170,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 4 Bedroom + 4 Bathroom",
      value: 190,
    },
    {
      name: "REGULAR CLEANING - Bi-Weekly - 5 Bedroom + 4 Bathroom",
      value: 240,
    },

    { name: "REGULAR CLEANING - Monthly - 1 Bedroom + 1 Bathroom", value: 120 },
    { name: "REGULAR CLEANING - Monthly - 2 Bedroom + 2 Bathroom", value: 140 },
    { name: "REGULAR CLEANING - Monthly - 3 Bedroom + 2 Bathroom", value: 150 },
    { name: "REGULAR CLEANING - Monthly - 3 Bedroom + 3 Bathroom", value: 160 },
    { name: "REGULAR CLEANING - Monthly - 4 Bedroom + 3 Bathroom", value: 180 },
    { name: "REGULAR CLEANING - Monthly - 4 Bedroom + 4 Bathroom", value: 200 },
    { name: "REGULAR CLEANING - Monthly - 5 Bedroom + 4 Bathroom", value: 250 },

    { name: "DEEP CLEANING STANDARD - 1 Bedroom + 1 Bathroom", value: 240 },
    { name: "DEEP CLEANING STANDARD - 2 Bedroom + 2 Bathroom", value: 280 },
    { name: "DEEP CLEANING STANDARD - 3 Bedroom + 2 Bathroom", value: 350 },
    { name: "DEEP CLEANING STANDARD - 3 Bedroom + 3 Bathroom", value: 370 },
    { name: "DEEP CLEANING STANDARD - 4 Bedroom + 3 Bathroom", value: 450 },
    { name: "DEEP CLEANING STANDARD - 4 Bedroom + 4 Bathroom", value: 480 },
    { name: "DEEP CLEANING STANDARD - 5 Bedroom + 4 Bathroom", value: 600 },
  ];

  const packs = [
    {
      name: "Last Minute/Next Day/Priority Fee",
      value: 35,
      img: "/last-minute.svg",
    },
    { name: "Sunday Fee", value: 40, img: "/sunday-fee.svg" },
    { name: "Pet Hair Fee", value: 20, img: "/pet-hair.svg" },
    { name: "Green Products", value: 20, img: "/green-products.svg" },
    {
      name: "Move In/Move Out Under 1000 sq. ft.",
      value: 75,
      img: "/move-1000.svg",
    },
    {
      name: "Move In/Move Out Under 2000 sq. ft.",
      value: 125,
      img: "/move-2000.svg",
    },
    {
      name: "Move In/Move Out Under 3000 sq. ft.",
      value: 175,
      img: "/move-2000.svg",
    },
    {
      name: "Move In/Move Out Under 4000 sq. ft.",
      value: 225,
      img: "/move-2000.svg",
    },
    {
      name: "Deep Cleaning Under 1000 sq. ft.",
      value: 100,
      img: "/deep-1000.svg",
    },
    {
      name: "Deep Cleaning Under 2000 sq. ft.",
      value: 150,
      img: "/deep-2000.svg",
    },
    {
      name: "Deep Cleaning Under 3000 sq. ft.",
      value: 200,
      img: "/deep-2000.svg",
    },
    {
      name: "Deep Cleaning Under 4000 sq. ft.",
      value: 250,
      img: "/deep-2000.svg",
    },
    {
      name: "Post Construction / Heavy Duty Under 1000 sq. ft.",
      value: 125,
      img: "/post-1000.svg",
    },
    {
      name: "Post Construction / Heavy Duty Under 2000 sq. ft.",
      value: 175,
      img: "/post-2000.svg",
    },
    {
      name: "Post Construction / Heavy Duty Under 3000 sq. ft.",
      value: 225,
      img: "/post-2000.svg",
    },
    {
      name: "Post Construction / Heavy Duty Under 4000 sq. ft.",
      value: 275,
      img: "/post-2000.svg",
    },
    { name: "Inside the Oven", value: 35, img: "/inside-oven.svg" },
    { name: "Inside the fridge Small", value: 25, img: "/inside-fridge.svg" },
    {
      name: "Inside the fridge Large",
      value: 35,
      img: "/inside-fridge-large.svg",
    },
    { name: "Inside Cabinets", value: 60, img: "/inside-cabinets.svg" },
    { name: "Empty Kitchen Cabinets", value: 30, img: "/empty-kitchen.svg" },
    { name: "Garage or Patio Sweeping", value: 20, img: "/garage.svg" },
    { name: "1-10 Interior Windows", value: 60, img: "/interior-windows.svg" },
    { name: "In/Out Sliding Glass Door", value: 20, img: "/sliding-glass.svg" },
    { name: "Clothes Folding / per load", value: 40, img: "/clothes.svg" },
    { name: "Load of Laundry / per load", value: 20, img: "/laundry.svg" },
  ];

  const handleServiceChange = (event: { target: { value: string } }) => {
    const selectedService = services.find(
      (service) => service.name === event.target.value
    );
    setService(selectedService?.name || "");
    setTotal(
      (selectedService?.value || 0) +
        // @ts-ignore
        selectedPacks.reduce((sum, pack) => sum + pack.value, 0)
    );
  };

  const handlePackToggle = (pack: { name: any; value: number }) => {
    const alreadySelected = selectedPacks.find(
      // @ts-ignore
      (selectedPack) => selectedPack.name === pack.name
    );

    if (alreadySelected) {
      setSelectedPacks(
        // @ts-ignore
        selectedPacks.filter((selectedPack) => selectedPack.name !== pack.name)
      );
      setTotal(total - pack.value);
    } else {
      // @ts-ignore
      setSelectedPacks([...selectedPacks, pack]);
      console.log(selectedPacks);
      setTotal(total + pack.value);
    }
  };

  const renderPacks = (
    packs: { name: any; img?: any; value?: number | undefined }[]
  ) => {
    return packs.map((pack: { name: any; img?: any; value?: number }) => {
      const isSelected = selectedPacks.some(
        // @ts-ignore
        (selectedPack) => selectedPack.name === pack.name
      );
      return (
        <div
          key={pack.name}
          className={isSelected ? styles.packActive : styles.pack}
          // @ts-ignore
          onClick={() => handlePackToggle(pack)}
        >
          <img src={pack.img} alt={pack.name} />
          <p>{pack.name}</p>
        </div>
      );
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Save data to Firestore
      await addDoc(collection(db, "CRM"), {
        service,
        date,
        time,
        firstName,
        lastName,
        email,
        phone,
        address,
        aptSuite,
        city,
        state,
        zipCode,
        preferredContact,
        accessInfo,
        parking,
        referral,
        cleaningRecommendation,
        flexibleTime,
        comments,
        selectedPacks,
        total,
      });

      // Send SMS
      const response = await fetch("/api/sendSms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service,
          date,
          time,
          firstName,
          lastName,
          email,
          phone,
          address,
          aptSuite,
          city,
          state,
          zipCode,
          preferredContact,
          accessInfo,
          parking,
          referral,
          cleaningRecommendation,
          flexibleTime,
          comments,
          selectedPacks,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send SMS");
      }

      toast.success("Form submitted and SMS sent successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("Error submitting form and sending SMS. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container} id="Form">
        <LoadingOverlay isLoading={isLoading} />
        <ToastContainer />
        <div className={styles.leftContainer}>
          <p className={styles.title}>STEP 1 : CHOOSE SERVICE CATEGORY</p>

          <p className={styles.subtitle}>Select Service Category</p>

          <p className={styles.description}>
            - RESIDENTIAL & IN-HOME COMMERCIAL : All cleanings come with our
            Standard Cleaning Pack, you can then add other Packs or Extras.
            (FULL RESIDENTIAL CLEANING CHECKLIST)
          </p>

          <p className={styles.description}>
            - COMMERCIAL : If you're not sure call to get an estimate (813)
            576-2009. (FULL OFFICE CLEANING CHECKLIST)
          </p>

          <select onChange={handleServiceChange} value={service}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ${service.value}
              </option>
            ))}
          </select>

          <hr className={styles.line} />

          <p className={styles.title}>CHOOSE SERVICE TYPE</p>

          <p className={styles.description}>
            Tell us about the size of your place (a half bath count as a full
            bathroom).
          </p>

          <div className={styles.inputs}>
            <input type="text" placeholder="1 or 2 Bedroom Home" />
            <input type="text" placeholder="1 Bathroom" />
          </div>

          <hr className={styles.line} />

          <p className={styles.title}>SELECT PACKS & EXTRAS</p>

          <p className={styles.description}>
            Tell us about the size of your place (a half bath count as a full
            bathroom).
          </p>

          <div className={styles.packs}>{renderPacks(packs.slice(0, 4))}</div>
          <div className={styles.packs}>{renderPacks(packs.slice(4, 8))}</div>
          <div className={styles.packs}>{renderPacks(packs.slice(8, 12))}</div>
          <div className={styles.packs}>{renderPacks(packs.slice(12, 16))}</div>
          <div className={styles.packs}>{renderPacks(packs.slice(16, 20))}</div>

          <hr className={styles.line} />

          <p className={styles.title}>
            STEP 2 : When would you like us to come?
          </p>

          <p className={styles.description}>
            Choose a date and time between our free slots. We have a 2 hour
            window arrival time.
          </p>

          <div className={styles.inputs}>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <input type="time" onChange={(e) => setTime(e.target.value)} />
          </div>

          <hr className={styles.line} />

          <p className={styles.title}>STEP 3 : ABOUT YOU</p>

          <p className={styles.description}>
            This information will be used to contact you about your service. If
            you're not the one present during the cleaning, provide information
            on the comments session above.
          </p>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <hr className={styles.line} />

          <p className={styles.title}>STEP 4 : YOUR HOME</p>

          <p className={styles.description}>
            Where would you like us to clean? If you have specific instructions
            let us know (gate code, garage code, Building, Apt number etc..).
            Make sure we serve your area before booking and we have all the info
            to get in the day of the cleaning.
          </p>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apt/Suite #"
              onChange={(e) => setAptSuite(e.target.value)}
            />
          </div>

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <hr className={styles.line} />

          <p className={styles.title}>ACCESS / BOOKING - INFORMATION</p>

          <p className={styles.description}>
            Preferred contact method (Please be available and easy to reach
            before and after your session).
          </p>

          <input
            type="text"
            placeholder="Preferred contact method"
            onChange={(e) => setPreferredContact(e.target.value)}
          />

          <p className={styles.description}>
            How will cleaners access your home?
          </p>

          <input
            type="text"
            placeholder="How will cleaners access your home?"
            onChange={(e) => setAccessInfo(e.target.value)}
          />

          <p className={styles.description}>Where can we park?</p>

          <input
            type="text"
            placeholder="Where can we park?"
            onChange={(e) => setParking(e.target.value)}
          />

          <p className={styles.description}>Where did you hear about us?</p>

          <input
            type="text"
            placeholder="Where did you hear about us?"
            onChange={(e) => setReferral(e.target.value)}
          />

          <p className={styles.description}>
            Our Cleaning Recommendation, last time professionally cleaned?
          </p>

          <input
            type="text"
            placeholder="Our Cleaning Recommendation, last time professionally cleaned?"
            onChange={(e) => setCleaningRecommendation(e.target.value)}
          />

          <p className={styles.description}>Is your day/time flexible?</p>

          <input
            type="text"
            placeholder="Is your day/time flexible?"
            onChange={(e) => setFlexibleTime(e.target.value)}
          />

          <hr className={styles.line} />

          <p className={styles.title}>CUSTOMER COMMENTS</p>

          <textarea
            placeholder="Special Cleaning Instructions? Places you need extra care? Garage/ Door Code? Entry Instructions? Any Pets (Put them away if needed)."
            onChange={(e) => setComments(e.target.value)}
          />

          <button className={styles.ctaButton} onClick={handleSubmit}>
            Get a free quote
          </button>
        </div>

        <div className={styles.rightContainer}>
          <p className={styles.title}>BOOKING SUMMARY</p>
          <hr className={styles.line} />

          {service && (
            <div className={styles.total}>
              <img src="/home.svg" alt="Service" />
              <p className={styles.label}>{service}</p>
              <p className={styles.label}>
                ${services.find((s) => s.name === service)?.value}
              </p>
            </div>
          )}

          {date && (
            <div className={styles.total}>
              <img src="/date.svg" alt="Date" />
              <p className={styles.label}>Service Date</p>
              <p className={styles.label}>{date}</p>
            </div>
          )}

          {selectedPacks.map((pack) => (
            <div
              key={
                // @ts-ignore
                pack.name
              }
              className={styles.total}
            >
              <img
                src={
                  // @ts-ignore
                  pack.img
                }
                alt={
                  // @ts-ignore
                  pack.name
                }
              />
              <p className={styles.label}>
                {
                  // @ts-ignore
                  pack.name
                }
              </p>

              <p className={styles.label}>
                $
                {
                  // @ts-ignore
                  pack.value
                }
              </p>
            </div>
          ))}

          <hr className={styles.line} />

          <div className={styles.total}>
            <p className={styles.label}>Total:</p>
            <p className={styles.value}>${total}</p>
          </div>
        </div>
      </div>
    </>
  );
}
