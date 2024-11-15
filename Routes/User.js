const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuth = require('../Middleware/isAuth');
const { registerValidations,validator } = require('../Middleware/Validator');

router.post('/register',userController,registerValidations(),validator,register);
router.post('/login', userController.login);
router.delete('/delete/:_id', userController.deleteUser); 
router.put('/reset-password/:_id', userController.resetPassword); 
router.post("/current",isAuth)

module.exports = router;
