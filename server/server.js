
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";

configDotenv();

import User from "./schema/UserSchema.js";

const PORT = 5002;

mongoose.connect("mongodb://127.0.0.1:27017/jwt_auth");

// Express
const app = express();
app.use(express.json());
app.use(cors());

async function main() {
    app.post("/register", async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username });

        if (user) {
            // User already exists
            res.status(400).json({ err_code: "USER_ALREADY_EXISTS", message: "User already exists" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        res.status(200).json({
            username: savedUser.username,
            dateJoined: savedUser.dateJoined,
            isStaff: savedUser.isStaff,
        });
    });

    app.post("/login", async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username });

        if (!user) {
            res.status(400).json({
                err_code: "USER_NOT_EXIST",
                message: "User doesn't exist",
            });
            return;
        }

        const userPassword = user.password;

        const isPasswordCorrect = await bcrypt.compare(password, userPassword);

        if (!isPasswordCorrect) {
            res.status(400).json({
                err_code: "USER_PASSWORD_INCORRECT",
                message: "Password is incorrect",
            });
            return;
        }

        const token = jwt.sign({
            username: user.username,
            dateJoined: user.dateJoined,
            isStaff: user.isStaff,
        }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({
            username: user.username,
            dateJoined: user.dateJoined,
            isStaff: user.isStaff,
            token
        });
    });

    app.post("/verify", async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1];

            const data = jwt.verify(token, process.env.JWT_SECRET);

            res.status(200).json(data);
        } catch (e) {
            switch (e.name) {
                case "TokenExpiredError":
                    res.status(500).json({
                        err_code: "SESSION_EXPIRED",
                        message: "Session expired! Please log in again"
                    });
                    break;

                default:
                    res.status(400).json({
                        err_code: "INVALID_TOKEN",
                        message: "Invalid token!"
                    });
                    break;
            }
        }
    });
}

app.listen(PORT, () => {
    console.log("Server has started at PORT ", PORT);
});

main();
