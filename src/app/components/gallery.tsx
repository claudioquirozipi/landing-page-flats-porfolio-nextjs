"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/cocina.jpg?height=600&width=800", alt: "Sala de estar" },
    { src: "/cocina.webp?height=600&width=800", alt: "Cocina" },
    {
      src: "/cuarto.webp?height=600&width=800",
      alt: "Dormitorio principal",
    },
    { src: "/sala2.webp?height=600&width=800", alt: "Baño" },
    { src: "/valcon2.webp?height=600&width=800", alt: "Balcón" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="gallery" className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Galería del Apartamento
      </h2>
      <div className="relative">
        <div className="h-96 aspect-w-16 aspect-h-9 mb-4">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            objectFit="cover"
            // height={600}
            // width={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="flex space-x-2 mt-4 overflow-hidden p-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 ${
              index === currentIndex ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={75}
              className={`h-full object-cover hover:opacity-75 transition-opacity ${
                index === currentIndex ? "" : "rounded-md"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
