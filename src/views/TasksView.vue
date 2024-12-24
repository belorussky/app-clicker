<template>
  <div class="text-content">
    <h1>Your tasks</h1>
    <h3>Loading tasks...</h3>
    <ul class="list">
      <li class="list-item">
        Subscribe to telegram

        <span>
          <a target="_blank" class="list-btn"> 50 </a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import supabase from '@/services/supabase'

// onMounted(async () => {
  // supabase.from('tasks').select('*').then(({ data }) => {
  //   console.log(data)
  // })
// })
</script>
