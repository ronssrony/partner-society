# Nuxt 4 Landing Page - Complete Development Prompt

Create a modern, professional landing page for a microfinance organization using Nuxt 4, Vue 3, and Tailwind CSS 4. This should be a complete, production-ready application inspired by the Shakti Foundation website.

---

## 🚀 Technical Stack

- **Nuxt 4** with TypeScript
- **Tailwind CSS 4** for styling with centralized brand color configuration
- **Vue 3 Composition API**
- **Swiper (vue swiper)** for carousels
- **vue3-marquee** for scrolling text/logo marquee
- **@vueuse/motion** for scroll animations
- **Heroicons** for icons
- **Responsive design** (mobile-first approach)

---

## 📦 Installation Commands

```bash
npm install swiper
npm install vue3-marquee
npm install @vueuse/motion
npm install @heroicons/vue
```

---

## 🎨 Color Configuration (CRITICAL)

**Create a centralized color system where brand color can be changed in ONE place:**

### 1. Tailwind Config (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',   // Lightest orange
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Main brand color (Orange)
          600: '#ea580c',  // Darker orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',  // Darkest orange
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

### 2. Nuxt Config (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },
  
  app: {
    head: {
      title: 'Shakti Foundation - Empowering Communities',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Empowering low-income women through innovative digital financial services across Bangladesh' 
        },
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' 
        },
      ],
    },
  },
})
```

### 3. Main CSS (`assets/css/main.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply font-sans antialiased;
  }
}
```

### 4. Color Usage Rules

- **ALWAYS use `brand-{shade}` classes** (e.g., `bg-brand-500`, `text-brand-600`, `hover:bg-brand-700`)
- **NEVER hardcode hex color values** in components
- All brand color usage must reference the Tailwind brand theme colors
- **To change brand color**: Only modify the `tailwind.config.ts` colors object

---

## 📝 Demo Content & Assets

### Organization Details
- **Name**: "Shakti Foundation"
- **Tagline**: "High-trust, High-touch, High-tech"
- **Mission**: "Creating meaningful change through our six synergetic programs"

### Hero Section Content
```typescript
{
  tagline: "High-trust, High-touch, High-tech",
  subtitle: "Creating meaningful change through our six synergetic programs",
  description: "Empowering low-income women through innovative digital financial services across Bangladesh",
  ctaPrimary: "Get Started",
  ctaSecondary: "Learn More"
}
```

### Statistics Data
```typescript
const stats = [
  { value: 400000, label: "Women Empowered", suffix: "+" },
  { value: 55, label: "Districts Covered", suffix: "" },
  { value: 150, label: "Active Branches", suffix: "+" },
  { value: 95, label: "Satisfaction Rate", suffix: "%" }
]
```

### Recent Activities (4 items)
```typescript
const activities = [
  {
    id: 1,
    title: "Digital Literacy Program Launch",
    date: "October 2024",
    image: "https://picsum.photos/600/400?random=1",
    description: "Introducing comprehensive digital literacy training for 5,000 women entrepreneurs across Bangladesh."
  },
  {
    id: 2,
    title: "New Branch Opening in Sylhet",
    date: "September 2024",
    image: "https://picsum.photos/600/400?random=2",
    description: "Expanding our reach to serve more communities in the northeastern region with modern facilities."
  },
  {
    id: 3,
    title: "Partnership with Tech Giants",
    date: "August 2024",
    image: "https://picsum.photos/600/400?random=3",
    description: "Collaborating with leading technology companies to enhance our digital infrastructure and services."
  },
  {
    id: 4,
    title: "Annual Impact Report 2024",
    date: "July 2024",
    image: "https://picsum.photos/600/400?random=4",
    description: "Celebrating achievements and outlining our roadmap for continued growth and community impact."
  }
]
```

### Programs (6 items)
```typescript
const programs = [
  {
    id: 1,
    icon: "CurrencyDollarIcon", // Heroicon name
    title: "Microfinance Services",
    description: "Accessible loans and financial services tailored for small businesses and entrepreneurs looking to grow."
  },
  {
    id: 2,
    icon: "DevicePhoneMobileIcon",
    title: "Digital Banking",
    description: "Cashless transactions and mobile banking solutions for financial inclusion and convenience."
  },
  {
    id: 3,
    icon: "AcademicCapIcon",
    title: "Skill Development",
    description: "Training programs to enhance digital and business skills for sustainable growth and success."
  },
  {
    id: 4,
    icon: "HeartIcon",
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for members and their families."
  },
  {
    id: 5,
    icon: "BookOpenIcon",
    title: "Education Support",
    description: "Scholarships and educational resources for children of members to build a better future."
  },
  {
    id: 6,
    icon: "BriefcaseIcon",
    title: "Entrepreneurship",
    description: "Business mentorship and resources for aspiring entrepreneurs to launch successful ventures."
  }
]
```

### Digital Timeline (7 milestones)
```typescript
const timeline = [
  {
    year: "2023",
    title: "bKash Principal Agent",
    description: "Doorstep financial services to 400,000+ low-income women in 55 districts",
    icon: "DevicePhoneMobileIcon"
  },
  {
    year: "2022",
    title: "e-Loan Platform",
    description: "Digital loan service for small online businesses with instant approval",
    icon: "ComputerDesktopIcon"
  },
  {
    year: "2021",
    title: "Going Paperless",
    description: "Shakti Mobile app reducing paper documentation by 80%",
    icon: "DocumentTextIcon"
  },
  {
    year: "2020",
    title: "ERP Integration",
    description: "Enterprise software across all branches for seamless operations",
    icon: "ServerIcon"
  },
  {
    year: "2019",
    title: "Digital Recruitment",
    description: "Onboarding members through psychometric analysis and digital verification",
    icon: "UserGroupIcon"
  },
  {
    year: "2018",
    title: "SMS Notifications",
    description: "Real-time updates and notifications for all members",
    icon: "ChatBubbleLeftRightIcon"
  },
  {
    year: "2017",
    title: "Full Automation",
    description: "All branches connected digitally with centralized data management",
    icon: "CloudIcon"
  }
]
```

### Testimonials (3 items)
```typescript
const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/100?img=1",
    quote: "Shakti's e-Loan service helped me expand my tailoring business. The process was quick and hassle-free!",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=5",
    quote: "The digital literacy program transformed my understanding of online business. Now I run a successful e-commerce store.",
    rating: 5
  },
  {
    id: 3,
    name: "Nasrin Akter",
    role: "Member Since 2019",
    avatar: "https://i.pravatar.cc/100?img=9",
    quote: "Having access to doorstep banking services has made managing my finances so much easier.",
    rating: 5
  }
]
```

### Partner Logos (for marquee)
```typescript
const partners = [
  { name: "bKash", logo: "bKash" },
  { name: "Nagad", logo: "Nagad" },
  { name: "BRAC Bank", logo: "BRAC Bank" },
  { name: "Dutch-Bangla Bank", logo: "Dutch-Bangla Bank" },
  { name: "City Bank", logo: "City Bank" },
  { name: "Eastern Bank", logo: "Eastern Bank" },
  { name: "Rocket", logo: "Rocket" },
  { name: "Upay", logo: "Upay" }
]
```

### Image Placeholders
- **Hero**: `https://picsum.photos/1920/1080?random=hero`
- **Activity Cards**: `https://picsum.photos/600/400?random={id}`
- **Program Cards**: Use icons instead of images
- **Testimonial Avatars**: `https://i.pravatar.cc/100?img={id}`
- **Background Patterns**: Use Tailwind patterns or SVG backgrounds

