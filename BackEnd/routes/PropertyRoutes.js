import express from "express";
//import { Router } from "express";
import { getAllProperties,getProperty,createProperty,updatePropert,deleteProperty } from "../controllers/PropertyControllers.js";

const router=express.Router()

router.get("/properties",getAllProperties)
router.get("/properties/:id",getProperty)
router.post("/properties/create_property",createProperty)
router.put("/properties/:id",updatePropert)
router.delete("/properties/:id",deleteProperty)
export default router