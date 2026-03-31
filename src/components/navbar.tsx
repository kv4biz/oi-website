import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navbar } from "@/content";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 z-50 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={navbar.ctaButton.href}>
            <Button className="hidden rounded-full md:block">
              {navbar.ctaButton.text}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
