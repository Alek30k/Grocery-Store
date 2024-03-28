"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreateAccount = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onCreateAccount = () => {
    GlobalApi.registerUser(username, email, password).then(
      (resp) => {
        sessionStorage.setItem("user", JSON.stringify(resp.data.user));
        sessionStorage.setItem("jwt", resp.data.jwt);
        toast("Account Created Successfully");

        router.push("/");
      },
      (e) => {
        toast("Error while creating account");
      }
    );
  };

  return (
    <div className="flex items-baseline justify-center my-10">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-2xl">Create an Account</h2>
        <h2 className="text-gray-500">
          Enter your Email an Password to Create an Account
        </h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => onCreateAccount()}
            disabled={!(username || email || password)}
          >
            Create an Account
          </Button>
          <p>
            Already have an account{" "}
            <Link href={"/sign-in"} className="text-blue-500 ml-2">
              Click here to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