---

## 🏗️ Page Structure & Components

### 1. Navbar Component (`components/Navbar.vue`)

**Features:**
- Transparent on page load, solid white with shadow on scroll
- Logo on left (text-brand-600)
- Navigation links in center (Desktop only)
- "Get Started" CTA button on right (bg-brand-500)
- Mobile: Hamburger menu (brand-500 icon)
- Active link: brand-500 underline/text
- Sticky with smooth transition
- Scroll progress bar at top (brand-500)

**Navigation Links:**
- Home
- About
- Programs
- Impact
- Contact

**Implementation:**
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
```

---

### 2. Hero Section (`components/HeroSection.vue`)

**Features:**
- Full-width hero with gradient background (brand-400 to brand-600)
- Main tagline (text-5xl md:text-6xl lg:text-7xl font-bold)
- Subtitle (text-xl md:text-2xl)
- Description paragraph
- Two CTA buttons (primary: brand-500, secondary: border-brand-500)
- Hero image/illustration on right (desktop) or bottom (mobile)
- Background geometric shapes (brand-100/50 opacity)
- Parallax effect using @vueuse/motion
- Animated text (fade-in, slide-up)

**Layout:**
- Desktop: 2 columns (60% text, 40% image)
- Mobile: Single column (text on top, image below)

---

### 3. Partner Marquee (`components/PartnerMarquee.vue`)

**Features:**
- Use `vue3-marquee` for infinite scrolling
- Partner logos/names in neutral gray
- Hover: color (brand-500 tint)
- Background: brand-50 or white
- Section title: "Trusted Partners" (centered, above marquee)
- Pause on hover
- Smooth continuous scroll (duration: 30s)

**Implementation:**
```vue
<script setup lang="ts">
import Vue3Marquee from 'vue3-marquee'

