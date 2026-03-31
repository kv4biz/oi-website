"use client";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const Contact = () => (
  <section className="relative py-24 px-6 overflow-hidden">
    <GridPattern
      width={80}
      height={80}
      x={-1}
      y={-1}
      className={cn(
        "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
        "absolute inset-0 h-full w-full fill-neutral-400/20 stroke-neutral-400/20",
      )}
    />
    <div className="relative mx-auto max-w-5xl text-center">
      <FadeInUp>
        <b className="font-semibold text-muted-foreground text-sm uppercase">
          Contact Us
        </b>
        <h2 className="mt-3 font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our friendly team is always here to chat.
        </p>
      </FadeInUp>

      <StaggerContainer className="grid gap-16 py-16 md:grid-cols-2 lg:grid-cols-3">
        <StaggerItem className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl dark:bg-primary/10">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="mt-4 font-medium text-primary hover:underline"
            href="mailto:hello@oceanintuition.com"
          >
            hello@oceanintuition.com
          </Link>
        </StaggerItem>

        <StaggerItem className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl dark:bg-primary/10">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Office</h3>
          <p className="mt-2 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <Link
            className="mt-4 font-medium text-primary hover:underline"
            href="https://maps.google.com"
            target="_blank"
          >
            123 Innovation Drive <br /> San Francisco, CA 94102
          </Link>
        </StaggerItem>

        <StaggerItem className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl dark:bg-primary/10">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
          <Link
            className="mt-4 font-medium text-primary hover:underline"
            href="tel:+15550001234"
          >
            +1 (555) 000-1234
          </Link>
        </StaggerItem>
      </StaggerContainer>
    </div>
  </section>
);

export default Contact;
