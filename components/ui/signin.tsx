"use client";
import Link from "next/link";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { Separator } from "./separator";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <Card className="w-lg">
      <CardHeader>
        <CardTitle className="text-xl font-sans">
          Login to your account
        </CardTitle>
        <CardDescription>Enter your credentials to login</CardDescription>
      </CardHeader>
      <CardContent>
        <>
          <Label className="my-2" htmlFor="Email">
            Email
          </Label>
          <Input type="email" placeholder="Email" />
        </>
        <>
          <Label className="my-2" htmlFor="Password">
            Password
          </Label>
          <Input type="password" placeholder="Password" />
        </>
        <Button
          onClick={async () => {
            await signIn("credentials", {
              email,
              password,
              redirect: false,
            });
            router.push("/generate");
          }}
          className="w-full mt-3"
        >
          Login
        </Button>
        <div className="flex justify-center text-sm my-3">
          <span>
            Don't have an account?{" "}
            <Link className="underline" href={"/signup"}>
              Signup
            </Link>
          </span>
        </div>
        <Separator/>
        <Button
          onClick={async () => {
            await signIn("google", { callbackUrl: "/generate" });
          }}
          className="w-full my-2 bg-white text-black"
        >
            <FcGoogle size={18}/>
          <div>Google</div>
        </Button>
      </CardContent>
    </Card>
  );
};