const partners = [
  { name: "bKash", logo: "bKash" },
  { name: "Nagad", logo: "Nagad" },
  // ... rest of partners
]
</script>

<template>
  <section class="py-12 bg-brand-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-bold text-brand-900 mb-8">
        Trusted Partners
      </h2>
      <Vue3Marquee :duration="30" :pause-on-hover="true" class="overflow-hidden">
        <div class="flex items-center gap-16">
          <div 
            v-for="partner in partners" 
            :key="partner.name"
            class="px-8 text-2xl font-bold text-gray-400 hover:text-brand-500 transition-colors duration-300"
          >
            {{ partner.name }}
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>
```

---

### 4. Recent Activities (`components/RecentActivities.vue`)

**Features:**
- Swiper carousel for activity cards
- Show 3 cards on desktop, 2 on tablet, 1 on mobile
- Auto-play with 5s interval
- Navigation arrows (brand-500)
- Pagination dots (brand-500)
- Each card: Image, date badge, title, description, "Read More" link
- Hover effects: scale(1.05), shadow-xl, brand-500 border

**Swiper Configuration:**
```vue
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { 
    delay: 5000, 
    disableOnInteraction: false 
  },
  pagination: { 
    clickable: true 
  },
  navigation: true,
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}
</script>
```

**Card Design:**
- Image: rounded-t-2xl, aspect-[3/2], object-cover
- Date badge: absolute top-4 right-4, bg-brand-100, text-brand-700, px-3 py-1, rounded-full
- Content padding: p-6
- Title: text-xl font-bold text-brand-900
- Description: text-gray-600, line-clamp-3
- "Read More" link: text-brand-600 hover:text-brand-700

---

### 5. Network Coverage (`components/NetworkCoverage.vue`)

**Features:**
- Statistics section with animated counters
- 4 stat cards in grid (2x2 on mobile, 4x1 on desktop)
- Each stat: Icon (brand-500), animated number (brand-600), label (gray-600)
- Background: brand-50
- Use `@vueuse/motion` for counter animation on scroll
- Optional: Map of Bangladesh with highlighted districts

**Counter Animation:**
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const count = ref(0)
const target = 400000

const counterRef = ref()

useMotion(counterRef, {
  initial: { opacity: 0, y: 50 },
  visibleOnce: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1000,
      onComplete: () => {
        animateCounter()
      }
    }
  },
})

const animateCounter = () => {
  const duration = 2000
  const increment = target / (duration / 16)
  
  const timer = setInterval(() => {
    count.value += increment
    if (count.value >= target) {
      count.value = target
      clearInterval(timer)
    }
  }, 16)
}
</script>
```

---

### 6. Digital Timeline (`components/DigitalTimeline.vue`)

**Features:**
- Vertical timeline on mobile, horizontal on desktop
- Timeline connector line (brand-200, 2px or 4px)
- Each milestone card:
    - Year badge (brand-500 bg, white text, rounded-full)
    - Icon circle (brand-100 bg, brand-500 icon, 80x80px)
    - Title (brand-900, font-bold, text-xl)
    - Description (gray-600)
    - Card background: white
    - Border: border-brand-100
    - Hover: lift effect, brand-500 shadow
