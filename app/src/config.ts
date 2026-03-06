// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "GLASS",
  logoAccent: "CRAFT",
  navLinks: [
    { label: "Products", href: "#products" },
    { label: "Finishes", href: "#finishes" },
    { label: "About", href: "#about" },
  ],
  ctaText: "Get Quote",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "PREMIUM",
  titleLine2: "SHOWER",
  subtitle: "Custom glass shower enclosures crafted with precision and elegance",
  ctaText: "Explore Collection",
  ctaHref: "#products",
  backgroundImage: "/images/hero.jpg",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [
    { row: 0, col: 2 },
    { row: 1, col: 5 },
    { row: 2, col: 0 },
    { row: 3, col: 7 },
    { row: 4, col: 3 },
    { row: 5, col: 6 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "FEATURED PRODUCT",
  headingMain: "Frameless",
  headingAccent: "Elite",
  productName: "Corner Enclosure",
  description: "Our signature frameless shower enclosure features 10mm tempered safety glass with polished chrome hardware. The minimalist design creates an open, spacious feel while maintaining complete water integrity.",
  price: "From $1,299",
  features: [
    { value: "10mm", label: "Tempered Glass" },
    { value: "Lifetime", label: "Warranty" },
    { value: "Custom", label: "Measurements" },
  ],
  colorSwatches: ["#C0C0C0", "#FFD700", "#1a1a1a", "#8B4513"],
  colorSwatchesLabel: "Hardware Finishes",
  ctaText: "Request Quote",
  productImage: "/images/product.png",
  productImageAlt: "Frameless glass shower enclosure",
  decorativeText: "GLASSCRAFT",
};

// ----------------------------------------------------------------------------
// Color Palette Section
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "GLASS OPTIONS",
  headingMain: "Choose Your",
  headingAccent: "Finish",
  colors: [
    {
      name: "Ultra Clear",
      nameSecondary: "Starphire",
      color: "#e8f4f8",
      description: "Low-iron glass for maximum clarity",
    },
    {
      name: "Frosted",
      nameSecondary: "Privacy",
      color: "#d4dde0",
      description: "Etched finish for privacy",
    },
    {
      name: "Tinted Gray",
      nameSecondary: "Modern",
      color: "#6a7a80",
      description: "Sophisticated contemporary look",
    },
    {
      name: "Bronze",
      nameSecondary: "Warm",
      color: "#8B7355",
      description: "Elegant warm tone finish",
    },
    {
      name: "Patterned",
      nameSecondary: "Textured",
      color: "#c9d1d5",
      description: "Decorative rain pattern",
    },
    {
      name: "Mirrored",
      nameSecondary: "Reflective",
      color: "#a8b5bc",
      description: "One-way mirror effect",
    },
  ],
  bottomText: "Click any finish to see details",
  decorativeText: "FINISHES",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "OUR CRAFT",
  headingMain: "Precision",
  headingAccent: "Engineered",
  tagline: "Every shower enclosure we create is a testament to our commitment to excellence. From precise measurements to flawless installation, we transform bathrooms into sanctuaries of modern luxury.",
  features: ["Custom Fitted", "Expert Install", "10-Year Warranty"],
  ctaText: "Start Your Project",
  ctaHref: "#contact",
  image: "/images/brand-portrait.jpg",
  imageAlt: "Craftsman installing glass shower enclosure",
  decorativeText: "CRAFTSMAN",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "GLASS",
  logoAccent: "CRAFT",
  brandDescription: "Premium custom shower enclosures designed and installed with precision craftsmanship.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "twitter", href: "#", label: "Twitter" },
    { platform: "youtube", href: "#", label: "YouTube" },
  ],
  linkSections: [
    {
      title: "Products",
      links: ["Frameless Enclosures", "Sliding Doors", "Pivot Doors", "Steam Showers"],
    },
    {
      title: "Services",
      links: ["Custom Design", "Installation", "Repairs", "Maintenance"],
    },
  ],
  contact: {
    address: "2450 Industrial Blvd, Suite 120, Los Angeles, CA 90021",
    phone: "(323) 555-0147",
    email: "hello@glasscraft.com",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "GlassCraft Shower Systems. All rights reserved.",
  decorativeText: "CONTACT",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "GlassCraft | Premium Shower Enclosures",
  description: "Custom glass shower enclosures crafted with precision and elegance. Frameless, sliding, and pivot door systems for modern bathrooms.",
  language: "en",
};
