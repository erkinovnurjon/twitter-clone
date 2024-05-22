import Image from "next/image";
import Button from "../ui/button";

export default function Auth() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={450}
          height={450}
          className="justify-self-end"
        />
        <div className="flex flex-col justify-between h-[70vh]">
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-[60%]">
            <h2 className="text-3xl">Join Today</h2>
            <div className="flex flex-col space-y-2">
              <Button label="" />
              <button>Sign up with GitHub</button>
              <p>or</p>
              <button>Create Account</button>
            </div>
          </div>
          <div className="w-[60%]">
            <h3 className=" font-medium text-xl mb-4">
              Already have an accaount?
            </h3>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
