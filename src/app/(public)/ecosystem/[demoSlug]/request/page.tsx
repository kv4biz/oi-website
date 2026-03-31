//src/app/(public)/ecosystem/[demoSlug]/request/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";

interface Demo {
  id: string;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
};

export default function RequestDemoPage() {
  const params = useParams();
  const router = useRouter();
  const demoSlug = params.demoSlug as string;
  const [demo, setDemo] = useState<Demo | null>(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDescription: "",
    discoverSource: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const res = await fetch(`/api/demos/slug/${demoSlug}`);
        if (!res.ok) throw new Error("Demo not found");
        const data = await res.json();
        setDemo(data);
      } catch (error) {
        console.error(error);
        toast.error("Demo not found");
        router.push("/ecosystem");
      } finally {
        setLoading(false);
      }
    };

    fetchDemo();
  }, [demoSlug, router]);

  if (loading) {
    return (
      <main className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-125 w-full rounded-lg" />
        </div>
      </main>
    );
  }

  if (!demo) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const requestData = {
        name: fullName,
        email: formData.email,
        company: formData.company || null,
        demo_id: demo.id,
        message: formData.projectDescription || null,
        discover_source: formData.discoverSource || null,
      };

      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit request");
      }

      toast.success("Request sent! We'll get back to you within 24 hours.");
      router.push("/ecosystem");
    } catch (error) {
      console.error("Request submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-24 px-6 max-w-6xl mx-auto">
      <StaggerContainer className="mt-4 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
        {/* Left Column - Demo Info */}
        <StaggerItem>
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Badge variant="outline">REQUEST DEMO</Badge>
            <h3 className="mt-2 max-w-md text-center text-3xl font-medium lg:mt-0 lg:max-w-xl lg:text-left lg:text-5xl">
              {demo.title}
            </h3>
            <p className="text-center text-muted-foreground lg:text-left">
              {demo.description}
            </p>
            <StaggerContainer className="flex flex-col w-full">
              {demo.features?.slice(0, 3).map((feature, index) => (
                <StaggerItem key={index}>
                  <li className="flex max-w-md items-start gap-2 py-1 px-4 lg:border-b last:lg:border-b-0">
                    <ArrowRight
                      className="hidden size-6 shrink-0 lg:block"
                      strokeWidth={1}
                    />
                    <p className="text-center font-medium lg:text-left">
                      {feature}
                    </p>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </StaggerItem>

        {/* Right Column - Form */}
        <StaggerItem>
          <Card className="w-full max-w-xl place-self-center bg-muted/70 px-4 pt-10 pb-4 lg:max-w-none lg:place-self-start">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex w-full items-center gap-4">
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Alex"
                    className="bg-background"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Smith"
                    className="bg-background"
                    required
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label>Work Email</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="alex.smith@company.com"
                  className="bg-background"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Company</Label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Company"
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label>What are you looking to build?</Label>
                <Textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  className="bg-background"
                  rows={3}
                />
              </FormGroup>
              <FormGroup>
                <Label>How did you discover us?</Label>
                <Select
                  value={formData.discoverSource}
                  onValueChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      discoverSource: val ?? "",
                    }))
                  }
                >
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormGroup>
              <Button
                type="submit"
                className="w-fit place-self-end"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Card>
        </StaggerItem>
      </StaggerContainer>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Demo Request</AlertDialogTitle>
            <AlertDialogDescription>
              You are requesting access to <strong>{demo.title}</strong>. We
              will send details to <strong>{formData.email}</strong>. Is this
              correct?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSubmit}>
              Confirm Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
