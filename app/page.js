import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();

  return (
    <div className="p-5 md:p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList productList={productList} />
      <div className="relative px-24 bg-green-600 w-full h-[350px] flex mt-16 justify-between items-center">
        <div className="flex flex-col gap-8  ">
          <h1 className="text-white font-bold text-6xl w-[650px]">
            We Delivery your Grocery 24 Hours
          </h1>
          <Button
            variant="outline"
            className="text-primary hover:text-white hover:bg-primary border-none rounded-full  "
          >
            Order Now
          </Button>
        </div>
        <div className="absolute right-40 top-[-100px] }">
          <Image
            src="/moto.png"
            alt="banner"
            width={600}
            height={600}
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
