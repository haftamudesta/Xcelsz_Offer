import express from "express";
//import { Router } from "express";
import { getAllProperties,getProperty,createProperty,updateProperty,deleteProperty } from "../controllers/PropertyControllers.js";

const router=express.Router()

router.get("/",getAllProperties)
router.get("/:id",getProperty)
router.post("/create_property",createProperty)
router.put("/:id",updateProperty)
router.delete("/:id",deleteProperty)
export default router