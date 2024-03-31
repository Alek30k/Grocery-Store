import Image from "next/image";

const MyOrderItem = ({ orderItem }) => {
  console.log(orderItem);
  return (
    <div className="flex gap-10">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          orderItem.product.data.attributes.images.data[0].attributes.url
        }
        alt="image"
        width={80}
        height={80}
      />
      <div className="">
        <h2 className="">{orderItem.product.data.attributes.name}</h2>
        <h2 className="">
          Item Price: {orderItem.product.data.attributes.mrp}
        </h2>
      </div>
      <h2 className="">Quantity: {orderItem.quantity}</h2>
      <h2 className="">Price: {orderItem.amount}</h2>
    </div>
  );
};

export default MyOrderItem;
