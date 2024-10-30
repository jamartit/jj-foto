import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imageOnRight?: boolean;
}

export default function ImageWithText({
  imageSrc,
  imageAlt,
  title,
  description,
  imageOnRight = false,
}: ImageWithTextProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={cn(
          "flex flex-col gap-8 items-center",
          "md:flex-row md:gap-12",
          imageOnRight && "md:flex-row-reverse"
        )}
      >
        <div className="w-full md:w-1/2 relative aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
