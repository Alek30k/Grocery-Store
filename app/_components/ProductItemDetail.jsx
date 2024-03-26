import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";

const ProductItemDetail = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        alt="image"
        width={300}
        height={300}
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain pointer-events-none rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{product?.attributes?.name}</h2>
        <h2 className="text-sm text-gray-500">
          {product?.attributes?.description}
        </h2>
        <div className=" flex gap-3 ">
          {product?.attributes?.sellingPrice && (
            <h2 className="font-bold text-3xl">
              ${product?.attributes?.sellingPrice}
            </h2>
          )}
          <h2
            className={`font-bold text-3xl ${
              product?.attributes?.sellingPrice && "line-through text-gray-500"
            }`}
          >
            ${product?.attributes?.mrp}
          </h2>
        </div>
        <h2 className="font-medium text-lg">
          Quantity ({product?.attributes?.itemQuantityType})
        </h2>
        <div className="flex flex-col items-baseline ">
          <div className="p-2 border flex gap-10 items-center px-5">
            <button>-</button>
            <h2 className="">1</h2>
            <button>+</button>
          </div>
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemDetail;
