import { sql } from "../config/DataBase.js"

export const getAllProperties=async (req,res)=>{
        try {
                const Properties=await sql`
                SELECT * FROM Properties
                ORDER BY created_at DESC
                `;
                res.status(200).json({
                        success:true,
                        data:Properties
                })
        } catch (error) {
              res.status(500).json({
                success:false,
                message:"Internal Server Error"
              }) 
        }
}

export const getProperty=async (req,res)=>{
        const {id}=req.params;
        try {
               const Property=await sql`
               SELECT * FROM Properties WHERE id=${id}
               ` ;
               res.status(200).json({
                success:true,
                data:Property[0]
               })
        } catch (error) {
                res.status(500).json({
                        success:false,
                        message:"Internal Server Error"
                      }) 
        }
}

export const createProperty=async (req,res)=>{
        const {title,description,location,price,image}=req.body;
        if(!title||!description ||!location || !price || !image){
                res.status(400).json({
                        success:false,
                        message:"All Fields are Required"
                });
        }
        try {
                const newProperty = await sql`
                    INSERT INTO Properties (title,description, location, price, image)
                    VALUES (${title},${description},${location}, ${price}, ${image})
                    RETURNING *
                `;
                
                res.status(201).json({
                    success: true,
                    data: newProperty[0]
                });
            } catch (error) {
                res.status(500).json({
                  success:false,
                  message:"Internal Server Error"
                })    
        }
}

export const updatePropert = async (req, res) => {
        const { id } = req.params;
        const {title,description,location,price,image}=req.body;
        try {
            const updatedProperty = await sql`
                UPDATE Properties
                SET title=${title},description=${description},location=${location}, price=${price}, image=${image}
                WHERE id=${id}
                RETURNING *
            `;
            if (updatedProperty.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Property not Found"
                });
            }
            res.status(200).json({
                success: true,
                data: updatedProperty[0]
            });
        } catch (error) {
            console.log("Error updating Property:", error); // Better error logging
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    };

export const deleteProperty=async (req,res)=>{
        const {id}=req.params;
        try {
               const deletedProperty= await sql`
                DELETE FROM Properties 
                WHERE id = ${id}
                RETURNING *
                `
                if(deletedProperty.length===0){
                        res.status(404).json({
                                success:false,
                                message:"Property not Found"
                        })
                }
                res.status(200).json({
                        success:true,
                        message:"Property deleted successfully!!!",
                        data:deletedProperty[0]
                })
        } catch (error) {
                console.log("error") 
                res.status(500).json({
                  success:false,
                  message:"Internal Server Error"
                }) 
        }
}
