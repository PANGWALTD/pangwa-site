"use client";
import { Image, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

function Home() {
  // State to track the current slide index (for text animations)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Custom Previous Arrow
  const PrevArrow = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
    <LeftOutlined
      className={`${className} absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10`}
      onClick={onClick}
    />
  );

  // Custom Next Arrow
  const NextArrow = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
    <RightOutlined
      className={`${className} absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10`}
      onClick={onClick}
    />
  );

  // Animation class
  const animationClass = (index: number) =>
    currentSlide === index ? "animate-fadeInUp" : "opacity-0";

  return (
    <div>
      <Carousel
        autoplay
        arrows
        prevArrow={<PrevArrow className={undefined} onClick={undefined} />}
        nextArrow={<NextArrow className={undefined} onClick={undefined} />}
        beforeChange={(current, next) => setCurrentSlide(next)} // Track slide change
      >
        <div className="relative max-h-[600px]">
          <Image
            preview={false}
            width="100%"
            height="600px"
            src="./colleagues-team.jpg"
            alt="Image 1"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transition-all duration-500 ease-in-out ${animationClass(
              0
            )}`}
          >
            <h1 className="text-4xl font-bold mb-2">Business Loans</h1>
          </div>
        </div>
        <div className="relative max-h-[600px]">
          <Image
            preview={false}
            width="100%"
            height="600px"
            src="./port1.jpg"
            alt="Image 2"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transition-all duration-500 ease-in-out ${animationClass(
              1
            )}`}
          >
            <h1 className="text-4xl font-bold mb-2">
              Trade Finance Solutions
            </h1>
          </div>
        </div>
        <div className="relative max-h-[600px]">
          <Image
            preview={false}
            width="100%"
            height="600px"
            src="./team-business-people-collaborating.avif"
            alt="Image 3"
            style={{ objectFit: "cover" }}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white transition-all duration-500 ease-in-out ${animationClass(
              2
            )}`}
          >
            <h1 className="text-4xl font-bold mb-2">
              Business Advisory & Consultancy
            </h1>
          </div>
        </div>
      </Carousel>

      {/* Additional CSS for text animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Home;
