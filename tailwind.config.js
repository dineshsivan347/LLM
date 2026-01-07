/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b", // zinc-950
                surface: "#18181b",    // zinc-900
                primary: {
                    DEFAULT: "#3b82f6",  // blue-500
                    foreground: "#ffffff",
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                secondary: {
                    DEFAULT: "#8b5cf6", // violet-500
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#10b981", // emerald-500
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "#ef4444", // red-500
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#27272a", // zinc-800
                    foreground: "#a1a1aa", // zinc-400
                },
                border: "#27272a", // zinc-800
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.3s ease-in-out",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                }
            },
        },
    },
    plugins: [],
}
