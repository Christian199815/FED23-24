const carSelectionButton = document.querySelector("#car-specs-button");

const carSelectionPower = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(1) h5");
const carSelectionSpeed = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(2) h5");
const carSelectionAccel = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(3) h5");
const carSelectionTract = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(4) h5");
const carSelectionEngin = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(5) h5");
const carSelectionTorqu = document.querySelector("#car-specs ul:nth-of-type(2) li:nth-of-type(6) h5");

var buttonNameValues = {
    folgore: "DISCOVER GRANTURISMO FOLGORE",
    trofeo: "DISCOVER GRANTURISMO TROFEO",
    modena: "DISCOVER GRANTURISMO MODENA"
};

var folgoreValues = [
    '761HP',
    '325 km/h',
    '2.7 sec',
    'AWD',
    null,
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



function Startup() {
    carSelectionPower.innerHTML = folgoreValues[0];
    carSelectionAccel.innerHTML = folgoreValues[2];
    carSelectionEngin.innerHTML = folgoreValues[4];
    carSelectionSpeed.innerHTML = folgoreValues[1];
    carSelectionTorqu.innerHTML = folgoreValues[5];
    carSelectionTract.innerHTML = folgoreValues[3];

    carSelectionButton.innerHTML = buttonNameValues.folgore;
}

const numSteps = 20.0;

let boxElement0, boxElement1, boxElement2, boxElement3, boxElement4, boxElement5, boxElement6;
let prevRatio = 6.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener(
    "load",
    (event) => {
        boxElement0 = document.querySelector("#car-specs ul:nth-of-type(1) li:nth-of-type(1)");
        boxElement1 = document.querySelector("#car-specs ul:nth-of-type(1) li:nth-of-type(2)");
        boxElement2 = document.querySelector("#car-specs ul:nth-of-type(1) li:nth-of-type(3)");

        createObservers()
    },
    false,
);

function createObservers() {
    for (let i = 0; i < modelNames.length; i++) {
        let observer;

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: buildThresholdList(),
        };

        switch (i) {
            case 0:
                observer = new IntersectionObserver(handleIntersect0, options);
                observer.observe(boxElement0);
                break;
            case 1:
                observer = new IntersectionObserver(handleIntersect1, options);
                observer.observe(boxElement1);
                break;
            case 2:
                observer = new IntersectionObserver(handleIntersect2, options);
                observer.observe(boxElement2);
                break;
        }

    }


}

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 5;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}
//folgore
function handleIntersect0(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            carSelectionPower.innerHTML = folgoreValues[0];
            carSelectionAccel.innerHTML = folgoreValues[2];
            carSelectionEngin.innerHTML = folgoreValues[4];
            carSelectionSpeed.innerHTML = folgoreValues[1];
            carSelectionTorqu.innerHTML = folgoreValues[5];
            carSelectionTract.innerHTML = folgoreValues[3];

            carSelectionButton.innerHTML = buttonNameValues.folgore;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}
//trofeo
function handleIntersect1(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            carSelectionPower.innerHTML = trofeoValues[0];
            carSelectionAccel.innerHTML = trofeoValues[2];
            carSelectionEngin.innerHTML = trofeoValues[4];
            carSelectionSpeed.innerHTML = trofeoValues[1];
            carSelectionTorqu.innerHTML = trofeoValues[5];
            carSelectionTract.innerHTML = trofeoValues[3];

            carSelectionButton.innerHTML = buttonNameValues.trofeo;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

// modena
function handleIntersect2(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            carSelectionPower.innerHTML = modenaValues[0];
            carSelectionAccel.innerHTML = modenaValues[2];
            carSelectionEngin.innerHTML = modenaValues[4];
            carSelectionSpeed.innerHTML = modenaValues[1];
            carSelectionTorqu.innerHTML = modenaValues[5];
            carSelectionTract.innerHTML = modenaValues[3];

            carSelectionButton.innerHTML = buttonNameValues.modena;
        } else {
            // Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}



window.onload = Startup();