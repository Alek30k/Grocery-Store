"use client";

import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartItemList = ({ cartItemList }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItemList.forEach((element) => {
      total = total + element.amount;
    });
    setSubtotal(total);
  }, [cartItemList]);

  return (
    <div className="">
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
            <TrashIcon />
          </div>
        ))}
      </div>
      <div className="absolute w-[90%] bottom-6 flex flex-col">
        <h2 className="font-bold text-lg flex justify-between">
          Subtotal <span>${subtotal}</span>
        </h2>
        <Button>View Cart</Button>
      </div>
    </div>
  );
};

export default CartItemList;
