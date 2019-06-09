/* eslint-disable no-console */
module.exports = {
    signUp: async(req, res, next) => { 
        console.log("signUp")
    },
    signIn: async(req, res, next) => { 
        const loginInfo = {
            email: req.body.email,
            password: req.body.password
        };
        res.status(200).json({
            con_usr_msg: "Suceess",
            loginInfo: loginInfo
        });
    },
    secret: async(req, res, next) => { 
        console.log("secret")
    } 
};