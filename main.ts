﻿/*
Copyright (C): UMI Academy
modified from Ninh.D.H
load dependency
"mbit": "file:../pxt-mbit"
*/


//% color="#a88532" weight=20 icon="\uf281"
namespace UMI_ML {
	let c = 0.008
    let n = 0
	let weights: number[] = []
	let inputs: number[] = []

	function activate(sum: number){
		if (sum > 0) {
    		return 1
    	} else {
    		return -1
    	}
	}

    //% blockId=perceptron block="Perceptron begin with|%ninputs|input"
    //% color="#a88532"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
	export function perceptron (ninputs: number) {
    	n = ninputs
    	for (let index = 0; index <= n; index++) {
        	inputs.push(1)
    	}
    	for (let index = 0; index <= n; index++) {
        	weights.push(Math.randomRange(-1000, 1000) / 1000)
    	}
	}

	//% blockId=training block="Training with desired value =|%desired|and guess value =|%guess|"
    //% color="#a88532"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
	export function train (desired: number, guess: number) {
    	let error = desired - guess
    	for (let index = 0; index <= n; index++) {
        	weights.push(c * error * inputs[index])
    	}
	}
}
