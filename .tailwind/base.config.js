module.exports = {
  content: {
    relative: true,
    files: ["../privacy.html", "../terms.html", "../*/privacy.html", "../*/support.html"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
