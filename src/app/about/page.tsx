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
      <div
        className="w-full h-[400px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/images/image1.png)" }}
      >
        {/* Empty container for parallax effect */}
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

      <div className="h-80 w-full flex flex-col  justify-center items-center bg-[url(/images/image4.png)]  text-white p-40 gap-3">
        <Image
          src="/images/Ellipse.svg"
          alt="alt"
          width={1700}
          height={100}
          className="absolute mt-[-390px]  "
        />
        <Image
          className="z-10 "
          src="/images/Vector1.svg"
          width={200}
          height={100}
          alt="logo"
        />
        <h1 className="text-4xl">Our Mission And Vision</h1>
        <div className="flex flex-col justify-center items-center z-[10] text-2xl ">
          <p>To create unforgettable journeys across the sea.</p>
          <p>
            {" "}
            To redefine cruise travel through meaningful experiences,
            exceptional
            <br />
            service, and a deep commitment to exploration and connection.
          </p>
        </div>

        <Image
          src="/images/Ellipse.svg"
          alt="alt"
          width={1700}
          height={10}
          className="absolute mt-60 h-50 "
        />
      </div>
      <div className="h-130 w-full flex flex-col  justify-center items-center  bg-blend-overlay object-contain bg-teal-600 text-white py-55 px-40 gap-3">
        <h1>
          Why <br />
          Choose Yeti Cruise
        </h1>
        <p>
          Whether you seek the sun-kissed beaches of the Caribbean or the
          vibrant cultures <br /> of the Mediterranean, we have the perfect
          voyage for you.
        </p>
        <div className="flex lg:flex-row gap-1 justify-center items-center sm:flex-col">
          {links.map((links, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center text-center gap-2 sm:flex-col "
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
        <Image
          src="/images/Ellipse1.png"
          alt="alt"
          width={1800}
          height={50}
          className="absolute h-30  top-665"
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
