import userRoutes from "./user";
import supermarketRoutes from "./supermarket";
import productRoutes from "./product";
import shoppingListRoutes from "./list";
import productInstance from "./productInstance";
import shoppinglistproduct from "./shoppingListProductIns";
<<<<<<< HEAD
import category from "./category";
=======
>>>>>>> b317e87caa4e7ef4c0a79c17de019dc2dc2ab4e8
import leaderboardRoutes from './leaderboard';
import { Router } from "express";

const requestLogger = (req, res, next) => {
  console.log({ datetime: new Date().toUTCString(), body: req.body, params: req.params });
  next();
};

const router = Router();

router.use(requestLogger);

router.use(userRoutes);

router.use(supermarketRoutes);

router.use(productRoutes);

router.use(shoppingListRoutes);

router.use(productInstance);

router.use(shoppinglistproduct);

<<<<<<< HEAD
router.use(category);
=======
>>>>>>> b317e87caa4e7ef4c0a79c17de019dc2dc2ab4e8
router.use(leaderboardRoutes)

export default router;
