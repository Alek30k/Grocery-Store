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
      <div className="relative md:px-20 lg:px-32 bg-green-600 w-full h-[300px] flex mt-16 md:justify-between justify-center items-center">
        <div className="flex flex-col w-3/4">
          <div className="">
            <h1 className="grid grid-cols-2 lg:grid-cols-1 text-white font-bold text-2xl md:text-4xl lg:text-6xl w-[650px]">
              We Delivery your Grocery 24 Hours
            </h1>
            <Button
              variant="outline"
              className="text-primary hover:text-white hover:bg-primary border-none rounded-full mt-6"
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className=" hidden  md:flex absolute right-40 top-[-100px] w-1/4">
          <Image
            src="/moto.png"
            alt="banner"
            width={600}
            height={600}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