- Animate on scroll: alternate slide-in-left and slide-in-right
- Use Heroicons for icons

**Layout:**
- Desktop: Horizontal timeline with cards above/below line (alternating)
- Mobile: Vertical timeline with cards on right of line

**Animation:**
```vue
<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

// For odd items
const motionLeft = {
  initial: { opacity: 0, x: -50 },
  visibleOnce: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 600, ease: 'easeOut' }
  }
}

// For even items
const motionRight = {
  initial: { opacity: 0, x: 50 },
  visibleOnce: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 600, ease: 'easeOut' }
  }
}
</script>
```

---

### 7. Programs Grid (`components/ProgramsGrid.vue`)

**Features:**
- 6 program cards in grid
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card:
    - Large Heroicon (64x64, brand-500)
    - Title (font-semibold, text-xl, brand-900)
    - Description (text-gray-600, 2-3 lines)
    - Background: white
    - Border: border-2 border-brand-100
    - Rounded: rounded-2xl
    - Padding: p-8
    - Hover: bg-brand-50, border-brand-500, transform scale-105, shadow-xl
- Gap: gap-8
- Section background: white

**Icons from Heroicons:**
- Microfinance: CurrencyDollarIcon
- Digital Banking: DevicePhoneMobileIcon
- Skill Development: AcademicCapIcon
- Health & Wellness: HeartIcon
- Education: BookOpenIcon
- Entrepreneurship: BriefcaseIcon

---

### 8. Testimonials Carousel (`components/TestimonialsCarousel.vue`)

**Features:**
- Swiper carousel showing 1 testimonial at a time (centered)
- Auto-play with 6s interval
- Fade transition effect
- Pagination dots (brand-500)
- Each testimonial card:
    - Avatar (rounded-full, 80x80, border-4 border-brand-100)
    - Quote icon (brand-200)
    - Quote text (text-lg md:text-xl, italic, text-gray-700)
    - 5-star rating (brand-500 stars)
    - Name (font-bold, text-brand-900)
    - Role (text-gray-600)
- Card: max-w-3xl, mx-auto, bg-white, rounded-3xl, shadow-xl, p-8 md:p-12
- Background: gradient from brand-50 to white

**Swiper Configuration:**
```vue
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const modules = [Pagination, Autoplay, EffectFade]

const swiperOptions = {
  slidesPerView: 1,
  effect: 'fade',
  autoplay: { 
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: { 
    clickable: true 
  },
  fadeEffect: {
    crossFade: true
  }
}
</script>
```

---

### 9. Impact Statistics (`components/ImpactStats.vue`)

**Features:**
- Large statistics with animated counters
- Background: brand-500 with pattern overlay or gradient
- Text: all white
- Grid of 4 key metrics (2x2 on mobile, 4x1 on desktop)
- Each stat:
    - Icon (white or brand-100, 48x48)
    - Animated number (text-5xl font-bold)
    - Label (text-xl)
- Counter animation triggers on scroll into view
- Section padding: py-20 md:py-32

**Pattern Overlay:**
- Use SVG pattern or Tailwind pattern
- Opacity: 10-20%
- Examples: dots, grid, waves

---

### 10. CTA Section (`components/CTASection.vue`)

**Features:**
- Bold headline: "Ready to Transform Lives?" (text-4xl md:text-5xl font-bold)
- Subheading: "Join us in empowering communities through digital innovation" (text-xl)
- Two CTA buttons:
    - "Become a Member" (bg-brand-500 hover:bg-brand-600 text-white)
    - "Partner With Us" (bg-white text-brand-600 hover:bg-brand-50)
- Button size: px-8 py-4, text-lg, rounded-lg
- Background: gradient from brand-400 via brand-500 to brand-700
- Text: white
- Centered content with max-w-4xl
- Section padding: py-20 md:py-32

---

### 11. Footer (`components/Footer.vue`)

**Features:**
- Multi-column layout (4 columns on desktop, 2 on tablet, 1 on mobile)
- Column 1: About
    - Logo/Brand name (text-2xl font-bold text-brand-400)
    - Tagline (text-gray-400)
    - Social media icons (brand-500 hover:brand-400)
- Column 2: Quick Links
    - Home, About, Programs, Impact, Contact
    - hover:text-brand-400
