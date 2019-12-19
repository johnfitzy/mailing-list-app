<template>
  <div class="home">
    <h1>Private vue state -> {{ this.$root.$data.privateVueState }}</h1>
    <h1>State from store -> {{ this.$root.$data.sharedState.state.message }}</h1>
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
