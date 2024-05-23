"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback } from "react";
import RegisterModal from "../modals/registerModal";

export default function Auth() {
  const registerModal = useRegisterModal();

  const onOpenRegisterModal = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal]);
  return (
    <>
      <RegisterModal />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={450}
          height={450}
          className="justify-self-center hidden md:block"
        />
        <div className="flex flex-col md:justify-between justify-center gap-6 h-full  md:h-[70vh]">
          <div className="block md:hidden">
            <Image src={"/images/x.svg"} alt="X" width={150} height={150} />
          </div>
          <h1 className="md:text-6xl text-5xl font-bold">Happening now</h1>
          <div className="md:w-[60%] w-full">
            <h2 className="md:text-3xl text-2xl font-bold mb-4">Join Today.</h2>
            <div className="flex flex-col space-y-2">
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle /> Sign up with Google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub /> Sign up with GitHub
                  </div>
                }
                fullWidth
                secondary
              />
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2"></div>
                <p className="mx-4 text-center">or</p>
                <div className="h-px bg-gray-700 w-1/2"></div>
              </div>
              <Button
                label="Create Account"
                fullWidth
                onClick={onOpenRegisterModal}
              />
            </div>
            <div className="text-[10px] text-gray-400">
              By signing up, you agree to the{" "}
              <span className="text-sky-500">Terms of Service</span> and
              <span className="text-sky-500"> Privacy Policy</span>, including
              <span className="text-sky-500"> Cookie Use</span>.
            </div>
          </div>
          <div className="md:w-[60%] w-full">
            <h3 className=" font-medium md:text-xl text-sm  mb-4">
              Already have an account?
            </h3>
            <Button label={"Sign in"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}
