var express = require("express");
var router = express.Router();
var axios = require("axios");
var productionConfig = require("../config/production.config");

var getConfig = {
  method: "get",
  url: null,
  headers: {
    login_token: null,
  },
};

// 출입그룹권한 조회(전체목록)
router.get("/", async (req, res, next) => {
  getConfig.url = productionConfig.API_URL + req.originalUrl;
  getConfig.headers.login_token = req.headers.login_token;

  await axios(getConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;
