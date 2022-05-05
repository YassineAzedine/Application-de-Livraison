exports.userSignUpValidator = (req, res, next) => {

    req.check('name', 'Name is required !').notEmpty();
    req.check('email', 'email is required !').isEmail().notEmpty();
    req.check('username', 'username is required !').notEmpty();
    req.check('password', 'password is required !').notEmpty()

        .isLength({ min: 6, max: 10 })
        .withMessage('Password must betwen 6 and to Caracters')

    const errors = req.validationErrors()
    if (errors) {
        return res.json({ error: errors[0].msg })
    }
    next()
}
exports.userSignInValidator = (req, res, next) => {

    req.check('username', 'username is required !').notEmpty();

    req.check('password', 'password is required !').notEmpty()

        .isLength({ min: 6, max: 10 })
        .withMessage('Password must betwen 6 and to Caracters')


    const errors = req.validationErrors()
    if (errors) {
        return res.json({ error: errors[0].msg })
    }



    next()
}