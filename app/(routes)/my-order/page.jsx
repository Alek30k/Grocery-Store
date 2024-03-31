"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyOrder = () => {
  const jwt = sessionStorage.get("jwt");
  const router = useRouter();

  useEffect(() => {
    if (!jwt) {
      router.replace("/");
    }
  }, []);

  return <div className="">MyOrder</div>;
};

export default MyOrder;
