# Ocean Intuition Website – Full Specification

## Overview

Ocean Intuition is an AI-driven software company that builds intelligent platforms, tools, and systems to help businesses perform better.

This website will serve as a simple, modern, and clear marketing website (MVP) with a lightweight admin system to manage demo content and receive demo requests.

The focus is:

- Simplicity
- Clarity
- Speed
- Conversion (demo requests)

---

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- UI Components: shadcn/ui, Magic UI, Aceternity UI (all shadcn-based)
- Backend: Minimal (Next.js API routes / server actions)
- Database: Supabase
- Authentication (Admin): Simple email/password or protected route (basic auth acceptable for MVP)
- File Storage: Supabase Storage
- Theme: Light mode and Dark mode support (user preference)
- Primary Accent Color: #0082FF (blue)

---

## Core Features

### 1. Marketing Website (Public)

#### Pages

##### 1. Home (/)

Purpose: Quickly explain what Ocean Intuition does and convert visitors.

Sections:

- Hero Section
  - Headline: Simple and bold
  - Subheadline: Explain value in one sentence
  - CTA: "Request Demo"

- What We Do
  - Short explanation of services
  - 3–5 cards (AI tools, platforms, automation, etc.)

- How It Works
  - 3-step process:
    1. Understand your business
    2. Build intelligent solution
    3. Deploy & optimize

- Our Work / Projects
  - Showcase selected demos/projects
  - Each card links to demo details or external demo link

- Demo CTA Section
  - "Get a personalized demo"
  - Button → opens request form

- Footer
  - Contact email
  - Socials (optional)

---

##### 2. About (/about)

Purpose: Build trust

Content:

- Who we are
- What we believe in
- Vision: AI helping businesses operate smarter

Tone: Simple, human, non-technical

---

##### 3. Demos (/demos)

Purpose: Show available demos users can request access to

Content:

- List of demos (cards)
- Each demo contains:
  - Title
  - Short description
  - Primary image (thumbnail)
  - Tags
  - "Request Demo" button (links to /request/[demoId])

Note: Users cannot view demos directly. They must request access first.

---

##### 4. Demo Request Page (/request/[demoId])

Purpose: Capture leads with context about the specific demo

Page Layout:

- Demo Info Section (top):
  - Demo title
  - Demo image
  - Short description
- Request Form (below):
  - Name
  - Email
  - Company (optional)
  - Message (optional)

On Submit:

- Save to database
- Show success message
- Send email notification to admin

Note: This is a dynamic route. The demo info is fetched based on the demoId parameter.

---

### 2. Admin Dashboard (/admin)

Purpose: Manage demos and view requests

#### Features

##### Authentication

- Simple login system
- Protected route

##### Dashboard Home

- Overview stats:
  - Total demo requests
  - Total demos

##### Manage Demos

- Create demo
- Edit demo
- Delete demo

Fields:

- Title
- Description
- Image upload
- Demo link (URL) — internal reference, not shown to users until access granted

##### View Requests

- Table of all demo requests

Columns:

- Name
- Email
- Company
- Requested Demo
- Date

Actions:

- View details
- Copy email

---

## Data Models

### Demo

- id
- title
- description
- images (array of URLs — supports multiple images)
- demoUrl (internal, shown only after access granted)
- tags (array of strings)
- createdAt

### Request

- id
- name
- email
- company
- demoId
- message
- createdAt

---

## UI/UX Guidelines

- Use shadcn/ui as base components
- Use Magic UI for enhanced animations and effects
- Use Aceternity UI for advanced animated components
- Support both Light mode and Dark mode (system preference or toggle)
- Primary accent color: #0082FF
- Clean spacing
- Mobile-first responsive design
- Fast loading

Components to use:

- Cards
- Buttons
- Inputs
- Dialogs (for forms)
- Tables (admin)
- Toasts (feedback)
- Animated backgrounds (Magic UI / Aceternity UI)
- Hover effects and transitions

---

## Detailed Section Breakdown

### Home Page (/)

#### 1. Navigation Bar

