'use client'
import React, { ReactNode } from 'react'
import { Divider, Image } from '@nextui-org/react'
import logoWhite from './assets/images/scrolliumlogo.svg'
import discord from "./assets/images/icon-Discord.svg";
import medium from "./assets/images/icon-medium.svg";
import telegram from "./assets/images/icon-Telegram.svg";
import twitter from "./assets/images/icon-twitter.svg";
function Footer() {
  
      
  return (
    
<footer>
      
<div className='pb-10'>
    <Divider className='my-20'  />
    <div className="flex flex-row justify-center gap-72">
        <div className="logos flex flex-col gap-8">
            <div className="flex flex-row gap-4">
                <a target="_blank" href="https://discord.gg/ExZQDAZsz" rel="noopener noreferrer">
                    <Image src={discord.src} alt="Discord Logo" className="w-24 h-24" />
                </a>
                <a target="_blank" href="https://twitter.com/Scroll_ium" rel="noopener noreferrer">
                    <Image src={twitter.src} alt="Twitter Logo" className="w-24 h-24" />
                </a>
                <a target="_blank" href="" rel="noopener noreferrer">
                    <Image src={telegram.src} alt="Telegram Logo" className="w-24 h-24" />
                </a>
                <a target="_blank" href="" rel="noopener noreferrer">
                    <Image src={medium.src} alt="Medium Logo" className="w-24 h-24" />
                </a>
            </div>
        </div>  
    </div>

        
          <Divider className='my-20'  />


        <div className="Bottom flex flex-row justify-between mx-50">
            
          
          
        </div>
        </div>
    </footer>

   
  )
}

export default Footer