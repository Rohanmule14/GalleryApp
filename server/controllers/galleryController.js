import gallery from "../models/gallery.js";
import category from "../models/category.js";

class galleryController {
  static uploadImage = async (req, res) => {
    const { category } = req.body;
    try {
      if (category) {
        const addImage = new gallery({
          name: req.file.filename,
          category: category,
        });
        const savedImage = await addImage.save();
        if (savedImage) {
          return res.status(200).json({ message: "file upload successfully!" });
        } else {
          return res.status(400).json({ message: "error saving file!" });
        }
      } else {
        return res.status(400).json({ message: "category is mandatory!" });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  static addCategory = async (req, res) => {
    const { name } = req.body;
    try {
      if (name) {
        const newCategory = new category({
          name: name,
        });
        const savedCategory = await newCategory.save();
        if (savedCategory) {
          return res
            .status(200)
            .json({ message: "category saved successfully!" });
        } else {
          return res.status(400).json({ message: "error saving category!" });
        }
      } else {
        return res.status(400).json({ message: "name is required!" });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
  static allCategories = async (req, res) => {
    try {
      const fetchAllCategories = await category.find({});
      if (fetchAllCategories !== {}) {
        return res.status(200).json(fetchAllCategories);
      } else {
        return res.status(400).json({ message: "No Categories defined!" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static allImages = async (req, res) => {
    try {
      const fetchAllImages = await gallery.find({});
      if (fetchAllImages !== {}) {
        return res.status(200).json(fetchAllImages);
      } else {
        return res.status(400).json({ message: "No Images Found!" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static singleImage = async (req, res) => {
    const { category } = req.query;
    try {
      if (category) {
        const singleImage = await gallery.find({ category });
        return res.status(200).json(singleImage);
      } else {
        return res.status(400).json({ message: "category is required!" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default galleryController;
