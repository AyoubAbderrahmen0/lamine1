const user = require("../Models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { userName, email, password, age, phone } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "Email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({ userName, email, password: hashedPassword, age, phone });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.status(200).send({ msg: "User registered successfully!", newUser, token });
  } catch (error) {
    res.status(500).send({ msg: "Error on register", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await user.find({ email });

    if (!foundUser[0]) {
      return res.status(400).send({ msg: "Email or password invalid!" });
    } else {
      const checkedPassword = await bcrypt.compare(password, foundUser[0].password);
      if (!checkedPassword) {
        return res.status(400).send({ msg: "Email or password invalid!" });
      } else {
        const token = jwt.sign({ _id: foundUser[0]._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).send({ msg: "Login successfully", foundUser, token });
      }
    }
  } catch (error) {
    res.status(500).send({ msg: "Error on login", error });
  }
};

// Suppression d'un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;

    await User.deleteOne({ _id });

    res.status(200).send({ msg: "User deleted successfully!" });
  } catch (error) {
    res.status(500).send({ msg: "Error deleting user", error });
  }
};

// Réinitialisation du mot de passe
exports.resetPassword = async (req, res) => {
  try {
    const { _id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).send({ msg: "New password is required!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await User.updateOne({ _id }, { $set: { password: hashedPassword } });

    res.status(200).send({ msg: "Password updated successfully!" });
  } catch (error) {
    res.status(500).send({ msg: "Error on updating password", error });
  }
};



