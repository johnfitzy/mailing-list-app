<template>
  <div class="home">
    <ContactsForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactsForm from '@/components/ContactsForm'

export default {
  name: 'home',
  components: {
    ContactsForm
  }
}
</script>
