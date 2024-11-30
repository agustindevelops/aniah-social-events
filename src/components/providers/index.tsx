"use client";

import { FC, ReactNode } from "react";
import Fonts from "@/components/providers/fonts/Fonts";

interface ProviderProps {
  children: ReactNode;
}
const Providers: FC<ProviderProps> = ({ children }) => {
  return <Fonts>{children}</Fonts>;
};

export default Providers;
