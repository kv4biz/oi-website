"use client";

import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { testimonials as testimonialsContent } from "@/content";

const Testimonials = () => (
  <section className="py-24 px-6 bg-muted/30">
    <div className="mx-auto max-w-6xl">
      <FadeInUp className="text-center">
        <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
          {testimonialsContent.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {testimonialsContent.description}
        </p>
      </FadeInUp>

      <StaggerContainer className="mt-12 grid grid-cols-1 overflow-hidden border-background border-r md:grid-cols-2 lg:grid-cols-3">
        {testimonialsContent.items.map((testimonial) => (
          <StaggerItem
            className="flex flex-col px-6 py-8 outline-1 outline-border outline-solid"
            key={testimonial.id}
          >
            <div className="flex items-center justify-center gap-2">
              <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
              <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
              <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
              <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
              <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
            </div>
            <p className="my-6 max-w-md text-center text-[17px] leading-relaxed">
              &quot;{testimonial.testimonial}&quot;
            </p>
            <div className="mt-auto flex items-center justify-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                  {testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.designation}, {testimonial.company}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Testimonials;
