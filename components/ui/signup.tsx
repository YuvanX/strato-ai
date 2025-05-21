"use client";
import { useState } from "react";
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

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter()

  async function handleRequest() {
    try {
      const response = await axios.post('/api/auth/register', {
          email,
          password,
          name,
          redirect: false
      })
      if(response.data.success) router.push("/signin")
    } catch(error) {
      console.log(error);
    }    
  }


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
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </>
        <>
          <Label className="my-2" htmlFor="Password">
            Password
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </>
        <>
          <Label className="my-2" htmlFor="Username">
            Username
          </Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </>
        <Button className="w-full my-4" onClick={handleRequest}>
          Signup
        </Button>

        <div className="flex justify-center">
          <span className="text-foreground text-sm">
            Already have an account? <Link className="underline" href={"/signin"}>Login</Link>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
