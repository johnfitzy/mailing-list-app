<template>
  <div class="contacts">
    <h1>This is the contacts page</h1>
    <ContactsTable />
  </div>
</template>

<script>

import ContactsTable from '@/components/ContactsTable';


export default {
  name: 'contacts',

  components: {
    ContactsTable
  }
 
};
</script>
