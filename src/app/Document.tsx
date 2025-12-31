import styles from "./styles.css?url"

export function ReactDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Dynamic SEO Meta Tags - ALL VALUES FROM CONFIG/PAYLOAD */}
        <title>GitHub Auto-Push Example</title>
        <meta name="description" content="Example application demonstrating GitHub auto-push functionality" />
                
        {/* Canonical URL */}
        <link rel="canonical" href="https://github-auto-push-example.vercel.app/" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GitHub Auto-Push Example" />
        <meta property="og:description" content="Example application demonstrating GitHub auto-push functionality" />
        <meta property="og:url" content="https://github-auto-push-example.vercel.app/" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="GitHub Auto-Push Example" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="GitHub Auto-Push Example" />
        <meta name="twitter:description" content="Example application demonstrating GitHub auto-push functionality" />
        <meta name="twitter:image" content="" />
                
        {/* Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="GitHub Auto-Push Example" />
        
        {/* Icons - Generated from favicon configuration */}
                {/* Default favicons if not configured */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                
        {/* PWA Icons - Generated from icon configuration */}
                
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
                
        {/* Existing head content */}
        <link rel="stylesheet" href={styles} />
      </head>
      <body>
        <div id="root">{children}</div>
        {/* Client-side JavaScript for React Server Actions */}
        <script type="module" src="/src/client.tsx"></script>
      </body>
    </html>
  )
}