import { GlobalStyles as BaseStyles } from "twin.macro";
import { Jost } from "next/font/google";

export const jost = Jost({
  display: "swap",
  subsets: ["latin"],
  variable: "--sans",
});

const GlobalStyles = () => {
  return <BaseStyles />;
};

export default GlobalStyles;
