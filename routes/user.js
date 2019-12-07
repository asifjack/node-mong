const express=require('express');
let userController=require('../controllers/userController');
let routes=express.Router();

routes.post('/create',userController.createUser);
routes.get('/',userController.getUser);
routes.get('/:id',userController.getUserById);
routes.delete('/:id',userController.deleteById);
routes.get('/search/:query',userController.search);
routes.post('/permission',userController.permision);

module.exports=routes;