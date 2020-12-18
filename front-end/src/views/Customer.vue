<template>
  <div class="customer">
  <div class= "box">
    <div class = "input_form">
    <div class="box">
    <h3>Request an Appointment Today!</h3>
    <p>Our professional organizers offer one-on-one consultations and expert advice. We'll be there right with you every step of the way. Fill out the form below to take the next step in decluttering your life.  </p>
      <form>
        <input type="text" v-model="name" placeholder="Name"><br/>
        <input type="text" v-model="info" placeholder="Contact info"><br/>
        <input type="text" v-model="desc" placeholder="Description" width="500px"><br/>
        <input type="file" name="photo" @change="fileChanged"> (Optional)
        <br/>
        <!-- this is a comment-->
        <button type="submit" @click="submit">
            Submit Appointment Request
        </button>
    </form>

    </div>
    <img alt="organizer" src="../assets/organizing.jpg" height="400px">
    </div>
    </div>
  </div>
</template>

<style>
.input_form {
  margin-bottom:20px;
  display:flex;
  text-align:left;
  align-items:center;

  justify-content:center;
}
.box{

margin-left:200px;
margin-right:200px;
margin-top:25px;
margin-bottom:25px;

}
</style>
