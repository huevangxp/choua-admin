<template>
    <div>
        <v-card color="white" class="rounded-lg" elevation="0">
            <v-card-title class="text-h5 font-weight-bold">
                <span>Position</span>
            </v-card-title>
            <v-card-text>

                <v-row>
                    <v-col cols="12" md="10">
                <v-text-field v-model="search" label="Position Name"></v-text-field>

                    </v-col>
                    <v-col cols="12" md="2">
                        <v-btn color="primary" block size="x-large" elevation="0"> <v-icon icon="mdi-plus"></v-icon> Create</v-btn>
                    </v-col>
                </v-row>
               
            </v-card-text>
          
        </v-card>
            <v-card color="white" class="rounded-lg" elevation="0 mt-4">
                <!-- add data position -->
                <v-data-table

                    :headers="headers"
                    :items="items"
                    :search="search"
                    :items-per-page="5"
                    class="elevation-0 bg-white "
                >
                    <template v-slot:item.action="{ item }">
                        <v-btn color="primary" size="small" elevation="0">Edit</v-btn>
                    </template>
                </v-data-table>
        </v-card>
    </div>
</template>

<script setup lang="ts">
const headers = ref([
    // add font-weight-bold to headers
    { title: 'No', key: 'no', 'font-weight': 'bold' },   
    { title: 'Name', key: 'name', 'font-weight': 'bold' },
    { title: 'Action', key: 'action', 'font-weight': 'bold' },
])
const items = ref([
    { no: 1, name: 'John Doe', action: 'Edit' },
    { no: 2, name: 'Jane Doe', action: 'Edit' },
])
const search = ref('')
</script>

<style>
.v-data-table-header {
  font-weight: bold;
}
</style>
