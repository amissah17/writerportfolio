import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Footer from './_components/Footer'
import Nav from './_components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Otabil | Portfolio',
  description: "Otabil's technical writer portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
