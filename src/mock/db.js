module.exports = function(){
  var faker =require("faker/locale/zh_CN");
  var _ = require("lodash");
  return {
    user: _.times(10,function (n) {
      return {
        id: n,
        user_name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        password: faker.internet.password()
      }
    }),
    login: {
      status:200
    }
  }
}