//src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="container mx-auto py-10">
      <div className="grid min-h-160 grid-cols-1 lg:grid-cols-2">
        {/* left content */}
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
          <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
          <h3 className="mb-1.5 text-3xl font-semibold">
            Something went wrong
          </h3>
          <p className="text-muted-foreground mb-6 max-w-sm">
            The page you&apos;re looking for isn&apos;t found, we suggest you
            back to home.
          </p>
          <Button size="lg" className="rounded-lg text-base">
            <Link href="/">Back to home page</Link>
          </Button>
        </div>

        {/* right illustration */}
        <div className="relative h-full w-full p-2 max-lg:hidden">
          <div className="h-full w-full bg-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png"
              alt="404 illustration"
              width={406}
              height={406}
              className="h-[clamp(260px,25vw,406px)] w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
