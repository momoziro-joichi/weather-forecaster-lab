import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"気象予報士の研究室",description:"気象を無料で学ぶシミュレーターと解説"};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="ja"><body>{children}</body></html>}
