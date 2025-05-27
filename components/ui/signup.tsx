"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { emailType } from "@/types/emailType";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { AlertCircle } from "lucide-react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSignup() {
    const isValidEmail = checkEmail(email)
    if(!isValidEmail) return

    const isValidPassword = checkPassword(password)
    if(!isValidPassword) return

    if(!name) {
      showError('Please enter your name')
      return
    }

    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        name,
        redirect: false,
      });
      if (response.data.success) router.push("/signin");
    } catch (error) {
      console.log(error);
      showError('Invalid Inputs')
    }
  }

  const checkPassword = (password: string) => {
    if (password.length === 0) {
      showError("Please enter a Password");
      return false;
    } else if (password.length > 9) {
      showError("Password should be between 6-9 character of Length");
      return false;
    } else if (password.length < 6) {
      showError("Password should be min 6 character");
      return false;
    }

    return true;
  };

  const checkEmail = (email: string) => {
    const { success } = emailType.safeParse(email);

    if (!success) {
      showError("Please enter a valid email");
      return false;
    }

    return true;
  };

  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(null), 3000);
  };

   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Card className="w-lg font-sans">
      <CardHeader>
        <CardTitle className="text-xl">Create an account</CardTitle>
        <CardDescription>
          Enter your details to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <>
          <Label className="my-2" htmlFor="Email">
            Email
          </Label>
          <Input onChange={handleEmail} type="email" placeholder="Email" required />
        </>
        <>
          <Label className="my-2" htmlFor="Password">
            Password
          </Label>
          <Input
            onChange={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </>
        <>
          <Label className="my-2" htmlFor="Username">
            Username
          </Label>
          <Input onChange={handleUserName} type="text" placeholder="Username" required/>
        </>
        {error && (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button className="w-full my-4" onClick={handleSignup}>
          Signup
        </Button>

        <div className="flex justify-center">
          <span className="text-foreground text-sm">
            Already have an account?{" "}
            <Link className="underline text-orange-500" href={"/signin"}>
              Login
            </Link>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
