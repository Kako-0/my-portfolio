import { IBM_Plex_Serif, Inter } from "next/font/google";
import { Rozha_One } from "next/font/google";

export const rozha = Rozha_One({ subsets: ["latin"], weight: "400", variable: '--font-rozha', });
export const inter = Inter({ subsets: ["latin"] });
export const ibmSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400" ,  "300" , "500" , "600" , "700"], style:["normal", "italic"]});