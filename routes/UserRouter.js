const express = require('express');
const { Emergency } = require('../controllers/UserController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  

const upload = multer({ storage: storage })

const router = express.Router();

router.post('/emergency', upload.single('image'), Emergency)  

module.exports = router;