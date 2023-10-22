'use client'
import { NextUIProvider } from "@nextui-org/react";
import { ThirdwebProvider, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import {Elysium,ElysiumTestnet} from '@thirdweb-dev/chains'
import React, { createContext } from "react";
import logo from '../../assets/images/scrolliumlogo.png'
import LenisProvider from "./LanisProvider";
import { ReduxProvider } from "@/redux/provider";





const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const activeChain=ElysiumTestnet;
    const walletConfig= {
    chainId: activeChain.chainId as number,
    qrcode: true,
  };


  const dAppMeta = {
       /**
       * the name of your app
       */
       name: 'ScrollPad',
       /**
        * the url where your app is hosted
        */
       url: 'https://scroll-pad.vercel.app/',
       /**
        * optional - a description of your app
        */
       description:'Elysium NFT launchpad by Vulcan Forged' ,
       /**
        * optional - a url that points to a logo (or favicon) of your app
        */
       logoUrl: logo.src,
       /**
        * optional - whether to show the connect dialog in darkmode or not
        */
       isDarkMode:false,
  }
    

    return (
      
        <ThirdwebProvider
        activeChain={activeChain}
        supportedChains={[Elysium,ElysiumTestnet]}
        autoSwitch={true}
        autoConnect={true}
        dAppMeta={dAppMeta}
    > 
        <LenisProvider options={{
              lerp: 0.1,
              wheelMultiplier: 0.8,
              smoothWheel: true,
            }}>
        <NextUIProvider>
          <ReduxProvider>
            {children}
            </ReduxProvider>
        </NextUIProvider>
        </LenisProvider>
        </ThirdwebProvider>
    );
  };
  
  export default AppProvider;
  