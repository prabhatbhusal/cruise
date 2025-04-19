import React from "react";
import Image from "next/image";
const page = () => {
  const links = [
    {
      img: "/images/logo.svg",
      title: "Luxury Cruises and boats",
      content:
        "Discover your dream cruise today and  set sail for an unforgettable   adventure",
    },
    {
      img: "/images/logo1.svg",
      title: "Charter Guide",
      content:
        "From choosing the perfect vessel-we make the chartering process simple, smooth, and tailored to you.",
    },
    {
      img: "/images/logo2.svg",
      title: "Party & Events",
      content:
        "Celebrate life’s best moments where the ocean becomes your backdrop and every detail is taken care of.",
    },
    {
      img: "/images/logo3.svg",
      title: "Private Trips",
      content:
        "Escape the ordinary with a private cruise designed just for you.",
    },
  ];
  const sections = [
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image1.png)] bg-blend-overlay text-white",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image3.png)] bg-blend-multiply text-white p-40 gap-5",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image3.png)] bg-blend-overlay text-white",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image4.png)] bg-blend-overlay text-white",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image5.png)] bg-blend-overlay text-white",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
    {
      style:
        "h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image1.png)] bg-blend-overlay text-white",
      title: "ONE CRUISE AT A TIME",
      content:
        "Where every journey is as unforgettable as the <br/>destination- your passport to all things cruising.",
    },
  ];





  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
  ];
  return (
    <div>
      <div
        className={`h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image1.png)] bg-blend-overlay text-white`}
      >
        <h1 className="text-xl font-black ">ONE CRUISE AT A TIME</h1>
        <p className="text-md font-medium">
          Where every journey is as unforgettable as the{" "}
        </p>
        <p className="text-md font-medium">
          destination- your passport to all things cruising.
        </p>
      </div>
      <div
        className={`h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image3.png)] bg-blend-multiply text-white p-40 gap-5`}
      >
        <h1 className="text-2xl font-black ">a tale form the sea</h1>
        <h1 className="text-2xl font-medium">
          Set Sail with Unforgettable Experiences{" "}
        </h1>
        <p className="text-md ">
          Not just a journey — it’s a collection of once-in-a-lifetime moments.
          Imagine waking up to a new horizon each day, dining under the stars,
          exploring exotic ports, and sharing laughter with fellow travelers.
          Whether you&apos;re chasing sunsets in the Caribbean, discovering
          hidden gems in the Mediterranean, or relaxing on a luxury deck with a
          drink in hand — unforgettable is just the beginning.
        </p>
        <p className="text-md ">
          Come aboard and create memories that stay with you long after the
          waves fade.
        </p>
      </div>
      <div className="relative bg-gray-700 bg-[url(/images/ship.png)] bg-blend-multiply text-white px-40 py-40 flex flex-row gap-10 justify-center items-center">
        <Image src="/images/ship.png" width={500} height={100} alt="images" />

        <div className="flex flex-col gap-[20px] flex-1">
          <Image
            src="/images/Vector.svg"
            alt="cap"
            width={20}
            height={20}
            className="absolute z-1000"
          />
          <h1 className="text-xl font-bold">Our Story</h1>
          <p>
            DESTRO began with a simple dream — to share the magic of the sea
            with the world. What started as a single voyage has grown into a
            collection of carefully curated experiences that blend comfort,
            adventure, and authentic discovery.
          </p>
          <p>
            We believe travel isn’t just about where you go, but how you feel
            along the way. Every cruise is a chance to reconnect — with nature,
            with loved ones, and with yourself. And as we continue to grow, so
            does our commitment to crafting unforgettable journeys for every
            kind of traveler.
          </p>
          <p>This is more than cruising. This is Destro.</p>
        </div>
      </div>
      {/* Curved SVG shape divider at the bottom */}

      <div className="h-120 w-full flex flex-col  justify-center items-center bg-[url(/images/image4.png)]  text-white p-40 gap-3">
        <Image
          src="/images/Ellipse.svg"
          alt="alt"
          width={1700}
          height={50}
          className="absolute mt-[-450px] bg-none"
        />
        <Image src="/images/Vector1.svg" width={200} height={100} alt="logo" />
        <h1>Our Mission And Vision</h1>
        <p>To create unforgettable journeys across the sea.</p>
        <p>
          {" "}
          To redefine cruise travel through meaningful experiences, exceptional
          <br />
          service, and a deep commitment to exploration and connection.
        </p>
        <Image
          src="/images/Ellipse.svg"
          alt="alt"
          width={1700}
          height={50}
          className="absolute mt-120 bg-none"
        />
      </div>
      <div className="h-120 w-full flex flex-col  justify-center items-center  bg-blend-overlay object-contain bg-teal-600 text-white py-50 px-40 gap-3">
        <h1>
          Why <br />
          Choose Yeti Cruise
        </h1>
        <p>
          Whether you seek the sun-kissed beaches of the Caribbean or the
          vibrant cultures <br /> of the Mediterranean, we have the perfect
          voyage for you.
        </p>
        <div className="flex gap-1 justify-center items-center ">
          {links.map((links, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center text-center gap-2 "
            >
              <Image src={links.img} width={32} height={32} alt="logo" />
              <h1>{links.title}</h1>
              <p>{links.content}</p>
            </div>
          ))}
        </div>
        <button className="px-3 py-2  bg-white text-black hover:text-white hover:bg-teal-600 hover:border-white hover:border">
          Explore Now
        </button>
      </div>
      <div className="h-200 bg-[#F9F6ED]">
        <Image
          src="/images/Ellipse1.png"
          alt="alt"
          width={1800}
          height={50}
          className="absolute   top-596"
        />
        <div className="mt-19 p-5">
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col ">
              <p>Cruise in Style</p>
              <h1 className="text-4xl text-teal-600 font-bold">
                The Most Epic
                <br /> Cruise ever <br /> to set sail
              </h1>
            </div>
            <div className="flex gap-[19px] mt-10 h-[190px]  ">
              <Image
                src="/images/ship.png"
                width={175}
                height={300}
                alt="logo"
                className="rounded-xl"
              />
              <Image
                src="/images/ship.png"
                width={175}
                height={300}
                alt="logo"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button className="border-gray-400 text-gray-500 border px-10 py-2.5 rounded-full ">
                VIEW ALL
              </button>
            </div>
            <Image
              src="/images/leaf.svg"
              alt="alt"
              width={500}
              height={100}
              className="absolute top-625 z-100  fill object-cover"
            />
            <div className="flex gap-5">
              <div className="grid grid-cols-2 h-[200px] gap-5">
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={400}
                  alt="logo"
                  className="rounded-xl"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={200}
                  alt="logo"
                  className="rounded-xl"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={300}
                  alt="logo"
                  className="rounded-xl"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={200}
                  alt="logo"
                  className="rounded-xl"
                />
              </div>
              <div className="h-[100px] ">
                <Image
                  src="/images/ship.png"
                  width={400}
                  height={100}
                  alt="logo"
                  className="rounded-xl h-[500] right-"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={250}
                  alt="logo"
                  className="rounded-xl h-[260px] absolute left-110 top-670 "
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
