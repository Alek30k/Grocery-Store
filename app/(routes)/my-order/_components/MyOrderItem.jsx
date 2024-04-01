import Image from "next/image";

const MyOrderItem = ({ orderItem }) => {
  return (
    <div className="w-[60%]">
      <div className="grid grid-cols-5  mt-3 items-center">
        <Image
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            orderItem.product.data.attributes.images.data[0].attributes.url
          }
          alt="image"
          width={80}
          height={80}
          className="bg-gray-100 p-5 rounded-md border"
        />
        <div className="col-span-2">
          <h2 className="">{orderItem.product.data.attributes.name}</h2>
          <h2 className="">
            Item Price: {orderItem.product.data.attributes.mrp}
          </h2>
        </div>
        <h2 className="">Quantity: {orderItem.quantity}</h2>
        <h2 className="">Price: {orderItem.amount}</h2>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default MyOrderItem;
