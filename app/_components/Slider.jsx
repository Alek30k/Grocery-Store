import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderList }) => {
  // console.log(sliderList[0].attributes?.image?.data[0]?.attributes?.url);
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                slider.attributes?.image?.data[0]?.attributes?.url
              }
              alt="slider"
              width={1000}
              height={400}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
