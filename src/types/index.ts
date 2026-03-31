export interface Demo {
  id: string;
  title: string;
  description: string;
  images: string[];
  demo_url: string;
  tags: string[];
  created_at: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  demo_id: string;
  message: string | null;
  created_at: string;
  demo?: Demo;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
