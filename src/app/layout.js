
import { Delius, Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TanstackQueryProvider } from "@/lib/tanstack.query";
import ModeToggle from "@/components/mode-toggle";

import NextTopLoader from "nextjs-toploader";

const inter = Roboto({weight: ['300', '400', '500'], subsets: ['latin'], variable: '--font-inter'});

export const metadata = {
  title: "Catcher App",
  description: "Catcher App",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={cn(`antialiased selection:bg-green-600/20 selection:text-green-600 font-inter`, inter.className,)}
        suppressHydrationWarning
      >
        <NextTopLoader 
          showSpinner={false}
          color="lightgreen"
        />
        <TanstackQueryProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
            {children}
            {/* <ModeToggle /> */}
          </ThemeProvider>

          <Toaster
            position="top-right"
            // richColors
            duration={5000}
          />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
