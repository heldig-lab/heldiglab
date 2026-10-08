module.exports = {
  content: {
    relative: true,
    files: ["../{breathflow,eyerest,focusflow,gentletrack,mmmath,tinnicalm,verdura}/index.html"],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#a4c9ff",
        "background": "#111318",
        "surface": "#111318",
        "on-surface": "#e2e2e9",
      },
      fontFamily: {
        headline: ["Manrope"],
        body: ["Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
