const router = require("express").Router();


// auth middlewares
const auth_manager = require('../middlewares/auth_manager');


// functions from managers controllers
const {
    loginManager,
    logoutManager,
    authManager,
    addManagerForAdmins,
} = require('../controllers/managers_controller');


// function from users controller
const {
    getAllCustomersForManager,
    getCustomerByIdForManager,
    deleteUserByIdForManager,
    updateUserByIdForManager,
    addUserForManager
    
} = require('../controllers/users_controller');


// admins request
router.post('/admins/add-manager', addManagerForAdmins);


// managers requests
router.post('/managers/login', loginManager);
router.get('/managers/logout',auth_manager, logoutManager);
router.get('/managers/auth',auth_manager, authManager);
router.post('/add-user-for-managers', addUserForManager);
router.get('/customers-for-managers', getAllCustomersForManager);
router.get('/customer-by-id-for-manager/:user_id', getCustomerByIdForManager);
router.delete('/delete-user-for-managers/:user_id', deleteUserByIdForManager);
router.put('/update-user-for-managers/:user_id', updateUserByIdForManager);

// __________________

module.exports = router;
