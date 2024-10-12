const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const router = express.Router();

router.post('/', stuffCtrl.creatething);
router.put('/:id', stuffCtrl.modifything );
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/',stuffCtrl.getAllStuff);


module.exports = router;