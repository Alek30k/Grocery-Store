import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="hidden relative  lg:px-32 bg-green-600 w-full h-[300px] md:flex mt-16 justify-evenly items-center">
        <div className="flex flex-col w-3/4">
          <div className="">
            <h1 className="grid grid-cols-2 lg:grid-cols-1 text-white font-bold text-4xl lg:text-6xl w-[650px]">
              We Delivery your Grocery 24 Hours
            </h1>
            <Button
              variant="outline"
              className="text-primary hover:text-white hover:bg-green-400 border-none rounded-full mt-6"
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className="flex absolute right-48 top-[-100px] w-1/4">
          <Image
            src="/moto.png"
            alt="banner"
            width={600}
            height={600}
            className="w-full h-[400px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
