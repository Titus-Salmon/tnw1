// import { Category } from "../../mongoModels/category";
const { Category } = require("../../mongoModels/category");
const express = require("express");
const router = express.Router();

// export async function get(req, res, next) {
//   console.log(`Object.keys(req)==> ${Object.keys(req)}`);
//   console.log(`req.url==> ${req.url}`);
//   console.log(`req.baseUrl==> ${req.baseUrl}`);
//   console.log(`req.originalUrl==> ${req.originalUrl}`);
//   console.log(
//     `JSON.stringify(req._parsedUrl)==> ${JSON.stringify(req._parsedUrl)}`
//   );
//   if (req.url === "//categories") {
//     const categoryList = await Category.find();
//     if (!categoryList) {
//       res.status(500).json({ success: false });
//     }
//     res.status(200).send(categoryList);
//     // res.json({ categoryList: categoryList });
//   } else {
//     const category = await Category.findById(req.params.id);
//     if (!category) {
//       res
//         .status(500)
//         .json({ message: "The category with the given ID was not found." });
//     }
//     console.log(`using search params`);
//     console.log(`req.params.id==> ${req.params.id}`);
//     res.status(200).send(category);
//   }
// }

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  // res.status(200).send(categoryList);
  res.json(categoryList);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res
      .status(500)
      .json({ message: "The category with the given ID was not found." });
  }
  res.status(200).send(category);
});

router.post("/", async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    });
    category = await category.save();

    if (!category)
      return res.status(400).send("the category cannot be created!");

    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon || category.icon,
      color: req.body.color,
    },
    { new: true }
  );

  if (!category) return res.status(400).send("the category cannot be created!");

  res.send(category);
});

router.delete("/:id", (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "the category is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
