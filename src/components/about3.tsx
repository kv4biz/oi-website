"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

interface About3Props {
  className?: string;
  title: string;
  description?: string;
  mainImage: {
    src: string;
    alt: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
  };
  breakout: {
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companies?: Array<{
    src: string;
    alt: string;
  }> | null;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

const About3 = ({
  className,
  title,
  description,
  mainImage,
  secondaryImage,
  breakout,
  companies,
  achievementsTitle,
  achievementsDescription,
  achievements,
  contentSections,
}: About3Props) => {
  return (
    <section className={cn("py-2", className)}>
      <div className="container mx-auto px-6">
        <FadeInUp className="mb-14 flex flex-col gap-5 lg:w-2/3">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </FadeInUp>
        <div className="grid gap-7 lg:grid-cols-3">
          <FadeInLeft className="lg:col-span-2">
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </div>
          </FadeInLeft>
          <FadeInRight className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Link href={breakout.buttonUrl || "#"}>
                <Button variant="outline" className="mr-auto">
                  {breakout.buttonText}
                </Button>
              </Link>
            </div>
            <div className="relative min-h-64 grow basis-0 overflow-hidden rounded-xl md:w-1/2 lg:min-h-0 lg:w-auto">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </FadeInRight>
        </div>
        {companies && (
          <div className="py-32">
            <Marquee>
              <MarqueeContent speed={40}>
                {companies.map((company, idx) => (
                  <MarqueeItem
                    key={company.src + idx}
                    className="mx-8 flex items-center"
                  >
                    <Image
                      src={company.src}
                      alt={company.alt}
                      width={140}
                      height={32}
                      className="h-7 w-auto dark:invert md:h-8"
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
            </Marquee>
          </div>
        )}
        <FadeInUp className="relative overflow-hidden rounded-xl bg-muted p-7 mt-4 lg:mt-6 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-medium md:text-4xl">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <StaggerContainer className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
            {achievements?.map((item, idx) => (
              <StaggerItem
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + idx}
              >
                <span className="font-mono text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
                <p className="text-sm md:text-base">{item.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>
        {contentSections && contentSections.length > 0 && (
          <StaggerContainer className="mx-auto grid max-w-5xl gap-16 py-28 md:grid-cols-2 md:gap-28">
            {contentSections.map((section, idx) => (
              <StaggerItem key={section.title + idx}>
                <h2 className="mb-5 text-4xl font-medium">{section.title}</h2>
                <p className="text-lg leading-7 whitespace-pre-line text-muted-foreground">
                  {section.content}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
};

export { About3 };
