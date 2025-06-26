// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#008080",
            secondary: "#FF6B6B",
            accent: "#FFC300",
            background: "#FAFAFA",
            surface: "#F0F0F5",
            success: "#2ECC71",
            warning: "#F39C12",
            error: "#E74C3C",
          },
        },
        
      },
    },
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
