var data = require("./database/fakeData");

const getUser = (req, res, next) => {
  var name = req.query.name;
  console.log(name);
  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i]);
    }
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
