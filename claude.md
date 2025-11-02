Here's the streamlined prompt for Claude CLI:

Build a complete website for Partner Society BD - an educational organization in Bangladesh using the existing Nuxt 4 + Tailwind setup.
Color Configuration:
Update the main.css file with these custom colors:
css:root {
--primary: #6B46C1;        /* Violet from logo */
--primary-dark: #553399;   /* Darker violet for hover */
--secondary: #EF4444;      /* Red from logo */
--accent: #FACC15;         /* Yellow */
--text-primary: #1F2937;   /* Gray-800 */
--text-secondary: #6B7280; /* Gray-500 */
}
Primary color: #6B46C1 (violet/purple from logo)
Secondary color: #EF4444 (red from logo)

Font Setup:
Add to nuxt.config.ts:
javascriptapp: {
head: {
link: [
{
rel: 'stylesheet',
href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap'
}
]
}
}
```

Use "Noto Sans Bengali" for Bangla text and "Inter" for English.

---

## Website Structure:

### 1. NAVBAR (Sticky)
- Logo: "Partner Society" text with icon placeholder
- Tagline: "আধুনিক শিক্ষা, সবার জন্য"

**Menu Items:**
- **About Us** (Dropdown)
  - Vision, Mission & Values
  - Our Leadership
  - Contact Us
  
- **What We Do** (Dropdown)
  - Partner Society Scholarship Program (PSSP)
  - Skill Development Program (SDP)
  - Community School Support Program (CSSP)
  - Model School Initiative
  
- **Notice**
- **Gallery**
- **School Registration** (violet button - stands out)
- **Career**
- **School List**

Mobile: Hamburger menu with smooth slide-in animation

---

### 2. HERO SECTION
**Content:**
```
Partner Society BD একটি কিন্ডারগার্ডেন সোসাইটি, আধুনিক শিক্ষামূলক প্রতিষ্ঠান, মেধাবী শিক্ষার্থীদের বৃত্তিমূলক কার্যক্রম পরিচালনা করা, বিভিন্ন সহায়ক বই প্রকাশ এবং দক্ষতা উন্নয়নের মাধ্যমে শিক্ষার গুণগত মান নিশ্চিত করাই আমাদের মূল লক্ষ্য!
```

**Two CTAs:**
1. "Learn More" (violet bg-primary button → scrolls to #about)
2. "Apply Now" (outlined border-primary button → scrolls to #registration)

**Design:** Gradient background with violet/purple tones, animated floating elements

---

### 3. ABOUT SECTION (id="about")

**Single Card with Tabs for Vision, Mission & Values:**

**Tab 1 - Vision:**
আধুনিক শিক্ষা ব্যবস্থার মাধ্যমে প্রতিটি শিশুর সম্ভাবনা বিকাশ।

**Tab 2 - Mission:**
স্কুল ও মাদ্রাসা পর্যায়ে গুণগত শিক্ষা, বৃত্তি এবং দক্ষতা উন্নয়ন কার্যক্রম পরিচালনা।

**Tab 3 - Values:**
সততা, মানবতা, জ্ঞানচর্চা, সহযোগিতা।

Use animated tab switching with smooth transitions.

---

### 4. PROGRAMS SECTION (What We Do)

**4 Program Cards (2x2 grid on desktop, 1 column on mobile):**

**1. Partner Society Scholarship Program (PSSP)**
- Icon: 🎓 or graduation cap SVG
- Subtitle: বৃত্তি ভিত্তিক শিক্ষা উন্নয়ন কর্মসূচি
- Description: মেধাবী ও দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রদান ও শিক্ষা সহায়তা

**2. Skill Development Program (SDP)**
- Icon: 💡 or lightbulb SVG
- Subtitle: শিক্ষার্থীদের দক্ষতা বৃদ্ধির প্রশিক্ষণ
- Description: কম্পিউটার, ভাষা, এবং জীবন দক্ষতা উন্নয়ন প্রশিক্ষণ

**3. Community School Support Program (CSSP)**
- Icon: 🏫 or school SVG
- Subtitle: স্থানীয় স্কুলে সহায়তা কার্যক্রম
- Description: গ্রামীণ স্কুলে অবকাঠামো, শিক্ষা উপকরণ ও শিক্ষক প্রশিক্ষণ সহায়তা

**4. Model School Initiative**
- Icon: ⭐ or star SVG
- Subtitle: মানসম্পন্ন বিদ্যালয় প্রতিষ্ঠা ও পরিচালনা
- Description: আধুনিক শিক্ষা ব্যবস্থার সাথে মডেল স্কুল প্রতিষ্ঠা ও পরিচালনা

Each card: white bg, shadow, hover lift effect, violet border on hover

---

### 5. LEADERSHIP SECTION (id="team")

**2 Team Member Cards (side by side on desktop):**

**Card 1:**
- Image: Circular avatar placeholder (400x400)
- Name: MD Tarikul Islam
- Position: Executive Director (violet text)
- Bio: প্রতিষ্ঠানের সার্বিক ব্যবস্থাপনা, নীতি নির্ধারণ ও শিক্ষা কার্যক্রমের মানোন্নয়ন তদারকি করেন।

**Card 2:**
- Image: Circular avatar placeholder (400x400)
- Name: Mishuk Rayhan
- Position: Program Manager (violet text)
- Bio: শিক্ষা প্রকল্পসমূহের বাস্তবায়ন, মনিটরিং ও স্কুলগুলোর সঙ্গে যোগাযোগের দায়িত্বে আছেন।

---

### 6. EVENTS & ACTIVITIES SECTION

**3 Activity Cards with Icons:**

**Card 1:**
- Icon: 📅
- Title: Scholarship Exams
- Description: বছরব্যাপী বৃত্তি পরীক্ষা এবং সম্প্রদায় ভিত্তিক শিক্ষা কার্যক্রম

**Card 2:**
- Icon: 🏘️
- Title: Rural School Development
- Description: গ্রামীণ স্কুল উন্নয়নে বিশেষ প্রকল্প

**Card 3:**
- Icon: 👨‍🏫
- Title: Teacher Training
- Description: নিয়মিত শিক্ষক প্রশিক্ষণ এবং দক্ষতা কর্মশালা

Timeline style or horizontal cards with connecting lines.

---

### 7. NOTICE SECTION (id="notice")

**3 Notice Cards:**

**Notice 1:**
- Badge: "নতুন" (New - violet bg)
- Date: ০১ জানুয়ারী, ২০২৫
- Title: Admission is open for 2025
- Description: ২০২৫ শিক্ষাবর্ষের ভর্তি কার্যক্রম চলমান
- Button: "বিস্তারিত দেখুন" (Read More)

**Notice 2:**
- Badge: "জরুরি" (Urgent - red bg)
- Date: ১৫ ডিসেম্বর, ২০২৪
- Title: Scholarship Exam Registration Deadline
- Description: বৃত্তি পরীক্ষা রেজিস্ট্রেশনের শেষ তারিখ ৩১ ডিসেম্বর
- Button: "আবেদন করুন" (Apply Now)

**Notice 3:**
- Badge: "সুযোগ" (Opportunity - yellow bg)
- Date: চলমান
- Title: Volunteer Recruitment Ongoing
- Description: স্বেচ্ছাসেবক নিয়োগ চলছে
- Button: "যোগ দিন" (Join Now)

---

### 8. SCHOOL LIST SECTION (id="schools")

**Section Title:** নীলফামারী জেলা, জলঢাকা উপজেলা

**8 School Cards (4 columns on desktop, 2 on tablet, 1 on mobile):**

1. ইসলামিয়া মাদ্রাসা
2. গোলনা নিউ শিশু নিকেতন
3. গোলনা ত্রিবেণী মডেল স্কুল
4. মীরগঞ্জ বিজ্ঞান একাডেমি
5. আল আকিদা মডেল মাদ্রাসা
6. কৈমারী বিদ্যানিকেতন
7. আনন্দপাঠ বিদ্যানিকেতন
8. তানজিমুল উম্মাহ মাদ্রাসা

Each card:
- School icon (🏫)
- School name (large, bold)
- Location badge: "জলঢাকা"
- Hover effect: slight scale + violet border

---

### 9. GALLERY SECTION (id="gallery")

**Grid Layout:**
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

**9 Placeholder Images:**
- Use https://placehold.co/600x400/6B46C1/FFFFFF?text=Gallery+Image+[1-9]
- Each image in a card with rounded corners
- Click to open lightbox modal
- Smooth hover zoom effect

**Lightbox Features:**
- Previous/Next navigation
- Close button
- Dark overlay
- Image caption support

---

### 10. SCHOOL REGISTRATION FORM (id="registration")

**Section Title:** স্কুল রেজিস্ট্রেশন

**Form Fields:**
- নাম (Full Name) - text input, required
- ইমেইল (Email) - email input, required
- ফোন নম্বর (Phone) - tel input, required
- স্কুলের নাম (School Name) - text input, required
- স্কুলের ঠিকানা (School Address) - textarea, required
- বার্তা (Message) - textarea, optional

**Submit Button:** "আবেদন জমা দিন" (violet bg-primary, full width)

**Validation:**
- Show error messages in Bangla
- Success message after submission
- Loading state on button

---

### 11. CAREER SECTION (id="career")

**Section Title:** আমাদের সাথে যোগ দিন

**Form Fields:**
- নাম (Full Name) - text input, required
- ইমেইল (Email) - email input, required
- ফোন নম্বর (Phone) - tel input, required
- পদের নাম (Position) - select dropdown:
  - শিক্ষক (Teacher)
  - প্রোগ্রাম ম্যানেজার (Program Manager)
  - প্রশাসনিক কর্মকর্তা (Administrative Officer)
  - অন্যান্য (Others)
- জীবনবৃত্তান্ত (Resume) - file upload (PDF only, max 5MB)
- কভার লেটার (Cover Letter) - textarea, optional

**Submit Button:** "আবেদন করুন" (violet bg-primary)

---

### 12. CONTACT SECTION (id="contact")

**Two Column Layout:**

**Left Column - Contact Information:**
```
যোগাযোগের ঠিকানা

