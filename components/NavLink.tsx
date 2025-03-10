"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkType {
  href: string;
  children: string;
}

export default function NavLink({ href, children }: NavLinkType) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href); // ✅ Check if current path starts with href

  return (
    <Link className={isActive ? "text-amber-300/90" : "text-white"} href={href}>
      {children}
    </Link>
  );
}
