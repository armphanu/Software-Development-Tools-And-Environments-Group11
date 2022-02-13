<template>
  <div class="container">
    <div class="col">
      <div v-for="(value, index) in post"
        :key="index" >
 
      <div class="card text-center">
        <div class="card-header">
          <h2>{{ value.title }}</h2>
        </div>
        <div class="card-body" v-show="value.description != 'undefind'">
          {{ value.description }}
        </div>
        <div class="card-footer">
          <h5 style="color:red ">Tag</h5>
          <span v-show="value.tag.length" v-for="(value1, index) in value.tag"
        :key="index + 'post tag'" style="color:blue ">{{value1}} <label v-if="index != value.tag.length -1">,</label></span>
          <label style="margin-left: 720px">post</label>
        </div>
        
      </div>
      <br>
      </div>
      <br>
        <div  v-for="(value, index) in user" :key="index + 'user'" >
        <div class="card text-center" >
        <div class="card-header">
          <h2>{{ value.user_name }}</h2>
        </div>
        <div class="card-body" v-show="value.description != 'undefind'">
          {{ value.email }} {{ value.phone_number }}
        </div>
        <div class="card-footer" >
           <h5 style="color:red ">Tag</h5>
          <span v-show="value.tag.length" v-for="(value1, index) in value.tag"
        :key="index + 'user tag'" style="color:blue ">{{value1}} <label v-if="index != value.tag.length -1">,</label></span>
           <label style="margin-left: 720px">user</label>
        </div>
      </div>
      <br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: [],
      user:[]
    };
  },
  methods: {},
  mounted() {
    axios
      .get("https://backend-exercise101.herokuapp.com/post/" + localStorage.getItem("id"))
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.post.push(res.data[i]);
        }
      });
    axios
      .get("https://backend-exercise101.herokuapp.com/user/" + localStorage.getItem("id"))
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.user.push(res.data[i]);
        }
      });
  },
};
</script>
