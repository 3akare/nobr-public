import { Metadata } from "next";

export const seoMetadata: Metadata = {
  title: "nobr: Anonymous Chat for Everyone",
  description:
    "Discover a safe and fun way to connect with people from around the world",
  applicationName: "nobr",
  creator: "David Bakare",
  openGraph: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    url: "https://nobr-delta.vercel.app",
    siteName: "nobr",
    images: [
      {
        url: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    card: "summary",
    creator: "@nobr_hq",
    images: [
      {
        url: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
  category: "communication",
  icons: {
    icon: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
