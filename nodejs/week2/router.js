const express = require("express");
const { searchQ, GETId, GETsearch } = require("./controllers/controller");

const router = express.Router();

// POST /search
router.post("/search", postQ)
// GET /search
router.get("/document/:id", GETId)
//GET /documents/:id
router.get("/search", GETsearch);

module.exports = router;