- Column 3: Programs
    - List of 6 programs (shortened names)
    - hover:text-brand-400
- Column 4: Contact
    - Address with MapPinIcon
    - Email with EnvelopeIcon
    - Phone with PhoneIcon
    - Icons: brand-500

**Newsletter Section:**
- Above footer columns
- Heading: "Stay Updated"
- Input field (bg-gray-800, border-gray-700, focus:ring-brand-500)
- Submit button (bg-brand-500 hover:bg-brand-600)

**Bottom Bar:**
- Copyright text (text-center, text-gray-500, border-t border-gray-800)
- "© 2024 Shakti Foundation. All rights reserved."

**Background:** gray-900
**Text:** gray-300
**Links:** gray-400 hover:brand-400

---

## 🎨 Design System

### Color Usage Guide

| Element | Color Class | Usage |
|---------|-------------|-------|
| Primary Buttons | `bg-brand-500 hover:bg-brand-600` | CTAs, Submit buttons |
| Secondary Buttons | `border-2 border-brand-500 text-brand-600 hover:bg-brand-50` | Alternative CTAs |
| Links | `text-brand-600 hover:text-brand-700` | Text links |
| Headings | `text-brand-900` | Section titles |
| Icons | `text-brand-500` | All icons |
| Icon Backgrounds | `bg-brand-100` | Icon containers |
| Light Backgrounds | `bg-brand-50` | Section backgrounds |
| Badges | `bg-brand-100 text-brand-700` | Labels, tags |
| Borders | `border-brand-200` or `border-brand-300` | Card borders |
| Shadows (colored) | `shadow-brand-500/10` | Card shadows |
| Gradients | `from-brand-400 to-brand-600` | Hero, CTA sections |

### Typography Scale

```css
/* Headings */
Hero Title: text-5xl md:text-6xl lg:text-7xl font-bold
Section Title: text-3xl md:text-4xl font-bold
Subsection: text-2xl md:text-3xl font-semibold
Card Title: text-xl font-bold

/* Body */
Large: text-lg md:text-xl
Base: text-base md:text-lg
Small: text-sm
XSmall: text-xs

/* Font Weights */
Light: font-light (300)
Regular: font-normal (400)
Medium: font-medium (500)
Semibold: font-semibold (600)
Bold: font-bold (700)
Extrabold: font-extrabold (800)
```

### Spacing System

```css
/* Section Spacing */
Section Padding: py-16 md:py-24 lg:py-32
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* Component Spacing */
Card Padding: p-6 md:p-8
Button Padding: px-6 py-3 (base), px-8 py-4 (large)
Gap in Grids: gap-6 md:gap-8

/* Margins */
Section Margin: mb-8 md:mb-12 lg:mb-16
Component Margin: mb-4 md:mb-6
```

### Border Radius

```css
Small: rounded-lg (8px)
Medium: rounded-xl (12px)
Large: rounded-2xl (16px)
Extra Large: rounded-3xl (24px)
Full: rounded-full (9999px)
```

### Shadows

```css
Small: shadow-sm
Base: shadow-md
Large: shadow-lg
Extra Large: shadow-xl
2XL: shadow-2xl

/* Colored Shadows */
Brand Shadow: shadow-lg shadow-brand-500/10
Brand Shadow Hover: shadow-xl shadow-brand-500/20
```

### Transitions

```css
All: transition-all duration-300 ease-in-out
Colors: transition-colors duration-300
Transform: transition-transform duration-300
Opacity: transition-opacity duration-300
```

### Hover Effects

```css
/* Buttons */
Scale: hover:scale-105
Shadow: hover:shadow-xl

/* Cards */
Lift: hover:-translate-y-2 hover:shadow-2xl
Border: hover:border-brand-500
Background: hover:bg-brand-50

/* Links */
Color: hover:text-brand-700
Underline: hover:underline
```

---

