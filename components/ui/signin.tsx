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
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { AlertCircle } from "lucide-react";
import { emailType } from "@/types/emailType";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {

    const isValidEmail: boolean = checkEmail(email)
    if(!isValidEmail) return

    const isValidPassword: boolean = checkPassword(password);
    if(!isValidPassword) return

    const respone = await signIn('credentials' ,{
      email,
      password,
      redirect: false
    })

    if(respone?.error) {
      showError('Invalid Inputs')
    } else router.push('/generate')
  };

  const checkPassword = (password: string): boolean => {
    if (password.length === 0) {
      showError("Please enter a Password")
      return false;

    } else if (password.length > 9) {
      showError("Password should be between 6-9 character of Length")
      return false;
    
    } else if(password.length < 6) {
      showError("Password should be min 6 character")
      return false
    }

    return true;
  }

  const checkEmail = (email: string): boolean => {

    const { success } = emailType.safeParse(email) 

    if(!success) {
      showError("Please enter a valid email")
      return false
    }

    return true
  }

  const showError = (message: string) => {
    setError(message)
    setTimeout(() => setError(null), 3000)
  }
  return (
    <Card className="w-lg font-sans">
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
        {error && (
            <Alert variant="destructive" className="my-2">
              <AlertCircle />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        <Button onClick={handleLogin} className="w-full mt-3">
          Login
        </Button>

        <div className="relative">
          <Separator className="my-6" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-500">
            Or continue with
          </span>
        </div>
        <Button
          onClick={async () => {
            await signIn("google", { callbackUrl: "/generate" });
          }}
          className="w-full my-2 bg-white text-black cursor-pointer border hover:bg-transparent"
        >
          <FcGoogle size={18} />
          <div>Continue with Google</div>
        </Button>
        <div className="flex justify-center text-sm my-3">
          <span>
            Don't have an account?{" "}
            <Link className="underline text-[#F44900]" href={"/signup"}>
              Signup
            </Link>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
