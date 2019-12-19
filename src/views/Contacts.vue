<template>
  <div class="contacts">
    <h1>This is the contacts page</h1>
    <h1>Private vue state -> {{ this.$root.$data.privateVueState }}</h1>
    <h1>State from store -> {{ this.$root.$data.sharedState.state.message }}</h1>
    <ContactsTable />
  </div>
</template>

<script>

import ContactsTable from '@/components/ContactsTable';

/*eslint no-console: ["error", { allow: ["debug"] }] */
export default {
  name: 'contacts',

  components: {
    ContactsTable
  },

  created() {
    console.debug('here ' + this.$root.$data.sharedState.message)
    this.$root.$data.sharedState.setMessageAction('Fuck off')
    console.debug('here ' + this.$root.$data.sharedState.message)
  }


 
};
</script>