## 📱 Responsive Design

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape / Small tablet
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large desktop
}
```

### Layout Patterns

**Hero Section:**
- Mobile: Single column, image below text
- Tablet: Single column, larger text
- Desktop: 2 columns (60/40 split)

**Activity Carousel:**
- Mobile: 1 card visible
- Tablet: 2 cards visible
- Desktop: 3 cards visible

**Programs Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Stats Grid:**
- Mobile: 2x2 grid
- Desktop: 4x1 row

**Timeline:**
- Mobile: Vertical with cards on right
- Desktop: Horizontal with alternating cards

**Footer:**
- Mobile: Single column, stacked
- Tablet: 2 columns
- Desktop: 4 columns

---

## ✨ Animation System

### Scroll Animations (using @vueuse/motion)

**Fade In:**
```vue
<div v-motion-fade>
  Content
</div>
```

**Slide In from Left:**
```vue
<div 
  v-motion
  :initial="{ opacity: 0, x: -50 }"
  :visible-once="{ 
    opacity: 1, 
    x: 0,
    transition: { duration: 600 }
  }"
>
  Content
</div>
```

**Slide In from Right:**
```vue
<div 
  v-motion
  :initial="{ opacity: 0, x: 50 }"
  :visible-once="{ 
    opacity: 1, 
    x: 0,
    transition: { duration: 600 }
  }"
>
  Content
</div>
```

**Slide Up:**
```vue
<div 
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :visible-once="{ 
    opacity: 1, 
    y: 0,
    transition: { duration: 600 }
  }"
>
  Content
</div>
```

**Stagger Animation:**
```vue
<div 
  v-for="(item, index) in items"
  :key="item.id"
  v-motion
  :initial="{ opacity: 0, y: 50 }"
  :visible-once="{ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 600,
      delay: index * 100
    }
  }"
>
  {{ item.title }}
</div>
```

### Counter Animation Composable

Create `composables/useCounter.ts`:

```typescript
import { ref, onMounted } from 'vue'

export const useCounter = (target: number, duration: number = 2000) => {
  const count = ref(0)
  const isAnimating = ref(false)

  const animate = () => {
    if (isAnimating.value) return
    
    isAnimating.value = true
    const increment = target / (duration / 16)
    
    const timer = setInterval(() => {
      count.value += increment
      if (count.value >= target) {
        count.value = target
        clearInterval(timer)
        isAnimating.value = false
      }
    }, 16)
  }

  return { count, animate }
}
```

Usage:
```vue
<script setup lang="ts">
import { useCounter } from '~/composables/useCounter'

const { count, animate } = useCounter(400000)

// Trigger on scroll into view
const counterRef = ref()
useMotion(counterRef, {
  visibleOnce: {
    transition: {
      onComplete: animate
    }
  }
})
</script>

<template>
  <div ref="counterRef">
    {{ Math.floor(count).toLocaleString() }}+
  </div>
</template>
```

---

## 📁 Complete File Structure

```
shakti-landing/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── PartnerMarquee.vue
│   ├── RecentActivities.vue
│   ├── NetworkCoverage.vue
│   ├── DigitalTimeline.vue
│   ├── ProgramsGrid.vue
│   ├── TestimonialsCarousel.vue
│   ├── ImpactStats.vue
│   ├── CTASection.vue
│   └── Footer.vue
├── composables/
│   └── useCounter.ts
├── pages/
│   └── index.vue
├── public/
│   └── favicon.ico
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Main App File

### `app.vue`

```vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

---

## 📄 Main Page

### `pages/index.vue`

```vue
<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <HeroSection />
    <PartnerMarquee />
    <RecentActivities />
    <NetworkCoverage />
    <DigitalTimeline />
    <ProgramsGrid />
    <TestimonialsCarousel />
    <ImpactStats />
    <CTASection />
    <Footer />
  </div>
