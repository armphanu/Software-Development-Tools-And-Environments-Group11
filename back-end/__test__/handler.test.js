const request = require("supertest");
const app = require("../index")

const user_model = require('../models/user');
const post_model = require('../models/post')


describe("Test example", () => {
  const mockuserData = [{
    _id: {
      $oid: "620739c23436e1d3be63c7aa"
    },
    user_name: "String",
    password: "String",
    phone_number: "String",
    email: "String",
    first_name: "String",
    last_name: "String",
    tag: [],
    __v: 0
  },{
    _id: {
      $oid: "62073b323436e1d3be63c7b0"
    },
    user_name: "armphanu",
    password: "armzaz3612",
    phone_number: "0938955768",
    email: "armzazgakkub@gmail.com",
    first_name: "Phanupong",
    last_name: "Janlek",
    tag: [
     "หุ่ดี",
      "Sixpack",
      "ไม่ใช้อุปกรณ์",
      "test"
    ],
    "__v": 0
  },{
    _id: {
      $oid: "6208861abb4fed735f833e07"
    },
    user_name: "armzaz",
    password: "armzaz3612",
    phone_number: "0938955768",
    email: "armzazgakkub@gmail.com",
    first_name: "Phanupong",
    last_name: "Janlek",
    tag: [
     "หุ่ดี",
      "ไม่ใช้อุปกรณ์",
      "Sixpack"
    ],
    "__v": 0
  },{
    _id: {
      $oid: "6208884c22d45a0c4d11983a"
    },
    user_name: "String",
    password: "String",
    phone_number: "String",
    email: "String",
    first_name: "String",
    last_name: "String",
    tag: [],
    __v: 0
  },{
    _id: {
      $oid: "6208ef7df941d2411ac2af63"
    },
    user_name: "jamew0001",
    password: "jamew0001",
    phone_number: "jamew0001",
    email: "jamew0001",
    first_name: "jamew0001",
    last_name: "jamew0001",
    tag: [],
    __v: 0
  },{
    _id: {
      $oid: "620fd20a70232a41a01668e7"
    },
    user_name: "thanawat",
    password: "thanawat",
    phone_number: "thanawat",
    email: "thanawat",
    first_name: "thanawat",
    last_name: "thanawat",
    tag: [],
    __v: 0
  },{
    _id: {
      $oid: "620fd26570232a41a0166902"
    },
    user_name: "thanawat12",
    password: "thanawat12",
    phone_number: "thanawat12",
    email: "thanawat12",
    first_name: "thanawat12",
    last_name: "thanawat12",
    tag: [
     "อกกำลังกายลดต้นขา",
      "หุ่นดี"
    ],
    __v: 0
  }];
  const mockpostData = [{
    _id: {
      $oid: "6200d3e9b02913c059a3b656"
    },
    title: "ออกกำลังกายต้นขา",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack"
    ]
  },{
    _id: {
      $oid: "6201235db02913c059a3b661"
    },
    title: "เสริมกล้ามขา",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "บลาๆ",
      "ลดความอ้วน"
    ]
  },{
    _id: {
      $oid: "61b5ee8821659dd2a2bf38b4"
    },
    title: "อยากออกกำลังกาย",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "ออกกำลังกายลดต้นขา"
    ]
  },{
    _id: {
      $oid: "6200d4c5b02913c059a3b65c"
    },
    title: "อยากได้วิธีทั่วไป",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack",
      "หุ่นดี",
      "ลดความอ้วน"
    ]
  },{
    _id: {
      $oid: "6200d458b02913c059a3b65b"
    },
    title: "เสริมกล้าม",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack",
      "หุ่นดี"
    ]
  },{
    _id: {
      $oid: "6208f73240095f13f38874ed"
    },
    title: "เสริมหน้าอก",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack",
      "ไม่ใช้อุปกรณ์"
    ]
  },{
    _id: {
      $oid: "6208fba540095f13f38874ee"
    },
    title: "ออกกำลังกายมือใหม่",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack",
      "ไม่ใช้อุปกรณ์",
      "หุ่นดี"
    ]
  },{
    _id: {
      $oid: "620fd3602c4eb2f4354e9113"
    },
    title: "ออกกำลังกายมือใหม่",
    description: "ขอวิธีออกกำลังกายดีๆด้วยครับ",
    tag: [
      "Sixpack",
      "ไม่ใช้อุปกรณ์",
      "ออกกำลังกายลดต้นขา"
    ]
  }];
  const mock_user = jest.spyOn(user_model, 'findOne').mockImplementation(() => mockuserData);;
  const mock_post = jest.spyOn(post_model, 'findOne').mockImplementation(() => mockuserData);;
  test("GET /post/:id",  () => {
    request(app)
      .get("/post/62073b323436e1d3be63c7b0")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test("GET /user/:id",  () => {
    request(app)
      .get("/user/62073b323436e1d3be63c7b0")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // test("GET /login/armzaz", (done) => {
  //   request(app)
  //     .get("/login/String")
  //     .expect("Content-Type", /json/)
  //     .expect(200)
  //     .expect((res) => {
  //       console.log(res.body)
  //     })
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       return done();
  //     });
  // });
  
  // test("GET /login/armzaz", (done) => {
  //   request(app)
  //     .get("/login/String")
  //     .expect("Content-Type", /json/)
  //     .expect(200)
  //     .expect((res) => {
  //       console.log(res.body)
  //     })
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       return done();
  //     });
  // });
  // test("POST /register", (done) => {
    
  //   jest.spyOn(UserModel.prototype, 'save')
  //   .mockImplementationOnce(() => Promise.reject('fail update'))
    
  //   request(app)
  //     .post("/register")
  //     .expect("Content-Type", /json/)
  //     .send({
  //       user_name: 'this.username',
  //       password: 'this.password',
  //       phone_number: 'this.phone_number',
  //       email: 'this.email',
  //       first_name: 'this.first_name',
  //       last_name: 'this.last_name',
  //       tag:[]
  //     })
  //     .end((err, res) => {
  //     });
  // }, 60000);
});