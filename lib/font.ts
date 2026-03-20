import {
  Varela_Round,
  Google_Sans,
  Merriweather_Sans,
  Mulish,
  Satisfy,
} from "next/font/google";

export const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

export const google_sans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const msans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});
