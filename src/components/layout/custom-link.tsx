'use client'

import NextLink, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { navigatingAtom } from '@/hooks/use-custom-router';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';

interface CustomLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

const Link = forwardRef<HTMLAnchorElement,CustomLinkProps>(
    (props, ref) => {
        const [navigating,setNavigating] = useAtom(navigatingAtom)
        const pathname = usePathname()
        const handleClick = ()=>{
            if(props.href.toString().split(/[?#]/)[0] !== pathname?.split(/[?#]/)[0]) setNavigating(true)
        }
        return (
            <NextLink {...props} ref={ref} className={props.className} onClick={handleClick}>
                {props.children}
            </NextLink>
    )
    });

Link.displayName = 'Link';
export default Link