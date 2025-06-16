"use client";

import dynamic from "next/dynamic";

export const MathFieldDynamic = dynamic(
  () => import("./MathField").then((mod) => mod.MathField),
  {
    ssr: false,
  }
);
