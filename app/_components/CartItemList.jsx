import Image from "next/image";

const CartItemList = ({ cartItemList }) => {
  return (
    <div className="">
      <div className="">
        {cartItemList.map((cart, index) => (
          <div className="" key={index}>
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image}
              width={70}
              height={70}
              alt={cart.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
