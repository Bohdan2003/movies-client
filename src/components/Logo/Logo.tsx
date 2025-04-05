import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/utils/router";

export const Logo: React.FC = () => {
  return (<Link href={ROUTES.HOME}>
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={199}
      height={60}
    />
  </Link>)
}