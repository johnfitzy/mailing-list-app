<template>
  <div>
    <table class="table table-striped table-bordered">
      <caption>French for Rabbits fans</caption>
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Country</th>
          <th scope="col">City</th>
          <th scope="col">Zip code</th>
          <th scope="col">Email address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="contact.id" v-for="contact in contacts">
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.country }}</td>
          <td>{{ contact.city }}</td>
          <td>{{ contact.zip }}</td>
          <td>{{ contact.emailAddress }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

/*eslint no-console: ["error", { allow: ["debug"] }] */

import axios from "axios";

export default {
  name: "ContactsTable",

  data() {
    return {
      contacts: []
    };
  },

  created() {
    axios
      .get("https://my-json-server.typicode.com/johnfitzy/fake-users/users")
      .then(response => (this.contacts = response.data))
      .catch(error => console.debug("An error happened " + error));
  }
};
</script>