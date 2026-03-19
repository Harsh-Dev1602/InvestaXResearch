import Admin from '../models/admin.model.js';
import bcrypt from 'bcrypt';
import createTokenAndSaveCookie from "../jwt/generateToken.js"

 const seedAdmin = async () => {   
   try {
     const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL }); 
     if (existingAdmin) {
       console.log('✅ @dmin already exists..');
       return;
      }
    const hashPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);

    const newAdmin = new Admin({
      fullname: 'HARSH DEV',
      email: process.env.ADMIN_EMAIL,
      password: hashPassword,
      role: '@dmin',
      verified: true
    });

    await newAdmin.save();
    console.log('🧑‍💼 Default @dmin created');
  } catch (error) {
    console.error('❌ Error:  default @dmin not created:', error.message);
  }
};

export default seedAdmin



// Log In API

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!user) {
      return res.status(400).json({ error: "Invalid user email id" });
    }
    else if(!isMatch){
      return res.status(400).json({ error: "Invalid user password" });
    }
     createTokenAndSaveCookie(user.id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role:user.role
      },

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "User not registered" });
  }
};

// Logout API
export const logout = async (req, res) => {
  try {
     res.clearCookie("Investa-x_key");
    res.status(201).json({ message: "User log out successfully.." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "User not log out.. " });
  }
};
