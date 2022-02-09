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

export default {
  data() {
    return {
      postanduser: [{"title":"mockup","description":"mockup","email":"mockup","phone_number":"mockup"}],
    };
  },

};
</script>
