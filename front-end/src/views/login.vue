<template>
  <div class="container">
    <div class="col">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Username</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="username"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Password</span>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="button" class="btn btn-success" @click="login">
        LOGIN
      </button>
      <p>
        <a>Forget Password?</a>&nbsp;<a>
          or <router-link to="/register">
            Create Account
          </router-link></a
        >
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
    };
  },

  methods: {
    login() {
      axios
        .get("http://localhost:3000/login/" + this.username, {})
        .then((response) => {
          console.log(response.data.length);
          if (response.data.length > 0) {
            this.$router.push({ name: "home" });
            console.log(response.data);
            localStorage.setItem("name", this.username);
            localStorage.setItem("id", response.data[0]._id);
          } else {
            alert("invalid username");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
