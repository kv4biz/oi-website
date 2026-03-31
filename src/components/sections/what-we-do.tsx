"use client";

import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { whatWeDo } from "@/content";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {whatWeDo.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {whatWeDo.description}
          </p>
        </FadeInUp>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {whatWeDo.features.map((feature) => (
            <StaggerItem
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatWeDo;
