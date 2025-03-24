import express from 'express';
import { BuyProduct } from '../controllers/purchase/buyProduct';
import { purchaseList } from '../controllers/purchase/purchaseList';
import { deleteData } from '../controllers/purchase/delete_purchase';


const PurchaseRouter = express.Router();

PurchaseRouter.post("/create",BuyProduct);
PurchaseRouter.get("/view/:user_id",purchaseList);
PurchaseRouter.delete("/delete/:user_id/:product_id",deleteData);

export default PurchaseRouter;