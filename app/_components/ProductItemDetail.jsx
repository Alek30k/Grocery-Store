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
      <div>
        <h2 className="text-2xl font-bold">{product?.attributes?.name}</h2>
        <h2 className="text-sm font-bold text-gray-500">
          {product?.attributes?.description}
        </h2>
      </div>
    </div>
  );
};

export default ProductItemDetail;
