const filter_post = (post, user) => {
    for (let j = 0; j < post.length; j++) {
        post[j].count = 0;
        for (let i = 0; i < user[0].tag.length; i++) {
          for (let y = 0; y < post[j].tag.length; y++) {
            if (post[j].tag[y] == user[0].tag[i]) {
              post[j].count = parseInt(post[j].count) + 1;
            }
          }
        }
      }
      var sort = post.sort((a, b) => {
        return a.count - b.count;
      });
      sort = sort.filter(function (obj) {
        return obj.count !== 0;
      });
  
      sort.reverse();
      return sort;
  };

  module.exports = filter_post;