import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-5 shadow-md">
      <div className="flex items-center gap-8">
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />

        <h2 className="flex gap-2 items-center border rounded-full py-2 px-10 bg-slate-200">
          <LayoutGrid className="w-5 h-5" /> Category
        </h2>
        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="">
        <h2 className="flex items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
