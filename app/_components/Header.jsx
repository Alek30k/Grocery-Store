import { LayoutGrid } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <div className="">
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />
        <div className="">
          <h2 className="flex gap-2 items-center border rounded-full py-2 px-10 bg-slate-200">
            <LayoutGrid className="w-5 h-5" /> Category
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
