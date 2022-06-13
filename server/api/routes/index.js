const express = require('express');
const { UserResources } = require('../resources');
const router = express.Router();

router.use('/', UserResources);

module.exports = router;