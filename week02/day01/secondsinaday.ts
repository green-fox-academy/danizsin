'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let timenowinSecs: number = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
let secsinaDay: number = 24 * 3600;
console.log(secsinaDay - timenowinSecs);