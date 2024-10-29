"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {

  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[400px] w-full">
            <Image
              src="/logobig.png"
              alt="Pierwsze zdjęcie"
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white rounded-b-lg">
              <h3>Siema!</h3>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[400px] w-full">
            <Image
              src="/logobig.png"
              alt="Drugie zdjęcie"
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white rounded-b-lg">
              <h3>Yohohoh</h3>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[400px] w-full">
            <Image
              src="/logobig.png"
              alt="Trzecie zdjęcie"
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white rounded-b-lg">
              <h3>Papapa</h3>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  );
}
