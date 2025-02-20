const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Contact', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(' Connected to MongoDB database: Contact');
}).catch((err) => {
    console.error(' MongoDB Connection Error:', err);
});

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mob: {
        type: Number,
        required: true,
        unique: true,
    },
    msg: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

// Test Route
app.get("/", (req, res) => {
    res.send(" App is Working");
});

// Register Route
app.post("/register", async (req, res) => {
    try {
        const { name, email,mob,msg } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already registered" });
        }

        const user = new User({ name, email,mob,msg });
        const result = await user.save();
        res.status(201).json({ message: "User registered successfully", user: result });

    } catch (error) {
        console.error(" Error in /register:", error);
        res.status(500).json({ error: "Something Went Wrong" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(` Server is running on https://localhost:${PORT}`);
});
