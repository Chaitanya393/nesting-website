import "./globals.css";

export const metadata = {
  title: "Nesting — The Operating System for Hostel & PG Owners",
  description:
    "Nesting gives independent hostel and PG owners one clear control room for occupancy, rent, payments, expenses and profit. Operating system built for hostel & PG owners in Indore, India.",
  keywords: "hostel management, PG management, Indore, rent tracking, occupancy grid, expense management, nesting B2B SaaS",
  openGraph: {
    title: "Nesting — The Operating System for Hostel & PG Owners",
    description: "Run your hostel like a business, not a spreadsheet. Nesting gives independent hostel & PG owners one clear control room.",
    type: "website",
    locale: "en_IN",
    siteName: "Nesting",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
