import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title */}
        <title>Clicker</title>
        {/* Icons */}
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-touch-icon.png" />
        {/* Description */}
        <meta name="description" content="A simple clicker..." key="desc" />
        {/* Meta Title */}
        <meta property="og:title" content="Clicker" />
        {/* Meta Description */}
        <meta
          property="og:description"
          content="A simple clicker..."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
