# Component Structure

This document outlines the modular component structure implemented for the resume review platform.

## Language Support

### Context Management
- **`app/contexts/LanguageContext.tsx`** - React context for managing language state (Arabic/English)
- Provides `useLanguage()` hook for components to access current language and toggle function
- Automatically updates document direction (RTL/LTR) and language attribute

### Language Toggle
- **`app/components/LanguageToggle.tsx`** - Floating language toggle button
- Positioned fixed at top-right corner
- Shows current language flag and allows switching between Arabic and English

## Content Management

### Translations
- **`app/data/content.ts`** - Centralized content management
- Contains all text content in both Arabic and English
- Organized by sections for easy maintenance

## Modular Components

### Main Sections
All sections are now modular components in `app/components/sections/`:

1. **`HeroSection.tsx`** - Main hero section with name, title, description, and CTAs
2. **`AboutSection.tsx`** - About me section with personal background
3. **`TestimonialsSection.tsx`** - Client testimonials and reviews
4. **`VideoSection.tsx`** - YouTube video preview section
5. **`DifferenceSection.tsx`** - Before/after resume comparison
6. **`ServicesSection.tsx`** - Service packages and pricing
7. **`PaymentSection.tsx`** - Payment methods and instructions
8. **`FAQSection.tsx`** - Frequently asked questions
9. **`FooterSection.tsx`** - Footer with contact information and social links

### Utility Components
- **`WhatsAppButton.tsx`** - Floating WhatsApp contact button
- **`CopyButton.tsx`** - Reusable copy-to-clipboard button
- **`SocialIcons.tsx`** - Social media icons
- **`SimplePDFPreview.tsx`** - PDF preview component

## Main Page Structure

The main `app/page.tsx` now uses a clean, modular structure:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <LanguageToggle />
      <WhatsAppButton />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <VideoSection />
      <DifferenceSection />
      <ServicesSection />
      <PaymentSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
```

## Features Implemented

### Language Switching
- ✅ Floating language toggle button
- ✅ Complete Arabic/English translations
- ✅ Automatic RTL/LTR direction switching
- ✅ Context-based state management

### Modular Architecture
- ✅ Separated concerns into individual components
- ✅ Centralized content management
- ✅ Reusable utility components
- ✅ Clean main page structure

### Responsive Design
- ✅ All components maintain responsive behavior
- ✅ Language toggle works on all screen sizes
- ✅ RTL/LTR layout adjustments

## Benefits

1. **Maintainability** - Easy to update content or modify individual sections
2. **Reusability** - Components can be reused or easily modified
3. **Scalability** - Easy to add new sections or features
4. **Internationalization** - Complete bilingual support with proper RTL/LTR handling
5. **Developer Experience** - Clear separation of concerns and organized file structure
