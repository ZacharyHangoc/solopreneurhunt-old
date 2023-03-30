"use client";
import "./globals.css";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Solopreneur Hunt</title>
        <meta
          name="description"
          content="Solopreneur Hunt is a curation of the best & trending solopreneur
        courses. Discover the latest hot courses on Copywriting, Twitter growth,
        sales, and more."
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
