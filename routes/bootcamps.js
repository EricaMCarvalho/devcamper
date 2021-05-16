const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');
const asyncCatch = require('../middleware/asyncHandler');

const router = express.Router();

router.get('/', asyncCatch(getBootcamps));

router.get('/:id', asyncCatch(getBootcamp));

router.post('/', asyncCatch(createBootcamp));

router.put('/:id', asyncCatch(updateBootcamp));

router.delete('/:id', asyncCatch(deleteBootcamp));

module.exports = router;
