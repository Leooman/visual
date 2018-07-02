module.exports = function(){
  var faker =require("faker/locale/zh_CN");
  var _ = require("lodash");
  return {
    people: _.times(100,function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        address: faker.address.city()
      }
    }),
    news: _.times(100,function(n){
      return {
        id:n,
        title:faker.random.words(),
        views:faker.random.number(),
        images:faker.random.image()
      }
    })
  }
}