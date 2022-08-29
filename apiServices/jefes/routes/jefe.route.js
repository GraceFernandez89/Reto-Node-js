const {Router} = require('express');
const router = Router();
const jefeCtrl = require('../controllers/jefe.controller');

router.post('/crearJefe',jefeCtrl.crearJefe);
router.post('/login',jefeCtrl.login);


module.exports= router