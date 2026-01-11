/* eslint-disable import/no-anonymous-default-export */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
        shrikhand: ["var(--font-shrikhand)"],
        gentySans: ["var(--font-gentySans)"],
        pacifico: ["var(--font-pacifico)"],
        libre: ["var(--font-libre)"],
        styleScript: ["var(--font-styleScript)"],
        nickainley: ["var(--font-nickainley)"],
        moonjelly: ["var(--font-moonjelly)"],
      },
      colors: {
        ...colors,
        cream: "#FFFCF9",
        brown: {
          "50": "#f9f7f4",
          "100": "#f0eae4",
          "200": "#e2d6c7",
          "300": "#d2c1aa",
          "400": "#c0aa91",
          "500": "#a89583",
          "600": "#8f7d6e",
          "700": "#766659",
          "800": "#5e5045",
          "900": "#473b33",
        },
        peach: {
          "50": "#fff3f2",
          "100": "#ffe2df",
          "200": "#ffcfc8",
          "300": "#ffb0a1",
          "400": "#ff9278",
          "500": "#ff785e",
          "600": "#f25a40",
          "700": "#d44932",
          "800": "#a93723",
          "900": "#7a2415",
        },
        green: {
          "50": "#f4f7f1",
          "100": "#e3eade",
          "200": "#d0ddc8",
          "300": "#bccdb1",
          "400": "#9db18f",
          "500": "#7e9570",
          "600": "#677a5b",
          "700": "#56674a",
          "800": "#445239",
          "900": "#333e2a",
        },
        primary: {
          "50": "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          "100": "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          "200": "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          "300": "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          "400": "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          "500": "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          "600": "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          "700": "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          "800": "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          "900": "rgb(var(--tw-color-primary-900) / <alpha-value>)",
          "950": "rgb(var(--tw-color-primary-950) / <alpha-value>)",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: "#222222",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