📍 ঠিকানা
Dhap, Kakoli Lane, Rangpur

📞 ফোন
01337-212468
01337-212469
01337-212467

📧 ইমেইল
partnersocietynet@gmail.com
Right Column - Contact Form:

নাম (Name) - required
ইমেইল (Email) - required
বার্তা (Message) - textarea, required
Submit: "পাঠান" button (violet bg-primary)

Below Both Columns:
Embedded Google Map:
html<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.123!2d89.234!3d25.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzMxLjIiTiA4OcKwMTQnMDIuNCJF!5e0!3m2!1sen!2sbd!4v1234567890" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

---

### 13. FOOTER

**4 Column Layout (stacks on mobile):**

**Column 1: Organization**
- Logo placeholder
- Tagline: "আধুনিক শিক্ষা, সবার জন্য"
- Short text: আধুনিক শিক্ষার মাধ্যমে সমাজ উন্নয়নে প্রতিশ্রুতিবদ্ধ

**Column 2: Quick Links**
- About Us
- Programs
- Gallery
- Contact

**Column 3: Contact**
- Address: Dhap, Kakoli Lane, Rangpur
- Phone: 01337-212468
- Email: partnersocietynet@gmail.com

**Column 4: Social Media**
- Facebook icon + https://www.facebook.com/partnersocietybd
- whatsapp icon + +8801337-212468
- (Use placeholder # links)

**Bottom Bar:**
```
Copyright © 2025 Partner Society BD — All Rights Reserved.

Design Requirements:

Colors:

Primary violet (#6B46C1) for all buttons, links, active states
Red (#EF4444) for urgent badges and secondary accents
Use violet for hover states and focus rings


Typography:

Bangla: Noto Sans Bengali
English: Inter
Headings: font-bold
Body: font-normal


Spacing:

Sections: py-16 md:py-24
Containers: max-w-7xl mx-auto px-4
Cards: p-6 md:p-8


Components:

All cards: rounded-xl shadow-lg hover:shadow-2xl transition
Buttons: rounded-lg px-6 py-3 font-semibold
Forms: rounded-lg border focus:ring-2 focus:ring-primary


Animations:

Smooth scroll behavior
Hover scale effects (scale-105)
Fade-in on scroll (optional)
Transition duration: 300ms


Responsive:

Mobile-first approach
Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
Hamburger menu on mobile
Stack columns on small screens




Create all necessary Vue components, pages, and assets. Make it production-ready with proper Bangla text support, smooth animations, and professional design using the violet primary color throughout!