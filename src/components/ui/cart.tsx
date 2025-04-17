"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Cruise = {
  id: number;
  title: string;
  category: string;
  price: number;
  duration: string;
  images: string[];
};

type CardProps = {
  cruise: Cruise;
};

const Cards: React.FC<CardProps> = ({ cruise }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm mt-10">
      {/* Carousel */}
      <div className="relative w-full h-[400px] rounded-md overflow-hidden">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {cruise.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-[400px] relative">
                  <Image
                    src={image}
                    alt={`Cruise Image ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2 px-4 py-3 w-full">
        <h1 className="text-teal-600 text-sm">{cruise.category}</h1>
        <div className="flex justify-between text-2xl font-bold">
          <h1>{cruise.title}</h1>
          <h1 className="text-teal-600">${cruise.price}</h1>
        </div>
        <h2 className="text-sm">Duration - {cruise.duration}</h2>
        <div className="flex justify-between text-lg font-medium">
          <Link href="#" className="hover:underline">
            Discover
          </Link>
          <Link href="#" className="hover:underline">
            Book your Stay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
