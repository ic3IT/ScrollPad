
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NextUIProvider} from "@nextui-org/react";
import AppProvider from './Components/AppProvider';
const inter = Inter({ subsets: ['latin'] })
import ElysiumBanner from "./assets/images/ElysiumBanner.png";
import Header from './header';
import Cursors from './Components/Cursor/Cursors';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
export const metadata: Metadata = {
  title: 'ScrollPad: The Leading IDO Launchpad on Scroll zkEVM',
  description: 'ScrollPad is a decentralized community launchpad enabling projects to secure funding and offer safety to early-stage investors. Stake Scroll tokens to gain priority access to promising initiatives.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='purple-dark'>
      <head>
      <link rel="icon" href="/icon.png" />
      </head>
      <body  className={`${inter.className} w-full scroll-smooth scrollbar-hide`} style={{ background: 'black' }}  >
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer
/>
      <div className="box">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
        <AppProvider>
        
        <div className='wrapper' >
        <Header/>
        


        {children}
        <Footer/>
        </div>
        </AppProvider>
        
        </body>
    </html>
  )
}
