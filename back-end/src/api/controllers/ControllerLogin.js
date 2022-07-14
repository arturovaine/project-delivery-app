require('../jwt');
require('dotenv').config();

// const { SECRET_KEY } = process.env;

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const { User } = require('../models');

const loginController = async (req, res) => {
    const { email, password } = req.body; 

    try {
        const registeredUser = await User.findOne({ where: { email, password } });

        if (registeredUser) {
            const token = jwtSign({ email, password }, SECRET_KEY);
            return res.status(200).json({ token });
    }
      } catch (err) {
        res.status(401).json({ code: 'Error', message: err.message });
      }
};

module.exports = {
  loginController,
};
