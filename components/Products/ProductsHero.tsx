"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  mediaType: "video" | "image";
  mediaSrc?: string | StaticImageData; // fallback or for image
  mobileMediaSrc?: string | StaticImageData;
  desktopVideoSrc?: string;
  mobileVideoSrc?: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  addLineBreak?: boolean;
  className?: string;
}

const DynamicHero: React.FC<HeroProps> = ({
  mediaType,
  mediaSrc,
  mobileMediaSrc,
  desktopVideoSrc,
  mobileVideoSrc,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  className = "",
}) => {
  return (
    <div className="p-4">
      <div
        className="relative h-[97dvh] lg:h-[97dvh] xl:h-[96dvh] w-full overflow-hidden rounded-[16px]"
      >
        {/* Background Media */}
        {mediaType === "video" ? (
          <>
            {/* Mobile Video */}
            {mobileVideoSrc && (
              <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                className={`block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0 ${className}`}
              >
                <source src={mobileVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Desktop Video */}
            {desktopVideoSrc && (
              <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                className={`hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 ${className}`}
              >
                <source src={desktopVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        ) : (
          <>
            {/* Mobile Image */}
            <Image
              src={mobileMediaSrc ? mobileMediaSrc : mediaSrc!}
              alt={title}
              fill
              priority
              className={`block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0 ${className}`}
            />

            {/* Desktop Image */}
            <Image
              src={mediaSrc!}
              alt={title}
              fill
              priority
              className={`hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 ${className}`}
            />
          </>
        )}

        {/* Overlay */}
        <div className="bg-black/30 w-full h-full absolute inset-0" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 items-start text-white space-y-4">
          <div className="text-left">
            <h1 className="text-[28px] leading-[34px] sm:text-[36px] sm:leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[70px] xl:text-[65px] xl:leading-[78px] font-archivo font-normal">
              {title}
              {subtitle && <span className="font-bold"> {subtitle}</span>}
            </h1>
          </div>

          {description && (
            <p className="text-[14px] leading-[20px] sm:text-[14px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px] xl:text-[16px] xl:leading-[24px] font-open-sans text-left w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
              {description}
            </p>
          )}

          {buttonText && buttonLink && (
            <div className="flex flex-row gap-4 mt-1">
              <Link
                href={buttonLink}
                className="bg-[#005F20] text-white w-[130px] h-[48px] sm:w-[140px] sm:h-[50px] md:w-[150px] md:h-[52px] lg:w-[155px] lg:h-[54px] xl:w-[159px] xl:h-[56px] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] flex items-center justify-center font-medium rounded-[8px] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicHero;
