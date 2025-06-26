<template>
    <v-app>
      <!-- App bar -->
       <Header/>
      <v-main>
        <v-container fluid>
          <slot/> 
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer app>
        <span class="text-center">© 2023 Huevang</span>
      </v-footer>
    </v-app>
</template>
