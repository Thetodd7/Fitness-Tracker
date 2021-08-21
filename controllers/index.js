const router = require("express").Router();
const views = require("./view");
const apiRoutes = require("./api");
// connecting routes to the correct place

router.use("/", views);
router.use("/api", apiRoutes);

module.exports = router;