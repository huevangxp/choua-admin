<script setup lang="ts">
const items = ref([
  { title: 'All Teacher', count: 30 },
  { title: 'All Admin', count: 9 },
  { title: 'All Position', count: 5 },
  { title: 'All Meeting Room', count: 1000 },
  // add Admin block and admin active
  { title: 'Admin', count: 4 },
  { title: 'Admin Active', count: 5},
  
])
</script>

<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
        <v-card color="white" class="rounded-lg d-flex align-center justify-center" elevation="0" height="200">
       <div>
        <v-card-title class="d-flex justify-center">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="d-flex justify-center">
            <h1>{{ item.count }}</h1>
          </v-card-text>
       </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
