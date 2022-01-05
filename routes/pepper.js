const express = require('express');
const pepperCtrl = require('../controllers/pepper');
const router = express.Router();
// in routes/pepper.js
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get('/', auth,pepperCtrl.getAllPepper);
router.post('/',auth, multer, pepperCtrl.createSauce);
router.get('/:id',auth, pepperCtrl.getOneSauce);
router.put('/:id', auth, multer, pepperCtrl.modifySauce);
router.delete('/:id',auth, pepperCtrl.deleteSauce);
router.post('/:id/like', auth, pepperCtrl.likeOrNot);
module.exports = router;