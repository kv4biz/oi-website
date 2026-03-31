"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { hero } from "@/content";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 h-full w-full",
          "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
        <FadeInUp>
          <h1 className="text-balance font-medium text-4xl leading-[1.3] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline.prefix}{" "}
            <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-primary-foreground leading-[1.1] tracking-tight sm:rounded-lg sm:px-3.5">
              {hero.headline.highlight}
            </span>{" "}
            {hero.headline.suffix}
          </h1>
        </FadeInUp>
        <FadeInUp>
          <p className="mt-6 max-w-5xl text-balance text-center text-muted-foreground text-lg tracking-normal sm:text-xl sm:leading-relaxed md:text-2xl">
            {hero.subheadline}
          </p>
        </FadeInUp>
        <FadeInUp>
          <div className="mx-auto mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={hero.cta.primary.href}>
              <Button className="w-full sm:w-auto rounded-full" size="lg">
                {hero.cta.primary.text}{" "}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href={hero.cta.secondary.href}>
              <Button
                className="w-full sm:w-auto rounded-full"
                size="lg"
                variant="outline"
              >
                {hero.cta.secondary.text} <ArrowDown className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeInUp>

        {/* Companies Section */}
        <FadeInUp className="mt-24 flex flex-col items-center gap-4">
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
            {hero.trustedBy.label}
          </p>
          <StaggerContainer className="mx-auto mt-4 flex flex-wrap items-center justify-center max-w-5xl gap-6 md:gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300 sm:gap-12">
            {hero.trustedBy.companies?.map((company, index) => (
              <StaggerItem key={index}>
                <span className="text-gray-700 dark:text-gray-300 font-bold uppercase text-2xl sm:text-xl lg:text-3xl tracking-wider whitespace-nowrap">
                  {company}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Hero;
