import Link from "next/link";
import LogoImg from "@/public/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";

export default function ComNav() {
  return (
    <>
      <nav className="text-xl font-bold font-mono hidden sm:flex justify-start items-center gap-5">
        <Link href={"/"}>
          <Image src={LogoImg} className="h-16 w-16" alt="Logo" priority />
        </Link>
        <NavLink href="/meals">Browse Meals</NavLink>
        <NavLink href="/community">Foodies Community</NavLink>
      </nav>
    </>
  );
}
