import { poppins } from "@/utils/Fonts";
import { Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckIcon from "@mui/icons-material/Check";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RectangleIcon from "@mui/icons-material/Rectangle";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const MainCarousel = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={
          "hidden  lg:block dark:bg-[#20B15A] dark:text-white text-black bg-[#d7f5dc] " +
          poppins.className
        }
      >
        <div className=" flex py-14 w-5/6 mx-auto">
          <div className="flex-col justify-evenly w-5/12  p-10 px-0">
            <div className="">
              <h1 className="font-bold text-5xl leading-[1.3]   ">
                Helping you Through
              </h1>
            </div>

            <div className="mt-2">
              <p className="">
                &quot;Elevating College Excellence: Your Trusted Online Resource
                for Student Support and Success!&quot;
              </p>
            </div>

            <div className="mt-8">
              <Button
                className="p-4 rounded-xl text-white dark:bg-white bg-[#20B15A] dark:text-[#20B15A] "
                variant="contained"
                color="success"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="w-7/12 relative">
            <Image
              src="/assests/lady.png"
              alt="lady.png"
              width={800}
              height={800}
            />
            <RectangleIcon
              style={{ width: "10px", height: "10px" }}
              className="absolute w-96 h-10 transform rotate-45 bottom-32 left-32  dark:bg-[#a586c0] dark:text-[#a586c0] bg-[#20B15A] text-[#20B15A]"
            />
            <RectangleIcon
              style={{ width: "10px", height: "10px" }}
              className="absolute bg-[#FF8345] text-[#FF8345] w-[10px] h-[10px] transform rotate-45 bottom-20 right-32 "
            />
            <RectangleIcon
              style={{ width: "10px", height: "10px" }}
              className="absolute  w-[10px] h-[10px] transform rotate-45 top-0 left-auto dark:bg-[#a586c0] dark:text-[#a586c0] bg-[#20B15A] text-[#20B15A] "
            />
            <RectangleIcon
              style={{ width: "10px", height: "10px" }}
              className="absolute  w-[10px] h-[10px] transform rotate-45 top-8 right-36 dark:bg-[#a586c0] dark:text-[#a586c0] bg-[#20B15A] text-[#20B15A] "
            />
            <StarBorderIcon
              style={{ width: "40px", height: "40px" }}
              className=" bg-[#FF8345] text-white absolute top-10 left-32 rounded-xl p-2 transform rotate-45 "
            />
            <CheckIcon
              style={{ width: "40px", height: "40px" }}
              className="absolute  top-32 right-20  rounded-xl p-3  dark:bg-[#a586c0] text-white bg-[#20B15A]"
              color="success"
            />
            <BusinessCenterIcon
              style={{ width: "40px", height: "40px" }}
              className="absolute  rounded-xl p-2 transform -rotate-45 bottom-4 left-24 dark:bg-[#a586c0] text-white bg-[#20B15A] "
            />
          </div>
        </div>
      </div>

      {/* responsive implementaion */}

      <div
        className={
          `lg:hidden w-full mx-auto pt-[3.3rem] flex flex-col items-center justify-center dark:bg-[#20B15A] dark:text-white bg-[#d7f5dc] text-black px-3` +
          poppins.className
        }
      >
        <div className="w-full h-full ">
          <Image
            className="object-cover"
            src="/assests/lady.png"
            alt="lady.png"
            height={500}
            width={500}
          />
        </div>
        <div className="w-full ">
          <p className=" font-[600] leading-6 py-2 pl-4 ">
            Introducing the ultimate college life platform, designed to simplify
            your journey and make every day a breeze.
          </p>
        </div>
        <div className="w-full pl-4">
          <Button
            color="success"
            className="rounded-xl dark:text-[#20B15A] dark:bg-white text-white bg-[#20B15A] mb-[1rem]"
            variant="contained"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
