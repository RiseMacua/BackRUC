"use stric"
///////////////////////////////////////////
//AQUI DEBE IR LOS LOS GETS POST Y DEMAS //

const express=require("express");
const api=express.Router();
const RucControllerNumber=require("../controller/controller.rucNumber.js");
const RucControllerName=require("../controller/controller.rucName.js");
const auth = require('../middlewares/auth')
const userCtrl=require("../controller/user.js")
const Ruc = require("../model/modelRuc.js")


api.get("/number",RucControllerNumber.getRucForNumber);
api.get("/name",RucControllerName.getRucForName);
api.post("/pnumber",RucControllerNumber.postNewRegistry);




module.exports=api;