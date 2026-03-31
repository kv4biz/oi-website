import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { navigation, navbar } from "@/content";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger
        render={
          <Button className="rounded-full" size="icon" variant="outline" />
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent className="px-6 py-6 flex flex-col h-full">
        <Logo />
        <nav className="mt-8 flex flex-col w-full">
          {navigation.main.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="w-full py-3 px-4 text-base font-medium hover:bg-muted rounded-lg transition-colors"
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-6">
          <Link href={navbar.ctaButton.href}>
            <Button className="w-full rounded-full" size="lg">
              {navbar.ctaButton.text}
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
