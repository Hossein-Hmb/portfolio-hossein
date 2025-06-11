// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              marginTop: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "600",
              fontSize: theme("fontSize.3xl")[0],
              color: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.blue.600"),
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": { textDecoration: "underline" },
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "2px 4px",
              borderRadius: "4px",
              color: theme("colors.pink.600"),
            },
            "code::before, code::after": { content: '""' }, // hide back-ticks
            img: { borderRadius: theme("borderRadius.xl") },
          },
        },
        invert: {
          css: {
            h2: { color: theme("colors.gray.200") },
            a: { color: theme("colors.blue.400") },
            code: { backgroundColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
