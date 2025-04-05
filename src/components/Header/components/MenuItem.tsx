'use client';
import { usePathname } from 'next/navigation';
import { cn } from "@/utils/cn";
import Link from "next/link";

export const MenuItem : React.FC<{
  text: string;
  href: string;
}> = ({text, href}) => {
  const currentPathname = usePathname();
  console.log(text, href, currentPathname)

  return (
    <li className={cn(
      currentPathname === href &&
      'relative ' +
      'after:absolute after:bg-black-10 after:rounded-[8px] ' +
      'after:-top-[14px] after:-bottom-[14px] after:-left-[14px] after:-right-[14px]',
    )}>
      <Link
        href={href}
        className={cn(
          'text-[18px] text-grey-75',
          currentPathname === href &&
          'relative z-10 font-medium text-white'
        )}
      >{text}</Link>
    </li>
  )
}