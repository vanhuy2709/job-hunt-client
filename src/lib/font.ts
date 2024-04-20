import { Red_Hat_Display, Poppins, Epilogue } from "next/font/google";
import localFont from 'next/font/local';

export const redHatDisplay = Red_Hat_Display({
  weight: ["300", '400', "500", '600', "700"],
  subsets: ['latin'],
})

export const poppins = Poppins({
  weight: ["300", '400', "500", '600', "700"],
  subsets: ['latin'],
})

export const epilogue = Epilogue({
  weight: ["300", '400', "500", '600', "700"],
  subsets: ['latin'],
})

export const clashDisplay = localFont({
  src: '../app/font/clash-display/ClashDisplaySemibold.otf',
  display: 'swap'
})