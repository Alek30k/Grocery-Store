import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <div className="">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product?.attributes?.images?.data[0]?.attributes?.url
        }
        width={500}
        height={200}
        alt={product?.attributes?.name}
      />
    </div>
  );
};

export default ProductItem;
