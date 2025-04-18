import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

interface FooterItem {
  label: string;
  icon?: React.ReactNode | null;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

const footerSections: FooterSection[] = [
  {
    title: "Contact",
    items: [
      {
        label: "+974 23324232",
        icon: <FaPhoneAlt className="text-[#006862]" />,
      },
      {
        label: "support@DESTRO.com",
        icon: <IoMail className="text-[#006862]" />,
      },
      {
        label: "Euless Texas.",
        icon: <FaLocationDot className="text-[#006862]" />,
      },
    ],
  },
  {
    title: "Our Cruises",
    items: [
      { label: "Nuya Cruises" },
      { label: "Unas Cruises" },
      { label: "Europe Cruises" },
      { label: "Gold Coast Cruises" },
      { label: "Alaska Cruises" },
    ],
  },
  {
    title: "Our Cruises",
    items: [
      { label: "Nuya Cruises" },
      { label: "Unas Cruises" },
      { label: "Europe Cruises" },
      { label: "Gold Coast Cruises" },
      { label: "Alaska Cruises" },
    ],
  },
  {
    title: "Special Offers",
    items: [
      { label: "Early Bird Discounts" },
      { label: "Last-Minute Deals" },
      { label: "Adventure Cruises" },
      { label: "Northern Lights Cruises" },
      { label: "Florida Cruise Adventure" },
    ],
  },
  {
    title: "Top Destinations",
    items: [
      { label: "Alaska Cruises" },
      { label: "European River Cruises 2025" },
      { label: "Asia Cruises" },
      { label: "Northern Lights Cruises" },
      { label: "Florida Cruise Adventure" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className=" font-main relative overflow-hidden">
      {/* Absolute Images  */}
      <Image
        width={600}
        height={200}
        src="/mask/mask1.png"
        alt="mask"
        className=" absolute -top-[170px] -left-[92px] "
      />
      <Image
        width={600}
        height={200}
        src="/mask/mask2.png"
        alt="mask"
        className=" absolute -top-[153px] left-[207px]"
      />
      <Image
        width={600}
        height={200}
        src="/mask/mask3.png"
        alt="mask"
        className=" absolute -top-[137px] left-[476px] "
      />
      <Image
        width={600}
        height={200}
        src="/mask/mask3.png"
        alt="mask"
        className="absolute -top-[126px] left-[754px]"
      />
      <Image
        width={600}
        height={200}
        src="/mask/mask3.png"
        alt="mask"
        className="absolute -top-[117px] -right-[229px] "
      />
      {/* Background  */}
      <div className="bg-[url(/images/footer_bg.png)]  bg-center bg-no-repeat bg-cover flex flex-col gap-16 ">
        {/* top COntent  */}
        <div className="flex flex-col gap-10 mt-32 max-w-[600px] mx-auto px-5">
          <h2 className="font-playfair text-white lg:text-5xl md:text-4xl text-3xl font-medium text-center">
            Subscribe Us <br /> To Get Latest Updates
          </h2>
          <div className=" flex rounded-sm overflow-hidden">
            <input
              className="basis-7/10 px-6 py-3 text-gray-700 placeholder-gray-400 bg-gray-100 focus:outline-none w-full"
              type="email"
              placeholder="Enter Email"
            />
            <button className=" basis-3/10 px-6 text-white bg-[#006862] hover:bg-[#034c46] font-medium w-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* Main Content  */}
        <div className="bg-[rgba(242,246,241,0.8)] ">
          <div className="max-w-[1400px] mx-auto py-8 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-10 gap-y-6">
              {footerSections.map((section, idx) => (
                <div key={idx} className="w-fit">
                  <div className="border-b-2 border-[#c2c2c2] mb-8 ">
                    <h4 className=" mb-3 uppercase text-[#4d4d4d] font-medium text-lg ">
                      {section.title}
                    </h4>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item: any, i: number) => (
                      <li key={i} className="flex items-center gap-2 mb-4">
                        {item.icon && <div>{item.icon}</div>}
                        <div
                          className={
                            section.title === "Contact"
                              ? "text-[#006862] font-medium"
                              : "text-[#4d4d4d]"
                          }
                        >
                          {item.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright content  */}
      <div className="bg-[#006862] text-center py-2 text-[#d9d9d9] max-sm:text-sm ">
        COPYRIGHT @2025 - DESTROCRUISE. ALL RIGHTS RESERVED. DESIGNED BY
        ISTEMLAB.AI
      </div>
    </footer>
  );
};

export default Footer;