</template>
```

---

## ✅ Implementation Checklist

### Setup Phase
- [ ] Install Nuxt 4: `npx nuxi@latest init shakti-landing`
- [ ] Install dependencies: `npm install swiper vue3-marquee @vueuse/motion @heroicons/vue`
- [ ] Install Tailwind: `npm install -D @nuxtjs/tailwindcss`
- [ ] Configure `nuxt.config.ts`
- [ ] Create `tailwind.config.ts` with brand colors
- [ ] Create `assets/css/main.css` with Tailwind imports
- [ ] Add Google Fonts (Inter) to `nuxt.config.ts`

### Component Development
- [ ] Create `Navbar.vue` with sticky scroll effect
- [ ] Create `HeroSection.vue` with parallax and gradient
- [ ] Create `PartnerMarquee.vue` with vue3-marquee
- [ ] Create `RecentActivities.vue` with Swiper carousel
- [ ] Create `NetworkCoverage.vue` with animated stats
- [ ] Create `DigitalTimeline.vue` with scroll animations
- [ ] Create `ProgramsGrid.vue` with hover effects
- [ ] Create `TestimonialsCarousel.vue` with Swiper
- [ ] Create `ImpactStats.vue` with counter animations
- [ ] Create `CTASection.vue` with gradient background
- [ ] Create `Footer.vue` with multi-column layout

### Composables & Utilities
- [ ] Create `useCounter.ts` for animated counters

### Testing & Optimization
- [ ] Test all animations on scroll
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test Swiper carousels (navigation, pagination, autoplay)
- [ ] Test marquee scroll and pause on hover
- [ ] Verify all brand colors use `brand-{shade}` classes
- [ ] Test hover effects on all interactive elements
- [ ] Check accessibility (ARIA labels, keyboard navigation)
- [ ] Optimize images (lazy loading, proper sizing)
- [ ] Test performance (Lighthouse score)

### Final Touches
- [ ] Add SEO meta tags
- [ ] Add favicon
- [ ] Test in different browsers
- [ ] Verify smooth scroll behavior
- [ ] Check all demo content is populated
- [ ] Ensure no console errors

---

## 🎯 Key Implementation Notes

### 1. Swiper Setup for Nuxt 4

```vue
<script setup lang="ts">
// Import Swiper Vue components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Setup modules
const modules = [Navigation, Pagination, Autoplay, EffectFade]
</script>
```

### 2. Custom Swiper Styling

Add to `assets/css/main.css`:

```css
/* Swiper custom styles */
.swiper-button-next,
.swiper-button-prev {
  @apply text-brand-500 hover:text-brand-600;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  @apply text-2xl font-bold;
}

.swiper-pagination-bullet {
  @apply bg-brand-300;
}

.swiper-pagination-bullet-active {
  @apply bg-brand-500;
}
```

### 3. Marquee Component Registration

In component where used:

```vue
<script setup lang="ts">
import Vue3Marquee from 'vue3-marquee'
</script>
```

Or register globally in a plugin (`plugins/vue3-marquee.ts`):

```typescript
import Vue3Marquee from 'vue3-marquee'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Vue3Marquee', Vue3Marquee)
})
```

### 4. Motion Composable Usage

```vue
<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const target = ref()

useMotion(target, {
  initial: {
    opacity: 0,
    y: 100,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1000,
      type: 'spring',
    },
  },
})
</script>

<template>
  <div ref="target">
    Animated content
  </div>
</template>
```

### 5. Heroicons Usage

```vue
<script setup lang="ts">
import { 
  HomeIcon, 
  UserGroupIcon,
  ChartBarIcon 
} from '@heroicons/vue/24/outline'
// For solid icons: '@heroicons/vue/24/solid'
</script>

<template>
  <HomeIcon class="w-6 h-6 text-brand-500" />
</template>
```

---

## 🎨 Advanced Styling Patterns

### Gradient Backgrounds

```html
<!-- Hero Gradient -->
<div class="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">
  Content
</div>

<!-- Subtle Section Gradient -->
<div class="bg-gradient-to-b from-brand-50 to-white">
  Content
</div>

<!-- Overlay Gradient -->
<div class="relative">
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  <img src="..." alt="..." class="w-full h-full object-cover" />
  <div class="relative z-10">
    Content
  </div>
</div>
```

### Pattern Backgrounds (SVG)

Add to component:

```html
<div class="relative bg-brand-500 overflow-hidden">
  <!-- Dot Pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg width="100%" height="100%">
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="white" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
  
  <!-- Content -->
  <div class="relative z-10">
    Your content here
  </div>
</div>
```

### Glass Morphism Effect

```html
<div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
  Content
</div>
```

### Card Hover Effect

```html
<div class="group relative overflow-hidden rounded-2xl bg-white border-2 border-brand-100 transition-all duration-300 hover:border-brand-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10">
  <!-- Animated background on hover -->
  <div class="absolute inset-0 bg-brand-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
  
  <!-- Content -->
  <div class="relative z-10 p-6">
    Card content
  </div>
