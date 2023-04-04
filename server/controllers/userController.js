import User from "../models/userSchema.js";

//getSingle User email
export const getUser = (req, res) => {
  try {
    const { email } = req.body;
    res.status(202).send(email);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const register = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const validEmail = await User.findOne({ email: req.body.email });
    console.log(validEmail);

    if (!validEmail) {
      const newUser = await User.create({
        email: email,
        userName: userName,
        password: password,
      });
      res.status(201).send(newUser);
    } else {
      res.status(403).json({ message: "This email is already use " });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//login
export const login = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const user = await User.findOne({
      email: req.body.email,
    });
    console.log(user);

    if (!user) {
      res.status(404).json({ message: "User did not exist" });
    } else if (user.password !== req.body.password) {
      res.status(403).json({ message: "Email or Password wrong" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
