'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navigatingAtom } from '@/hooks/use-custom-router';
import { useAtom } from 'jotai';
import AnimatedLogo from '@/lib/assets/animated-logo';

export function NavigationContainer() {
    const pathname = usePathname();
    const [navigating, setNavigating] = useAtom(navigatingAtom);

    useEffect(() => {
        setNavigating(false)
    }, [pathname])

    return (
        <>
            {navigating &&
                <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center z-[99999]'>
                    <AnimatedLogo className='w-28 h-28 absolute text-white' loop />
                </div>
            }
        </>
    )
}