</div>
```

---

## 🔧 Utility Functions

### Format Number with Suffix

Create `utils/formatNumber.ts`:

```typescript
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
```

### Smooth Scroll to Section

```typescript
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
```

---

## 📚 Package.json Scripts

```json
{
  "name": "shakti-landing",
  "version": "1.0.0",
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "@heroicons/vue": "^2.1.1",
    "@vueuse/motion": "^2.0.0",
    "nuxt": "^4.0.0",
    "swiper": "^11.0.5",
    "vue": "^3.4.0",
    "vue3-marquee": "^4.1.0"
  },
  "devDependencies": {
    "@nuxtjs/tailwindcss": "^6.10.1",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.3.3"
  }
}
```

---

## 🎓 Best Practices

### 1. Component Structure
- Keep components focused and single-purpose
- Use TypeScript for props and emits
- Extract reusable logic into composables
- Use Heroicons consistently

### 2. Performance
- Lazy load images with `loading="lazy"`
- Use `v-show` for frequently toggled content
- Use `v-if` for conditionally rendered content
- Optimize Swiper with `lazy` option for images

### 3. Accessibility
- Add ARIA labels to interactive elements
- Ensure keyboard navigation works
- Use semantic HTML
- Maintain good color contrast ratios
- Add `alt` text to all images

### 4. SEO
- Use proper heading hierarchy (h1 → h6)
- Add meta descriptions
- Use semantic HTML5 tags
- Implement Open Graph tags
- Add structured data (JSON-LD)

### 5. Code Organization
- Group related imports
- Use consistent naming conventions
- Comment complex logic
- Keep template clean and readable
- Extract long lists into data files

---

## 🐛 Common Issues & Solutions

### Issue: Swiper not working
**Solution:** Make sure to import CSS files and register modules correctly

```vue
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const modules = [Navigation]
```

### Issue: Marquee not scrolling
**Solution:** Ensure content has enough items and proper width

```vue
<Vue3Marquee :duration="30" :pause-on-hover="true">
  <div class="flex items-center gap-16">
    <!-- Items here -->
  </div>
</Vue3Marquee>
```

### Issue: Animations not triggering
**Solution:** Check that @vueuse/motion is properly installed and elements have refs

```vue
<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const target = ref()
useMotion(target, { /* config */ })
</script>

<template>
  <div ref="target">Content</div>
</template>
```

### Issue: Tailwind classes not applying
**Solution:** Verify content paths in tailwind.config.ts

```typescript
content: [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './app.vue',
],
```

---

## 🚀 Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Check all images are optimized
- [ ] Verify all links work
- [ ] Test on multiple browsers
- [ ] Run Lighthouse audit
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test all animations
- [ ] Check console for errors
- [ ] Verify environment variables (if any)
- [ ] Add analytics (Google Analytics, etc.)

---

## 📖 Documentation

### Changing Brand Color

To change the brand color from orange to another color:

1. Open `tailwind.config.ts`
2. Update the `brand` color palette:

```typescript
colors: {
  brand: {
    50: '#...',
    100: '#...',
    // ... update all shades
    500: '#YOUR_MAIN_COLOR',  // Main brand color
    // ... update all shades
    900: '#...',
  },
}
```

3. Use a color palette generator for consistent shades:
    - https://uicolors.app/create
    - https://tailwindshades.com

4. Save and restart dev server - all brand colors will update automatically!

### Component Props

Document key component props:

**RecentActivities:**
- No props (uses internal data)

**NetworkCoverage:**
- No props (uses internal stats)

**TestimonialsCarousel:**
- No props (uses internal testimonials)

---

## 🎉 Final Notes

This landing page should be:
- ✅ **Fully Responsive** - Works perfectly on all devices
- ✅ **Accessible** - WCAG compliant with proper ARIA labels
- ✅ **Performant** - Optimized images, lazy loading, smooth animations
- ✅ **Maintainable** - Centralized colors, reusable components
- ✅ **Modern** - Uses latest Nuxt 4, Tailwind 4, Vue 3 features
- ✅ **Production-Ready** - Complete with demo content and styling

**Start Development:**
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your landing page!

---

**Good luck with your Shakti Foundation landing page! 🚀**
