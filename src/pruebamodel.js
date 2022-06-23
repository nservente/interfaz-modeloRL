//import * as tf from '@tensorflow/tfjs';

//const express = require('express');
//const router = Router()
const tf = require('@tensorflow/tfjs');
//const { Router } = require('express');
require('@tensorflow/tfjs-node')
const model = require('./modelTF/model.json')

/*
const app = express()

async function main () {
    await app.listen(3001);
    console.log("server en port 3001")
}


router.get('/', (req,res) => {
    res.send(model)
})
*/

const MODEL_URL = model;

async function load_model() {
    let m = await tf.loadLayersModel(MODEL_URL)
    return m;
}

console.log("Cargando modelo")
let model_tf = load_model()
console.log("Modelo cargado..")


model_tf.then(function (res) {
    var tensor = tf.tensor1d([-1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1, 0])
    result =  res.predict(tensor).dataSync()
    console.log(result)
}, function(err){
    console.log(err);
})