- **Position:** Fixed top, transparent on hero, solid dark on scroll
- **Left:** Ocean Intuition logo (text or icon)
- **Right:** Nav links (About, Demos) + "Request Demo" CTA button
- **Mobile:** Hamburger menu with slide-out drawer
- **Style:** Subtle blur backdrop, minimal border-bottom

#### 2. Hero Section

- **Layout:** Full viewport height, centered content
- **Background:** Animated gradient or particle effect (Aceternity UI / Magic UI)
- **Content:**
  - Headline: Large, bold, white text
  - Subheadline: Muted gray, 1-2 sentences
  - Two CTAs: Primary "Talk to Us" (blue), Secondary "See What We Do" (outline)
- **Animation:** Subtle fade-in on load, floating elements optional

#### 3. Companies Section

- **Layout:** Full-width section with centered content
- **Content:**
  - Heading: "Trusted by" or "Companies we work with"
  - Logo grid/row of company logos
- **Style:** Grayscale logos, hover to color (optional)
- **Animation:** Infinite scroll marquee (Magic UI) or static grid

#### 4. What We Do Section

- **Layout:** Section with heading + 3 cards in a row (stacked on mobile)
- **Cards:** Icon + title + short description
- **Topics:** Automation, AI Systems, Optimization
- **Style:** Dark cards with subtle border, hover glow effect
- **Animation:** Stagger fade-in on scroll

#### 5. How It Works Section

- **Layout:** 3-step horizontal timeline (vertical on mobile)
- **Steps:**
  1. Discover — "Understand the work"
  2. Design — "Keep it simple"
  3. Deliver — "Build and improve"
- **Style:** Numbered steps with connecting line, icons optional
- **Animation:** Step-by-step reveal on scroll

#### 6. Our Work / Projects Section

- **Layout:** Grid of demo cards (2-3 columns)
- **Cards:** Image thumbnail, title, short description, tags
- **CTA:** "Request Demo" button on each card
- **Style:** Hover lift effect, image zoom on hover
- **Link:** Each card links to /request/[demoId]

#### 7. Testimonials Section

- **Layout:** Carousel or grid of testimonial cards
- **Cards:**
  - Quote text
  - Author name
  - Author role/company
  - Avatar (optional)
- **Style:** Clean cards, subtle borders, quote marks styling
- **Animation:** Auto-scroll carousel or static grid

#### 8. Demo CTA Section

- **Layout:** Full-width banner with centered content
- **Background:** Gradient or subtle pattern
- **Content:**
  - Headline: "See how AI can improve your workflow"
  - Subtext: Brief value proposition
  - CTA button: "Request a Demo"
- **Style:** High contrast, attention-grabbing

#### 9. Footer

- **Layout:** Simple, minimal
- **Content:**
  - Logo or company name
  - Contact email
  - Social links (optional)
  - Copyright
- **Style:** Contrasting background (adapts to light/dark mode), muted text

---

### About Page (/about)

#### 1. Hero Section

- **Layout:** Centered heading + subtext
- **Content:** "About Ocean Intuition" + brief intro
- **Style:** Minimal, clean

#### 2. Who We Are

- **Layout:** Text block or split layout (text + visual)
- **Content:** Company story, mission
- **Style:** Readable paragraphs, good line height

#### 3. What We Believe

- **Layout:** 2-3 value cards or list
- **Content:** Core principles (practical, adaptable, results-focused)
- **Style:** Icons + short descriptions

#### 4. Vision Section

- **Layout:** Quote-style or highlighted text block
- **Content:** "AI helping businesses operate smarter"
- **Style:** Large text, subtle accent

---

### Demos Page (/demos)

#### 1. Page Header

- **Layout:** Centered heading + subtext
- **Content:** "Our Demos" + brief explanation
- **Style:** Minimal

#### 2. Demo Grid

- **Layout:** Responsive grid (1-3 columns based on screen)
- **Cards:**
  - Primary image (thumbnail from images array)
  - Title
  - Short description (truncated)
  - Tags (pill badges)
  - "Request Demo" button
