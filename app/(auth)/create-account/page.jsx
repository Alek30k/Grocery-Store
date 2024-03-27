import Image from "next/image";
import { Input } from "@/components/ui/input";

const CreateAccount = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-2xl">Create an Account</h2>
        <h2 className="text-gray-500">
          Enter your Email an Password to Create an Account
        </h2>
        <div className="">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
