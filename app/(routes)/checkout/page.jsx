"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";
import { useEffect, useState } from "react";

const Checkout = () => {
  const user = JSON.parse(sessionStorage.getItem("user")).id;
  // const user = JSON.parse(sessionStorage.getItem("user")).id;
  const jwt = sessionStorage.getItem("jwt");
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    const cartItemsList_ = await GlobalApi.getCartItems(user, jwt);
    // console.log(cartItemsList_);
    setTotalCartItem(cartItemsList_?.length);
    setCartItemList(cartItemsList_);
  };

  useEffect(() => {
    let total = 0;
    cartItemList.forEach((element) => {
      total = total + element.amount;
    });
    setSubtotal(total);
  }, [cartItemList]);

  const calculateTotalAmount = async () => {
    totalAmount = 0;
  };

  return (
    <div className="">
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
        Checkout
      </h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8 gap-3 ">
        <div className="md:col-span-2 mx-20">
          <h2 className="font-bold text-3xl">Belling Details</h2>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input placeholder="name" />
            <Input placeholder="email" />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-3">
            <Input placeholder="Phone" />
            <Input placeholder="Zip" />
          </div>
          <div className="mt-3">
            <Input placeholder="Address" />
          </div>
        </div>
        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">
            Total Cart ({totalCartItem})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold flex justify-between">
              Subtotal : <span>${subtotal}</span>
            </h2>
            <hr></hr>
            <h2 className="flex justify-between">
              Delivery : <span>$15:00</span>
            </h2>
            <h2 className="flex justify-between">
              Tax (9%) : <span>$250:00</span>
            </h2>
            <hr></hr>
            <h2 className="font-bold flex justify-between">
              Total : <span>$350:00</span>
            </h2>
            <Button>
              Payment <ArrowBigRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