- **Style:** Dark cards, hover effects, image aspect ratio consistent
- **Animation:** Stagger fade-in

---

### Request Page (/request/[demoId])

#### 1. Demo Info Section (Top)

- **Layout:** Left-right split or stacked
- **Content:**
  - Demo title (large)
  - Primary image or image carousel
  - Short description
  - Tags
- **Style:** Clean, informative

#### 2. Request Form Section

- **Layout:** Card or contained form below demo info
- **Fields:**
  - Name (required)
  - Email (required)
  - Company (optional)
  - Message (optional, textarea)
- **Submit Button:** "Submit Request" (blue accent)
- **Validation:** Inline error messages
- **Success State:** Toast notification + redirect or success message

---

### Admin Dashboard (/admin)

#### 1. Login Page (/admin/login)

- **Layout:** Centered card
- **Fields:** Email, Password
- **Button:** "Sign In"
- **Style:** Simple, dark theme consistent

#### 2. Dashboard Home (/admin)

- **Layout:** Sidebar + main content
- **Sidebar:** Navigation (Dashboard, Demos, Requests)
- **Main Content:**
  - Stats cards: Total Demos, Total Requests
  - Recent activity (optional)

#### 3. Manage Demos (/admin/demos)

- **Layout:** Table or card grid
- **Actions:** Create, Edit, Delete
- **Create/Edit Form (Dialog or Page):**
  - Title
  - Description
  - Images (multi-upload)
  - Demo URL
  - Tags (multi-input)
- **Style:** Clean table with action buttons

#### 4. View Requests (/admin/requests)

- **Layout:** Data table
- **Columns:** Name, Email, Company, Demo, Date
- **Actions:** View details (dialog), Copy email
- **Style:** Sortable, searchable table

---

## User Flow

1. User visits homepage
2. Understands what Ocean Intuition does
3. Views demos/projects
4. Clicks "Request Demo"
5. Submits form
6. Request saved in database
7. Admin sees request in dashboard

---

## Content Guidelines

Tone:

- Simple
- Clear
- Non-technical
- Business-focused

Avoid:

- Heavy AI jargon
- Complex explanations

Focus on:

- Value
- Results
- Use cases

---

## Example Copy (Refined Content Style)

### Hero

Building calm, practical AI solutions for every field

Simple ideas. Real-world outcomes.

Ocean Intuition builds intelligent systems and automation tools that work across industries—helping businesses operate smarter without complexity.

CTA: Talk to us
CTA: See what we do

Note: No unnecessary complexity. Just systems that work.

---

### Focus Areas

Automation
Streamline operations across any workflow or industry.

AI Systems
Build intelligent tools that support decision-making and execution.

Optimization
Improve existing processes without rebuilding everything from scratch.

---

### What We Do

We design and build automated and AI-powered solutions for all kinds of work—whether it’s operations, customer processes, internal tools, or full platforms.

Our goal is simple: take complex or repetitive work and turn it into clear, efficient systems.

---

### How It Works

Discover
Understand the work
We identify where automation or intelligence creates the most value.

Design
Keep it simple
We structure solutions that are easy to use and easy to maintain.

Deliver
Build and improve
We develop, test, and refine systems in small, fast iterations.

---

### Our Approach

AI should not feel complicated. We focus on building solutions that fit naturally into how people already work—just faster, smarter, and more reliable.

---

### Principles

Keep it practical
Every solution must solve a real problem.

Build for any field
Our systems adapt to different industries and workflows.

Focus on results
Working systems matter more than ideas.

---

### Demo CTA

See how AI can improve your workflow

Request a demo and explore solutions tailored to your business or industry.

---

## Development Notes

- Use server actions for form submissions
- Keep API minimal
- Use environment variables for sensitive data
- Optimize images
- Keep components reusable

---

## Future Improvements (Not MVP)

- Email automation (send demo links automatically)
- User accounts
- Analytics dashboard
- CMS integration

---

## Summary

This project is a simple, conversion-focused website with:

- A clean marketing frontend
- A lightweight admin system
- Demo management
- Lead capture system

The goal is speed, clarity, and usability — not complexity.
