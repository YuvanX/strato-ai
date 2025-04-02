"use client";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import * as m from "motion/react-client";
import { useState } from "react";
import { Card } from "./card";
import { Input } from "./input";
import { Button } from "./button";
import { signIn } from "next-auth/react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    
    <div className="flex justify-center items-center h-screen">
      <Card classname="!w-[480px] !bg-[#1E293B]/10 backdrop-blur-lg border border-white/10 p-6 rounded-lg shadow-lg">
        <div className="text-white text-2xl font-semibold">
          {isLogin ? "Welcome back" : "Create an account"}
        </div>
        <div className="text-white text-sm font-medium">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill out the form to create your account"}
        </div>
        <div className="flex bg-[#1E293B] p-1.5 rounded !text-sm my-6">
          <Button
            classname={`${
              isLogin ? "!bg-black" : "!bg-transparent"
            } text-white !py-1.5`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </Button>
          <Button
            classname={`text-white !${
              !isLogin ? "bg-black" : "bg-transparent"
            } !py-1`}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </Button>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={isLogin ? "Login" : "signup"}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {isLogin && (
            <>
              <Input
                label="Email"
                placeholder="name@example.com"
                type="text"
                onChange={setEmail}
                id="email"
              />

              <Input
                label="Password"
                placeholder="hi@2020"
                type="password"
                onChange={setPassword}
                id="password"
              />
              <Button
                classname="mt-3 flex justify-center gap-2 items-center font-medium hover:bg-white"
                onClick={async () => await signIn("credentials", {
                  email: email,
                  password: password
                })}
              >
                <div>Login with Email</div>
                <MdOutlineEmail size={18} />
              </Button>
            </>
          )}
          {!isLogin && (
                <>
                   <Input
                    label="Full Name"
                    placeholder="Yuvan"
                    type="text"
                    onChange={setName}
                    id="name"
                  /> 
                  <Input
                    label="Email"
                    placeholder="name@example.com"
                    type="text"
                    onChange={setEmail}
                    id="email"
                  />

                  <Input
                    label="Password"
                    placeholder="hi@2020"
                    type="password"
                    onChange={setPassword}
                    id="password"
                  />
                  <Button
                    classname="mt-3 flex justify-center gap-2 items-center font-medium hover:bg-white"
                    onClick={async () => await signIn("credentials", {
                      email,
                      password,
                      name,
                      isSignUp: true,
                      redirect: false
                    })}
                  >
                    <div>Create an account</div>
                    <LuArrowRight size={18}/>
                  </Button>
                </>
              )}
          <div className="flex items-center gap-1 my-5">
            <div className="border-t border-[#1E293B] flex-grow "></div>
            <span className="text-gray-700 text-[13px] ">OR CONTINUE WITH</span>
            <div className="border-t border-[#1E293B] flex-grow"></div>
          </div>

          <Button
            classname="flex gap-2 justify-center items-center text-white !bg-[#121212]  border border-[#1E293B] "
            onClick={async () => {
              await signIn("google")
            }}
          >
            <FcGoogle size={18} />
            <div>Google</div>
          </Button>

          <div className="text-center mt-6 mb-1">
            <div className="text-[#8FA1BB] text-sm">
              {isLogin ? "Dont have an account?" : "Already have an account?"}{" "}
              <span onClick={() => isLogin ? setIsLogin(false) : setIsLogin(true)} className="text-white cursor-pointer font-semibold">{isLogin ? "Sign up" : "Login"}</span>
            </div>
          </div>
        </m.div>
      </Card>
    </div>
  );
}
