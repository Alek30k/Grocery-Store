"use client";

import { TrashIcon } from "lucide-react";
import Image from "next/image";

const CartItemList = ({ cartItemList, onDeleteItem }) => {
  return (
    <div className="h-[600px] overflow-auto">
      <div className="">
        {cartItemList.map((cart, index) => (
          <div
            className="flex justify-between items-center p-2 mb-5"
            key={index}
          >
            <div className="flex gap-6 items-center">
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image}
                width={70}
                height={70}
                alt={cart.name}
                className="border p-2"
              />
              <div className="">
                <h2 className="font-bold">{cart.name}</h2>
                <h2 className="">Quantity {cart.quantity}</h2>
                <h2 className="text-lg  font-bold">$ {cart.amount}</h2>
              </div>
            </div>
            <TrashIcon
              onClick={() => onDeleteItem(cart.id)}
              className="cursor-pointer "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
