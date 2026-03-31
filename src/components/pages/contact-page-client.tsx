//src/components/pages/contact-page-client.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { contactPage } from "@/content";

export function ContactPageClient() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          message: formData.message || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      toast.success(contactPage.form.successMessage);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : contactPage.form.errorMessage,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
        <b className="font-semibold text-muted-foreground text-sm uppercase">
          {contactPage.badge}
        </b>
        <h1 className="mt-3 font-semibold text-3xl tracking-tight md:text-4xl">
          {contactPage.title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {contactPage.description}
        </p>

        <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
          <div className="grid w-full max-w-3xl grid-cols-1 gap-1 rounded-xl border bg-muted p-1 *:rounded-lg *:border *:bg-background *:p-6 sm:grid-cols-2 lg:col-span-2 dark:*:border-foreground/20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">
                {contactPage.infoCards.email.title}
              </h3>
              <p className="my-2.5 text-muted-foreground">
                {contactPage.infoCards.email.description}
              </p>
              <Link
                className="font-medium text-primary"
                href={contactPage.infoCards.email.href}
              >
                {contactPage.infoCards.email.value}
              </Link>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-semibold text-xl">
                {contactPage.infoCards.chat.title}
              </h3>
              <p className="my-2.5 text-muted-foreground">
                {contactPage.infoCards.chat.description}
              </p>
              <Link
                className="font-medium text-primary"
                href={contactPage.infoCards.chat.href}
              >
                {contactPage.infoCards.chat.linkText}
              </Link>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">
                {contactPage.infoCards.office.title}
              </h3>
              <p className="my-2.5 text-muted-foreground">
                {contactPage.infoCards.office.description}
              </p>
              <span className="font-medium text-primary">
                {contactPage.infoCards.office.address}
              </span>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">
                {contactPage.infoCards.phone.title}
              </h3>
              <p className="my-2.5 text-muted-foreground">
                {contactPage.infoCards.phone.description}
              </p>
              <Link
                className="font-medium text-primary"
                href={contactPage.infoCards.phone.href}
              >
                {contactPage.infoCards.phone.value}
              </Link>
            </div>
          </div>

          <div className="w-full max-w-lg rounded-xl border bg-muted p-1">
            <Card className="relative isolate rounded-lg bg-background shadow-none lg:ms-auto dark:border-foreground/20">
              <CardHeader className="gap-1">
                <CardTitle className="font-semibold text-xl">
                  {contactPage.form.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {contactPage.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="firstName">
                        {contactPage.form.fields.firstName.label}
                      </Label>
                      <Input
                        className="mt-2 h-10 shadow-none"
                        id="firstName"
                        placeholder={
                          contactPage.form.fields.firstName.placeholder
                        }
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">
                        {contactPage.form.fields.lastName.label}
                      </Label>
                      <Input
                        className="mt-2 h-10 shadow-none"
                        id="lastName"
                        placeholder={
                          contactPage.form.fields.lastName.placeholder
                        }
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="email">
                        {contactPage.form.fields.email.label}
                      </Label>
                      <Input
                        className="mt-2 h-10 shadow-none"
                        id="email"
                        placeholder={contactPage.form.fields.email.placeholder}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="company">
                        {contactPage.form.fields.company.label}
                      </Label>
                      <Input
                        className="mt-2 h-10 shadow-none"
                        id="company"
                        placeholder={
                          contactPage.form.fields.company.placeholder
                        }
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="phone">
                        {contactPage.form.fields.phone.label}
                      </Label>
                      <Input
                        className="mt-2 h-10 shadow-none"
                        id="phone"
                        placeholder={contactPage.form.fields.phone.placeholder}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="message">
                        {contactPage.form.fields.message.label}
                      </Label>
                      <Textarea
                        className="mt-2 shadow-none"
                        id="message"
                        placeholder={
                          contactPage.form.fields.message.placeholder
                        }
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full"
                    size="lg"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : contactPage.form.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
