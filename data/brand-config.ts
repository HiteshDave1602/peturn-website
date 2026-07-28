export const brand = {
  name: "Peturn",
  legalName: "Peturn",
  tagline: "Business Intelligence | Analytics | Dashboards | Business Consulting",
  shortDescription: "Helping businesses transform data into better decisions.",
  website: "www.peturn.in",
  url: "https://www.peturn.in",
  logo: {
    src: "/brand/peturn-logo.png",
    alt: "Peturn - Turn Data Into Growth",
    width: 340,
    height: 138,
  },
} as const;

export const contact = {
  email: "hello@peturn.in",
  website: brand.website,
  indiaPhone: "+91 84693 49930",
  usPhone: "+1 732 801 1981",
  indiaTel: "+918469349930",
  usTel: "+17328011981",
  indiaWhatsApp: "https://wa.me/918469349930",
  usWhatsApp: "https://wa.me/17328011981",
} as const;

export const socialLinks = {
  linkedin: "",
  instagram: "",
  facebook: "",
} as const;
