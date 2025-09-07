/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        scrollLeftToRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 3))" },
        },
        scrollRightToLeft: {
          "0%": { transform: "translateX(calc(-250px * 3))" },
          "100%": { transform: "translateX(0)" },
        },

        slideInFromTop: {
          "0%": { top: "-50px", opacity: "0" },
          "100%": { top: "50%", opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { bottom: "-50px", opacity: "0" },
          "100%": { bottom: "50%", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { left: "-50px", opacity: "0" },
          "100%": { left: "50%", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { right: "-50px", opacity: "0" },
          "100%": { right: "50%", opacity: "1" },
        },
        textSpin: {
          "0%": {
            transform: "rotate(0deg)",
            fontVariationSettings: '"wdth" 50',
          },
          "25%": { fontVariationSettings: '"wdth" 145' },
          "50%": { fontVariationSettings: '"wdth" 250' },
          "75%": { fontVariationSettings: '"wdth" 145' },
          "100%": {
            transform: "rotate(360deg)",
            fontVariationSettings: '"wdth" 50',
          },
        },
        identifier: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        'border-dash': {
          '100%': { 'stroke-dashoffset': '100' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) scale(1.05) rotate(5deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) scale(0.95) rotate(-5deg)' },
        },
      },

      animation: {
        scrollLeftToRight: "scrollLeftToRight 40s linear infinite",
        scrollRightToLeft: "scrollRightToLeft 40s linear infinite",
        slideInFromTop: "slideInFromTop 1s ease-out forwards",
        slideInFromBottom: "slideInFromBottom 1s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        textSpin: "textSpin 20s linear reverse",
        identifier: "identifier 20s linear infinite",
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'border-dash': 'border-dash 4s linear infinite',
        float1: 'float1 6s ease-in-out infinite',
        float2: 'float2 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
