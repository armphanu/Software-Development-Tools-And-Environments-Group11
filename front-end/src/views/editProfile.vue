<template>
  <div class="EditProfile">
    <div class="container">
      <div class="col">
        <center>
        <img
          src="https://www.img.in.th/images/fbdc8860b6fc58a37befa97de1765c64.png"
          width="200"
          height="200"
          class="rounded"
          alt=""
        />
        <br/><br/>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Username</span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Sex</span>
          <input
            type="text"
            class="form-control"
            placeholder="Sex"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Height</span>
          <input
            type="text"
            class="form-control"
            placeholder="Height"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Weight</span>
          <input
            type="text"
            class="form-control"
            placeholder="Weight"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Password</span>
          <input
            type="text"
            class="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">โรคประจำตัว</span>
          <textarea class="form-control" aria-label="โรคประจำตัว"></textarea>
        </div>
        <br />
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
          @change="onChange($event)"
        >
          <option value="ลดความอ้วน">ลดความอ้วน</option>
          <option value="หุ่นดี">หุ่นดี</option>
          <option value="Sixpack">Sixpack</option>
          <option value="ไม่ใช้อุปกรณ์">ไม่ใช้อุปกรณ์</option>
        </select><br/>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Custom tag</span>
          <input
            type="text"
            class="form-control"
            placeholder="Custom tag"
            aria-label="Custom tag"
            aria-describedby="basic-addon1"
            v-model="customtag"
          />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="confirmcustom">เพิ่ม</button>
        </div>

        <button type="button" class="btn btn-sm btn-danger"
          v-for="(value, index) in tag"
          :key="index"
          @click="cancletag(index)"
        >
          <font size="1">{{ value }}</font>&nbsp;<b>x</b>
        </button>
        <br/><br/>
        <button type="button" class="btn btn-primary" @click="Change">
          Change
        </button>
        </center>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      tag: [],
      customtag: "",
    };
  },

  methods: {
    onChange(event) {
      this.tag.push(event.target.value);
    },
    cancletag(index) {
      console.log(index);
      this.tag.splice(index, 1);
    },
    confirmcustom() {
      function isEmpty(str) {
        return str.replace(/^\s+|\s+$/g, '').length == 0;
       }

      if(isEmpty(this.customtag)){
        alert("input the customtag")
      }
      else if(this.customtag.length > 20){
        alert("customtag must be 20 character")
      }else{
      this.tag.push(this.customtag);}


    },
  },
};
</script>
