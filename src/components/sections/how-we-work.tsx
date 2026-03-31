"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/ui/motion";
import { howWeWork } from "@/content";

const HowWeWork = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <FadeInUp>
          <h2 className="max-w-lg font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {howWeWork.title}
          </h2>
        </FadeInUp>

        <div className="mx-auto mt-6 grid w-full gap-12 md:mt-10 md:grid-cols-2">
          {/* LEFT SIDE */}
          <FadeInLeft>
            {/* ✅ Mobile Image (top) */}
            <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl md:hidden">
              <Image
                src={howWeWork.image.src}
                alt={howWeWork.image.alt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* ✅ Accordion */}
            <Accordion className="w-full" defaultValue={[0]}>
              {howWeWork.steps.map(
                ({ title, description, icon: Icon }, index) => (
                  <AccordionItem
                    key={index}
                    value={index}
                    className="group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2"
                  >
                    <AccordionTrigger className="text-lg group-first/accordion-item:pt-0 [&>svg]:hidden">
                      <div className="flex items-center gap-4">
                        <Icon className="h-5 w-5" />
                        {title}
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-[17px] text-muted-foreground leading-relaxed">
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                ),
              )}
            </Accordion>
          </FadeInLeft>

          {/* RIGHT SIDE (Desktop Image) */}
          <FadeInRight className="relative hidden md:block min-h-120 md:-mt-32">
            <Image
              src={howWeWork.image.src}
              alt={howWeWork.image.alt}
              fill
              className="rounded-xl object-cover"
            />
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
