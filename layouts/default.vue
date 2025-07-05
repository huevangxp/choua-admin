<template>
    <v-app class="bg-surface">
      <!-- App bar -->
       <Header/>
      <v-main>
        <v-container>
          <slot/> 
        </v-container>
      </v-main>

     
    </v-app>
</template>


<style >
 *{
  font-family: 'Prompt', sans-serif;
 }
</style>
