const carSelectionButton = document.querySelector("section:nth-of-type() a:first-of-type");

const carSelectionPower = document.querySelector("section:nth-of-type() ul li:nth-of-type(1)");
const carSelectionSpeed = document.querySelector("section:nth-of-type() ul li:nth-of-type(2)");
const carSelectionAccel = document.querySelector("section:nth-of-type() ul li:nth-of-type(3)");
const carSelectionTract = document.querySelector("section:nth-of-type() ul li:nth-of-type(4)");
const carSelectionEngin = document.querySelector("section:nth-of-type() ul li:nth-of-type(5)");
const carSelectionTorqu = document.querySelector("section:nth-of-type() ul li:nth-of-type(6)");



var folgoreValues = [
    '761HP',
    '325 km/h',
    '2.7 sec',
    'AWD',
    'none',
    '1350 Nm'
];

var trofeoValues = [
    '550HP',
    '320 km/h',
    '3.5 sec',
    'AWD',
    'V6',
    '660 Nm'
];

var modenaValues = [
    '490HP',
    '302 km/h',
    '3.9 sec',
    'AWD',
    'V6',
    '600 Nm'
];

var modelNames = [
    'FOLGORE',
    'TROFEO',
    'MODENA'
];


var currentCarSelectionIndex = 0;

function changeCarValues(currCar){

    switch(currCar)
    {
        case 0:
            carSelectionPower.style.value = folgoreValues[0];
    }

}