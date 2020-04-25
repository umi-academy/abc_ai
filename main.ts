/*
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

	export enum enSensor {

        //% blockId="sensor1" block="SENSOR_1"
        sensor1 = 1,
        //% blockId="sensor2" block="SENSOR_2"
        sensor2 = 2,
        //% blockId="sensor3" block="SENSOR_3"
        sensor3 = 3,
    }

    export enum enAnaSensor {
        //% blockId="sensorana2" block="SENSOR_2"
        sensor2 = 2,
        //% blockId="sensorana3" block="SENSOR_3"
        sensor3 = 3,
    }
   
    //% blockId=mbit_ultrasonic_car block="read ultrasonic sensor port|%port|(cm)"
    //% color="#006400"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic_Car(port: enSensor): number {
    	let d;
    	if (port == enSensor.sensor1) {
        	pins.setPull(DigitalPin.P12, PinPullMode.PullNone);
        	pins.digitalWritePin(DigitalPin.P12, 0);
        	control.waitMicros(5);
        	pins.digitalWritePin(DigitalPin.P12, 1);
        	control.waitMicros(15);
        	pins.digitalWritePin(DigitalPin.P12, 0);
       		// read pulse
       		d = pins.pulseIn(DigitalPin.P13, PulseValue.High, 43200);
    	}
    	if (port == enSensor.sensor2) {
        	pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        	pins.digitalWritePin(DigitalPin.P14, 0);
        	control.waitMicros(5);
        	pins.digitalWritePin(DigitalPin.P14, 1);
        	control.waitMicros(15);
        	pins.digitalWritePin(DigitalPin.P14, 0);
       		// read pulse
       		d = pins.pulseIn(DigitalPin.P1, PulseValue.High, 43200);
    	}
    	if (port == enSensor.sensor3) {
        	pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
        	pins.digitalWritePin(DigitalPin.P15, 0);
        	control.waitMicros(5);
        	pins.digitalWritePin(DigitalPin.P15, 1);
        	control.waitMicros(15);
        	pins.digitalWritePin(DigitalPin.P15, 0);
       		// read pulse
       		d = pins.pulseIn(DigitalPin.P2, PulseValue.High, 43200);
    	}
        return  Math.floor(d / 58);
    }
}
