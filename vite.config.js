const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        art: resolve(__dirname, "art/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        projects: resolve(__dirname, "projects/index.html"),
      },
    },
  },
};
