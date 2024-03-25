import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg ">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        width={500}
        height={200}
        alt={product?.attributes?.name}
        className="h-[200px] w-[200px] object-contain"
      />
      <h2 className="font-bold text-lg">{product?.attributes?.name}</h2>
      {product?.attributes?.sellingPrice && (
        <h2 className="">${product?.attributes?.sellingPrice}</h2>
      )}
      <h2 className="font-bold line-through">${product?.attributes?.mrp}</h2>
      <Button
        variant="outline"
        className="text-primary hover:text-white hover:bg-primary"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductItem;
