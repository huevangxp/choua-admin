<template>
    <div>
        <v-app-bar app color="primary" dark elevation="0">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
         <v-avatar
          size="60"
          color="white"
         >
          
         </v-avatar>
        <v-toolbar-title class="text-uppercase font-weight-bold">Huevang</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer app>
    <v-list nav dense>
      <v-list-item
        v-for="item in home"
        :key="item.title"
        :to="item.link"
        class="rounded-lg my-1"
        link
      >
        <template #prepend>
          <v-icon color="primary" class="me-2">{{ item.icon }}</v-icon>
        </template>

        <v-list-item-title class="text-body-1 font-medium">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
    </div>
</template>

<script setup lang="ts">

const home = ref([
{ title: 'Dashboard', link: '/', icon: 'mdi-view-dashboard' },
  { title: 'Profile', link: '/profile', icon: 'mdi-account-circle' },
  { title: 'Settings', link: '/settings', icon: 'mdi-cog' },
  { title: 'Help', link: '/help', icon: 'mdi-help-circle' },
  { title: 'Logout', link: '/logout', icon: 'mdi-logout' }
])

</script>

<style scoped>
.v-list-item {
  transition: background-color 0.3s;
}
.v-list-item:hover {
  background-color: #f0f0f0;
}
</style>