'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem,Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle,  Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User, Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import logoNew from "../app/assets/images/scrolliumlogo.png";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { ConnectWallet, WalletInstance, useAddress, useWallet} from '@thirdweb-dev/react';
import axios from 'axios';
import {connectWalletRedux,disconnect} from '@/redux/features/userSlice'
import demoImage from '@/app/assets/images/ProfileImg.png'
import {useDispatch} from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { baseUrl } from './constants/baseUrl';
// import { cookies } from 'next/headers';
import fs from 'fs';

function Header() {
  // ... your useState, useEffect, and other logic ...

  const menuItems = [
    "Profile",
    "Help & Feedback",
    "Log Out",
  ];
  const bigMenuItems= [
    {name:"Projects",hrf:'/'}
    ,
    {name:"Stake",hrf:'/staking'}
    ,
    {name:"Leaderboard",hrf:'/tiers'}
    ,
    {name:"Swap" ,hrf:'/staking'}
  ]

  return (
    <Navbar isBlurred={false} height={'8em'} maxWidth='xl' className={`z-50 mb-20 bg-transparent capitalize ${
      isScrolled ? 'backdrop-blur-md' : ''
    }`}>
      <NavbarContent className="flex justify-between items-center w-full">
        {/* Logo on the left */}
        <NavbarBrand>
          <Image
            src={logoNew}
            className="py-0 mx-0"
            width={100}
            height={50}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push('/');
            }}
            alt={'ElysiumLogo'} />
        </NavbarBrand>

        {/* Pages on the right */}
        <div className="flex gap-7 items-center">
          {bigMenuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link color={"foreground"} href={item.hrf} size="md">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <ConnectWallet switchToActiveChain={true}/> 
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href=""
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
