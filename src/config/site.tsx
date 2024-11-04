export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Timeline",
  description: "Shadcn timeline",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://timeline.rilcy.app",
  links: { github: "https://github.com/Tourniercy/shadcn-timeline" },
};
