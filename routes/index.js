const express = require('express');
const router = express.Router();
const jefesRouter = require('../apiServices/jefes/routes/jefe.route')
const empleadosRouter = require('../apiServices/empleados/routes/empleado.route')


router.use('/jefe',jefesRouter);
router.use('/empleado',empleadosRouter);
module.exports = router;