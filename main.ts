/*
Copyright (C): UMI Academy
modified from Ninh.D.H
load dependency
"mbit": "file:../pxt-mbit"
*/


//% color="#a88532" weight=20 icon="\uf281"
namespace UMI_AI {

    //% blockId=mbit_MotorCtrl block="%motor %index"
    //% weight=4
    //% blockGap=10
    //% color="#a88532"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    //% expandableArgumentMode="enabled"
    export function MotorCtrl(motor: enMotor, index: Motor_State): void {
        
    }

    //% blockId=mbit_MotorCtrlSpeed block="%motor %index with speed %speed"
    //% weight=4
    //% blockGap=10
    //% speed.min=0 speed.max=255
    //% color="#a88532"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    //% expandableArgumentMode="enabled"
    export function MotorCtrlSpeed(motor: enMotor, index: MotorState, speed: number): void {
        
    }

    //% blockId=mbit_Servo_Car block="Set|%num|angle $value"
    //% weight=96
    //% blockGap=10
    //% color="#a88532"
    //% num.min=1 num.max=3 value.min=0 value.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
    //% value.shadow="protractorPicker"
    export function Servo_Car(num: enServo, value: number): void {

        // 50hz: 20,000 us
        let us = (value * 1800 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
    }
}
