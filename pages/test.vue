<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formRef = ref<HTMLFormElement | null>(null)
const titleRef = ref<HTMLInputElement | null>(null)
const descriptionRef = ref<HTMLInputElement | null>(null)
const dataContent = ref<string | null>(null)

onMounted(() => {
  // Fetch existing data to check if it has been modified
  fetch('/api/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dataContent.value = JSON.stringify(data, null, 2)
    })
    .catch((error) => {
      console.error('Error:', error)
    })

  if (formRef.value) {
    formRef.value.addEventListener('submit', (event) => {
      event.preventDefault()

      if (titleRef.value && descriptionRef.value) {
        const title = titleRef.value.value
        const description = descriptionRef.value.value

        const data = { title, description }

        fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            alert('Data saved successfully')
            // Fetch the updated data to check if it has been modified
            return fetch('/api/data', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
          })
          .then((response) => response.json())
          .then((data) => {
            dataContent.value = JSON.stringify(data, null, 2)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
    })
  }
})
</script>

<template>
  <h1>Modify DataCard</h1>
  <form id="dataCardForm" ref="formRef">
    <h2>{{ dataContent }}</h2>
    <label for="title">Title:</label>
    <input id="title" ref="titleRef" type="text" name="title" /><br /><br />
    <label for="description">Description:</label>
    <input id="description" ref="descriptionRef" type="text" name="description" /><br /><br />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
