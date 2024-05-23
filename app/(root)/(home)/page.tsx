import React from "react";
import Auth from "@/components/auth";

export default function Home() {
  const user = false;
  if (!user)
    return (
      <div className="h-screen mx-auto container max-w-7xl">
        <Auth />
      </div>
    );
}
