<template>
  <div class="container">
    <div class="col">
      <div
        class="card text-center"
        v-for="(value, index) in postanduser"
        :key="index"
      >
        <div class="card-header">
          <h5 v-show="value.title != 'undefind'">{{ value.title }}</h5>
          <h6>{{ value.user_name }}</h6>
        </div>
        <div class="card-body" v-show="value.description != 'undefind'">
          {{ value.description }}
        </div>
        <div class="card-body">{{ value.email }} {{ value.phone_number }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postanduser: [],
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://localhost:3000/post/" + localStorage.getItem("id"))
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.postanduser.push(res.data[i]);
        }
      });
    axios
      .get("http://localhost:3000/user/" + localStorage.getItem("id"))
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.postanduser.push(res.data[i]);
        }
      });
  },
};
</script>
