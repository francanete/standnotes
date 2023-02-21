import multer from "multer";
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, "avatar-" + Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });
