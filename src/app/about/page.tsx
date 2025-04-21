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

  return (
    <div>
      <div className="w-full min-h-[300px] md:min-h-[400px] bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image1.png)] bg-cover bg-center bg-blend-overlay text-white py-16 md:py-32 px-4 text-center">
        <h1 className="text-lg md:text-3xl font-black">ONE CRUISE AT A TIME</h1>
        <p className="text-sm md:text-lg font-medium mt-2">
          Where every journey is as unforgettable as the{" "}
        </p>
        <p className="text-sm md:text-lg font-medium">
          destination- your passport to all things cruising.
        </p>
      </div>
      <div className="w-full min-h-[300px] md:min-h-[400px] bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image3.png)] bg-cover bg-center bg-blend-multiply text-white py-16 md:py-32 px-4 gap-4 md:gap-8 text-center">
        <h1 className="text-lg md:text-3xl font-black">a tale form the sea</h1>
        <h1 className="text-base md:text-2xl font-medium">
          Set Sail with Unforgettable Experiences{" "}
        </h1>
        <p className="text-sm md:text-lg">
          Not just a journey — it’s a collection of once-in-a-lifetime moments.
          Imagine waking up to a new horizon each day, dining under the stars,
          exploring exotic ports, and sharing laughter with fellow travelers.
          Whether you&apos;re chasing sunsets in the Caribbean, discovering
          hidden gems in the Mediterranean, or relaxing on a luxury deck with a
          drink in hand — unforgettable is just the beginning.
        </p>
        <p className="text-sm md:text-lg">
          Come aboard and create memories that stay with you long after the
          waves fade.
        </p>
      </div>
      <div
        className="w-full h-[400px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/image1.png)" }}
      >
        {/* Empty container for parallax effect */}
      </div>
      <div className="relative bg-gray-700 bg-[url(/images/ship.png)] bg-cover bg-center bg-blend-multiply text-white px-4 py-12 md:px-20 md:py-24 lg:px-40 lg:py-40 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
        <Image
          src="/images/ship.png"
          width={500}
          height={100}
          alt="images"
          className="mb-6 md:mb-0"
        />
        <div className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
          <Image
            src="/images/Vector.svg"
            alt="cap"
            width={20}
            height={20}
            className="absolute z-10 left-4 top-4"
          />
          <h1 className="text-lg md:text-xl font-bold">Our Story</h1>
          <p className="text-sm md:text-base">
            DESTRO began with a simple dream — to share the magic of the sea
            with the world. What started as a single voyage has grown into a
            collection of carefully curated experiences that blend comfort,
            adventure, and authentic discovery.
          </p>
          <p className="text-sm md:text-base">
            We believe travel isn’t just about where you go, but how you feel
            along the way. Every cruise is a chance to reconnect — with nature,
            with loved ones, and with yourself. And as we continue to grow, so
            does our commitment to crafting unforgettable journeys for every
            kind of traveler.
          </p>
          <p className="text-sm md:text-base">
            This is more than cruising. This is Destro.
          </p>
        </div>
      </div>
      {/* Curved SVG shape divider at the bottom */}

      <div className="relative w-full min-h-[320px] md:min-h-[400px] flex flex-col justify-center items-center bg-[url(/images/image4.png)] bg-cover bg-center text-white py-16 md:py-32 px-4 md:px-20 gap-3 md:gap-6 overflow-hidden">
        {/* Top Ellipse - centered and pinned to top */}
        <Image
          src="/images/Ellipse.svg"
          alt="top ellipse"
          width={1700}
          height={100}
          className="absolute top-[] left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none"
          priority
        />
        <Image
          className="z-10"
          src="/images/Vector1.svg"
          width={200}
          height={100}
          alt="logo"
        />
        <h1 className="text-2xl md:text-4xl font-bold z-10">
          Our Mission And Vision
        </h1>
        <div className="flex flex-col justify-center items-center z-10 text-base md:text-2xl text-center">
          <p>To create unforgettable journeys across the sea.</p>
          <p>
            To redefine cruise travel through meaningful experiences,
            exceptional
            <br className="hidden md:block" />
            service, and a deep commitment to exploration and connection.
          </p>
        </div>
        {/* Bottom Ellipse - centered and pinned to bottom */}
        <Image
          src="/images/Ellipse.svg"
          alt="bottom ellipse"
          width={1700}
          height={10}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none"
          priority
        />
      </div>
      <div className="relative w-full flex flex-col justify-center items-center bg-blend-overlay bg-teal-600 text-white py-12 md:py-20 px-4 md:px-10 lg:px-40 gap-4 md:gap-6 overflow-hidden">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Why <br className="block md:hidden" />
          Choose Yeti Cruise
        </h1>
        <p className="text-base md:text-lg text-center">
          Whether you seek the sun-kissed beaches of the Caribbean or the
          vibrant cultures <br className="hidden md:block" /> of the
          Mediterranean, we have the perfect voyage for you.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center items-center w-full">
          {links.map((link, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center text-center gap-2 w-full max-w-xs"
            >
              <Image src={link.img} width={32} height={32} alt="logo" />
              <h2 className="text-lg md:text-xl font-semibold">{link.title}</h2>
              <p className="text-sm md:text-base">{link.content}</p>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 mt-2 bg-white text-black rounded font-semibold hover:text-white hover:bg-teal-700 hover:border-white hover:border transition">
          Explore Now
        </button>
        <Image
          src="/images/Ellipse1.png"
          alt="alt"
          width={1500}
          height={50}
          className="absolute left-1/2 mt-[20px] -translate-x-1/2 translate-y-15 bottom-0 w-full h-auto pointer-events-none z-10"
        />
      </div>
      <div className="h-250 bg-[#F9F6ED]">
        <div className="mt-4 px-5 py-8 gap-5">
          <div className="flex items-center justify-between ">
            <div className="flex flex-col ">
              <p>Cruise in Style</p>
              <h1 className="text-4xl text-teal-600 font-bold">
                The Most Epic
                <br /> Cruise ever <br /> to set sail
              </h1>
            </div>
            <div className="flex gap-[29px] h-[190px]  ">
              <Image
                src="/images/ship.png"
                width={250}
                height={400}
                alt="logo"
                className="rounded-xl h-70 "
              />
              <Image
                src="/images/ship.png"
                width={250}
                height={400}
                alt="logo"
                className="rounded-xl h-70"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5">
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
              className="absolute  z-100  fill object-cover"
            />
            <div className="flex gap-5">
              <div className="grid grid-cols-2 h-[500px] gap-5 mt-[110px] mr-[5px]">
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={400}
                  alt="logo"
                  className="rounded-xl h-70 "
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={200}
                  alt="logo"
                  className="rounded-xl h-70"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={300}
                  alt="logo"
                  className="rounded-xl h-70"
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={200}
                  alt="logo"
                  className="rounded-xl h-70"
                />
              </div>
              <div className="h-[100px] ">
                <Image
                  src="/images/ship.png"
                  width={530}
                  height={100}
                  alt="logo"
                  className="rounded-xl h-[580] mt-[110px] "
                />
                <Image
                  src="/images/ship.png"
                  width={250}
                  height={200}
                  alt="logo"
                  className="rounded-xl h-[280px] absolute  mt-[-280] left-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
