const controller = require("../controllers/rocket.controller");

module.exports = function (app) {

    app.get("/api/rockets", controller.getAllRockets);
    app.post("/api/rockets", controller.createRocket);
    app.put("/api/rockets/:rocketId", controller.updateRocket);
    app.delete("/api/rockets/:rocketId", controller.deleteRocket);
    app.get("/api/rockets/:rocketId", controller.getOneRocket);

}