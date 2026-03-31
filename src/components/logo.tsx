import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className="inline-block">
    <Image
      src="/icon.svg"
      alt="Ocean Intuition"
      width={40}
      height={37}
      className="block lg:hidden h-auto"
      priority
    />
    <Image
      src="/logo.svg"
      alt="Ocean Intuition"
      width={150}
      height={42}
      className="hidden lg:block h-auto"
      priority
    />
  </Link>
);
