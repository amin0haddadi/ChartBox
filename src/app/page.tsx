"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/coin");
  }, [router]);

  return null;
};

export default MainPage;
