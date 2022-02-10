<template>
  <div class="container">
    <div class="col">
      <img
        src="https://www.img.in.th/images/fbdc8860b6fc58a37befa97de1765c64.png"
        width="200"
        height="200"
        class="rounded"
        alt=""
      />
      <p>{{ this.username }}</p>
      <p>
        <a
          ><font size="2">
            <router-link to="/editProfile">
              Edit profile
            </router-link></font
          ></a
        >
      </p>
      <p><a>Follow : xxx</a></p>
      <button @click="logout">
        <a>
          <router-link to="/login">
            Logout
          </router-link></a
        >
      </button>
      <div class="card">
        <div class="card-header text-center">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              Title
            </div>
            <div class="col-4"><a href="">Edit</a> <a href="">del</a></div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">Test</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      username: "test01",
    };
  },
};
</script>

<style scoped></style>
