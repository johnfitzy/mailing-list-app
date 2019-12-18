<template>
    <div>
        <h2>Input your contact details below</h2>
        <form action="">
            <label for="firstName">First name</label>
            <input type="text" id="firstName" placeholder="First name" class="form-control">

            <label for="lastName">Last name</label>
            <input type="text" id="lastName" placeholder="Last name" class="form-control">

            <label for="emailAddress">Email address</label>
            <input type="email" id="emailAddress" placeholder="Enter email" class="form-control" aria-describedby="emailHelp">
            
            <input type="submit" id="submit" value="Submit" class="btn btn-primary">
        </form>
    </div>
</template>

<script>
export default {
    name: "ContactsForm"
}
</script>