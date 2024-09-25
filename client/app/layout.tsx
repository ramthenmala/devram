import { ThemeProvider } from 'next-themes'
import "../styles/globals.css";
import { IBMPlex } from "./lib/IBMPlexFont";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
      </head>
      <body
        className={`${IBMPlex.className} dark:bg-gray-900`}
      > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
