import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Footer from './_components/Footer'
import Nav from './_components/Navbar'


export const metadata = {
  title: 'Otabil | Portfolio',
  description: "Otabil's technical writer portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
