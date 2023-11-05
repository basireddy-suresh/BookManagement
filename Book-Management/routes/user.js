const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.get('/register',userController.getPage);
Router.get('/',userController.getLogin);
Router.get('/profile',userController.getProfile);
Router.post('/verify-login',userController.verifyLogin);
Router.post('/create-user',userController.createUser);
Router.post('/add-book',userController.addBook);
Router.get('/get-add-book',userController.getAddBook);
Router.get('/profile/get-books',userController.getBooks);
Router.get('/delete-book',userController.deleteBook);
Router.get('/search-books',userController.getSearchBook);

//get all books for admin
Router.get('/all-books',userController.getAllBooks);

//adding to cart

Router.post('/add-to-cart',userController.addToCart);

// my cart 
Router.get('/my-cart', userController.getMyCart);

//delete cart book
Router.get('/delete-cart-book',userController.deleteCartBook);

// user logout
Router.post('/logout', (req,res)=>{
    req.session.destroy(err =>{
        if(err){
            console.log('Error while logging out');
        }
        else{
            res.redirect('/');
        }
    });
}); 

//admin login
Router.post('/verify-admin-login',userController.verifyAdminLogin);

//get admin login page
Router.get('/admin-login',userController.adminLogin);

//get admin profile page
Router.get('/admin-profile',userController.getAdminProfile);

//get update profile page
Router.get('/get-update-profile',userController.getUpdateProfile);

//update profile logic
Router.post('/update-profile',userController.updateProfile);

//update quantity
Router.post('/update-quantity',userController.updateQuantity);

//update book
Router.post('/update-book',userController.updateBook);
module.exports = Router
