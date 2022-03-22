const userModel = require('../schema/schema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class api {
    // registration data
    static registrationData = async (req, res) => {
        try {
            const { name, email, password, con_password } = req.body;
            const user = await userModel.findOne({ email: email })
            if (!user) {
                if (name && email && password && con_password) {
                    if (password === con_password) {
                        const hash = await bcrypt.hash(password, 10)
                        const data = new userModel({
                            name,
                            email,
                            password: hash,
                            con_password
                        })
                        await data.save();
                        res.send({ success: true, message: "successful registred" });
                    }
                    else {
                        res.send({ status: 'failed', message: 'password are not match' })
                    }
                }
                else {
                    res.send({ status: 'failed', message: 'all field are required' })
                }
            }
            else {
                res.send({ status: 'failed', message: 'email already exist' })
            }
        }
        catch (err) {
            res.send({ status: 'failed', message: 'sorry' })
        }
    }

    // login data
    static loginData = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = await userModel.findOne({ email: email });
                const pass = await bcrypt.compare(password, user.password)
                if (user.email == email && pass) {
                    const token = jwt.sign({ userId: user._id }, process.env.secret_key, { expiresIn: '5d' })
                    res.send({ success: true, token: token });
                }
                else {
                    res.send({ status: 'failed', message: 'email or password not match' })
                }
            }
            else {
                res.send({ status: 'failed', message: 'please email and password require' })
            }
        }
        catch (error) {
            res.send({ status: 'failed', message: 'sorry' })
        }
    }

    // change password
    static changePassword = async (req, res) => {
        try {
            const { password, con_password } = req.body;
            if (password && con_password) {
                if (password == con_password) {
                    const hash = await bcrypt.hash(password, 10)
                    const d = {
                        password: hash,
                        con_password
                    }
                    const update = await userModel.findByIdAndUpdate(req.params.id, d)
                    res.send("update successfully");
                }
                else {
                    res.send("password is not match")
                }
            }
            else {
                res.send('all field are required')
            }

        } catch (error) {
            res.send(error)
            console.log(error)
        }
    }
}

module.exports = api;