const express = require("express");
const router = express.Router();
const { searchItems, getFullItemById } = require("./services");

router.get("/", async (req, res) => {
  const data = await searchItems(req.query.q);
  res.json({
    author: { name: "Facu", lastname: "Martinez" },
    categories: data.filters,
    items: data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: "Number",
        },
        picture: item.thumbnail,
        condition: item.condition,
        freeShipping: item.shipping.free_shipping,
      };
    }),
  });
});

router.get("/:id", async (req, res) => {
  const item = await getFullItemById(req.params.id);

  res.json({
    author: { name: "Facu", lastname: "Martinez" },
    item: {
      id: item.id,
      title: item.title,
      categories: item.category_id,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      freeShipping: item.shipping.free_shipping,
      soldQuantity: item.sold_quantity,
      description: item.description.plan_text,
    },
  });
});
module.exports = router;
