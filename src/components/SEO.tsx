import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary_large_image' | 'summary';
}

export function SEO({
  title = "NORNX | Systems Engineering for Modern Business",
  description = "Nornx Technologies designs AI-powered systems, automation workflows, and scalable tech infrastructure that transform how your business operates.",
  keywords = "AI Systems, Business Automation, Tech Infrastructure, Operating Systems for Business, Nornx, AI Agency",
  author = "Nornx Technologies",
  canonical = "https://nornx.com/",
  ogType = "website",
  ogImage = "https://nornx.com/og-image.png",
  twitterCard = "summary_large_image",
}: SEOProps) {
  const siteName = "NORNX";
  const twitterHandle = "@nornx"; // Placeholder if they don't have one

  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nornx Technologies",
    "url": "https://nornx.com",
    "logo": "https://nornx.com/logo.png", // Assuming they have a logo.png or similar
    "sameAs": [
      "https://facebook.com/nornx",
      "https://linkedin.com/company/nornx",
      "https://twitter.com/nornx"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NORNX",
    "url": "https://nornx.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nornx.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </>
  );
}
