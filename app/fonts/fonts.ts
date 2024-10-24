import localFont from "next/font/local";
import { Inter, IBM_Plex_Sans, Roboto } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const ibmPlexSerif = IBM_Plex_Sans({
    subsets: ['latin'],
    variable: '--font-ibm-plex-serif',
    weight: ['400', '700'],
})

export const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['400', '700'],
})

export const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
