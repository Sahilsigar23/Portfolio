"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
 
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: 'About',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Skills',
      icon: (
        <LightbulbIcon className='h-full w-full ' />
      ),
      href: '/skills',
    },
    {
      title: 'Education',
      icon: (
        <GraduationCap className='h-full w-full ' />
      ),
      href: '/education',
    },
    {
      title: 'Projects',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },
   
    {
      title: 'Contact us',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
    {
      title: 'More',
      icon: (
        <MoreHorizontal className='h-full w-full ' />
      ),
      href: '/more',
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()

  const [dockCfg, setDockCfg] = useState({ magnification: 80, distance: 150, panelHeight: 64 });
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Reduce/disable magnification on touch devices to avoid enlarge on tap
    const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) {
      setDockCfg({ magnification: 52, distance: 80, panelHeight: 56 });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className={`fixed right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[9999] top-5`}>
    <Dock className='items-end pb-3 rounded-full' magnification={dockCfg.magnification} distance={dockCfg.distance} panelHeight={dockCfg.panelHeight}>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx}>

        <DockItem
          className={cn("aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",pathname === item.href && " bg-gray-100 !border !border-primary-sky")}
          >
          <DockLabel >{item.title}</DockLabel>
          <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>{item.icon}</DockIcon>
        </DockItem>
          </Link>
      ))}
    </Dock>
    </div>
  );
};

export default Navbar;
