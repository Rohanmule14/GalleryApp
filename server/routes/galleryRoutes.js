import express from "express";
import multer from "multer";
import galleryController from "../controllers/galleryController.js";
const router = express.Router();

const galleryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/upload/`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: galleryStorage });

router.post(
  "/upload/image",
  upload.single("image"),
  galleryController.uploadImage
);
router.post("/add/category", galleryController.addCategory);
router.get("/get/allcategories", galleryController.allCategories);
router.get("/get/allimages", galleryController.allImages);
router.get("/get/singleimage", galleryController.singleImage);

export default router;
