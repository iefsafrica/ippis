import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xsm: "440px",
      sm: "640px",
      md: "768px",
      "2md": "832px",
      "1md": "986px",
      lg: "1024px",
      "2lg": "1150px",
      xxl: "1273px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "hsla(var(--border))",
        input: "hsla(var(--input))",
        ring: "hsla(var(--ring))",
        ashForm: "hsla(var(--ash-form))",
        newsText: "hsla(var(--news-text))",
        safetyText: "hsla(var(--safety-text))",
        fireText: "hsla(var(--fire-text))",
        darkPrimary: "hsla(var(--dark-primary))",
        landingBackground: "hsla(var(--landing-background))",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        discount: "hsla(var(--discount))",
        featureBackground: "hsla(var(--feature-background))",
        featurePurple: "hsla(var(--feature-purple))",
        deemText: "hsla(var(--deem-text))",
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          foreground: "hsla(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsla(var(--popover))",
          foreground: "hsla(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsla(var(--card))",
          foreground: "hsla(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "resource-widget": {
          from: {
            borderRadius: "100%",
            width: "200px",
            height: "200px",
          },
          to: {
            borderRadius: "0%",
            width: "100%",
            height: "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "resource-widget": "resource-widget 0.1s ease-in-out",
        // "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        Montserrat: "var(--font-Montserrat)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
