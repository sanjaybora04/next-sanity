'use client'

import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import Link from './custom-link';
import Routes from '@/lib/routes';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    useEffect(()=>{
        setOpen(false)
    },[pathname])
    return (
        <Sheet open={open} onOpenChange={setOpen}>

            {/* This button will trigger open the mobile sheet menu */}
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label='Mobile menu button'>
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className='mt-20'>
                <div className="flex flex-col items-start gap-3 mt-5">
                    <Button variant="ghost" className='w-full justify-start'>
                        <Link href={Routes.about}>About me</Link>
                    </Button>
                    <Button variant="ghost" className='w-full justify-start'>
                        <Link href={Routes.blog}>Blog</Link>
                    </Button>
                    <Button variant="ghost" className='w-full justify-start'>
                        <Link href={Routes.projects}>Projects</Link>
                    </Button>
                    <Button variant="ghost" className='w-full justify-start'>
                        <Link href={Routes.contact}>Contact</Link>
                    </Button>
                    <Button variant="ghost" className='w-full justify-start' asChild><a target='_blank' href={Routes.resume}
                    className='bg-indigo-700 text-white'
                    >Resume
                    </a></Button>
                </div>
            </SheetContent>

        </Sheet >
    );
}