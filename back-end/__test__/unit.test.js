// const sum = require("../function/sum");
const filter_post = require("../function/filterp_u");

const post_demo = [
    {
        "title":"อยากออกกำลังกาย",
        "description":"ขอวิธีออกกำลังกายดีๆด้วยครับ",
        "tag":["ออกกำลังกายลดต้นขา"]
    },
    {
        "title":"ออกกำลังกายต้นขา",
        "description":"ขอวิธีออกกำลังกายดีๆด้วยครับ",
        "tag":["Sixpack"]
    }
]
const user1 = [
    {
        "user_name":"String",
        "password":"String",
        "phone_number":"String",
        "email":"String",
        "first_name":"String",
        "last_name":"String",
        "tag":[]
    }
]
const user2 = [
    {
        "user_name":"String",
        "password":"String",
        "phone_number":"String",
        "email":"String",
        "first_name":"String",
        "last_name":"String",
        "tag":["Sixpack"]
    }
]

describe("filter suite", function() {
    test("Should add 2 positive numbers together and return the result", function() {
      expect(filter_post(post_demo, user1)).toEqual([]);
    });
    test("Should add 2 ", function() {
        expect(filter_post(post_demo, user2)).toEqual([
            {
                "title": "ออกกำลังกายต้นขา",
                "description": "ขอวิธีออกกำลังกายดีๆด้วยครับ",
                "tag": [
                    "Sixpack"
                ],
                "count": 1
            }
        ]);
      });
  });