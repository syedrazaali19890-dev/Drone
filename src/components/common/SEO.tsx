import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  schema?: Record<string, any> | Record<string, any>[];
  type?: 'website' | 'article' | 'profile';
}

export const SEO = ({ title, description, canonicalUrl, image, schema, type = 'website' }: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.antigravity-corp.com';
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const ogImage = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.webp`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | Antigravity</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#050505" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Antigravity`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Antigravity Defense Systems" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={`${title} | Antigravity`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
