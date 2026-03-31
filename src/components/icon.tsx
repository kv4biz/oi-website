import Link from "next/link";
import Image from "next/image";

export const Icon = () => (
  <Link href="/" className="inline-block">
    <Image
      src="/icon.svg"
      alt="Ocean Intuition"
      width={40}
      height={37}
      className=" h-auto"
      priority
    />
  </Link>
);
