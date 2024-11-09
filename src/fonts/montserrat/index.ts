import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "./Montserrat-Regular.ttf",
      weight: "400",
    },
  ],
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});

export { montserrat };
