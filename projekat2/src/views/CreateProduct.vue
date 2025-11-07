<script setup lang="ts">
import  {ref} from 'vue'

const name = ref('')
const amount = ref(0)
const price = ref(0)
const category = ref('')
</script>

<template>
  <main>
    <h1> Create product! </h1>
    <form>
      <div>
        <label>Product Name</label>
        <input v-model="name" type="text" required>
      </div>
      <div>
        <label>Amount</label>
        <input v-model.number="amount" type="number" required>
      </div>
      <div>
        <label>Price:</label>
        <input v-model.number="price" type="number" required>
      </div>
      <div>
        <label>Price:</label>
        <input v-model.number="price" type="number" required>
      </div>
    </form>
  </main>
</template>
