<template>
    <div>

        <form action="" class="form-horizontal">

            <legend>Flick us ya contact dets and will let you know when we are performing next</legend>

            <!-- https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-forms.php  -->
            <div class="row">
             <div class="form-group col">
                <label for="firstName">First name</label>
                <input type="text" id="firstName" placeholder="First name" class="form-control">
             </div>

            <div class="form-group col">
                <label for="lastName">Last name</label>
                <input type="text" id="lastName" placeholder="Last name" class="form-control">
            </div>
        </div>
        
          <div class="row">
            <div class="form-group col">
                <label for="country">Country</label>
                <select id="country" class="form-control">
                    <option value="New Zealand">New Zealand</option>
                    <option value="Austrialia">Austrialia</option>
                    <option value="United States">United States</option>
                </select>
            </div>

             <div class="form-group col">
                <label for="city">City</label>
                <input type="text" id="city" placeholder="City" class="form-control">
             </div>

              <div class="form-group col">
                <label for="zip">Zip</label>
                <input type="text" id="zip" placeholder="Zip / post code" class="form-control">
             </div>
          </div>


            <div class="form-group">
                <label for="emailAddress">Email address</label>
                <input type="email" id="emailAddress" placeholder="Email address" class="form-control" aria-describedby="emailHelp">
            </div>


            <input type="submit" id="submit" value="Submit" class="btn btn-primary">

        </form>
    </div>
</template>
<script>
export default {
    name: "ContactsForm"
}
</script>