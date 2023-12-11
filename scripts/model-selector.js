var modelBGImagePaths = [
    '../images/Home/car-selector-backgrounds/GH_BG.jpg',
    '../images/Home/car-selector-backgrounds/GRECALE_BG.jpg',
    '../images/Home/car-selector-backgrounds/Hp-Model-Carousel-GT.png',
    '../images/Home/car-selector-backgrounds/LEV_BG.jpg',
    '../images/Home/car-selector-backgrounds/MC20_background_1920x1080.jpg',
    '../images/Home/car-selector-backgrounds/MC20_CIELO_BG.jpg',
    '../images/Home/car-selector-backgrounds/QP_BG.jpg'
    // Add more paths as needed
];

var modelHeaderValues = {
    granTurismo: "The Others Just Travel",
    grecale: "Everyday exceptional",
    ghibli: "You're not like everyone else",
    levante: "The Maserati of SUVs",
    quattroporte: "An icon of Italian elegance",
    mc20: "The first of its kind",
    mc20cielo: "Beyond the Sky"
};

var modelParagraphValues = {
    granTurismo: "Also available in   BEV",
    grecale: "Also available in   HYBRID",
    ghibli: null,
    levante: "Also available in   HYBRID",
    quattroporte: null,
    mc20: null,
    mc20cielo: null
};

var modelButtonValues = {
    granTurismo: "Discover Gran Turismo",
    grecale: "Discover Grecale",
    ghibli: "Discover Ghibli",
    levante: "Discover Levante",
    quattroporte: "Discover Quattroporte",
    mc20: "Discover MC20",
    mc20cielo: "Discover MC20 Cielo"
};


const modelBackground = document.querySelector("main section:nth-of-type(2) > img");
const modelHeading = document.querySelector("main section:nth-of-type(2) section h3");
const modelParagraph = document.querySelector("main section:nth-of-type(2) section p");
const modelButton = document.querySelector("main section:nth-of-type(2) section a");

function Startup() {
    modelBackground.src = modelBGImagePaths[2];
    modelHeading.innerHTML = modelHeaderValues.granTurismo;
    modelParagraph.innerHTML = modelParagraphValues.granTurismo;
    modelButton.innerHTML = modelButtonValues.granTurismo;
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
        boxElement0 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(1)");
        boxElement1 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(2)");
        boxElement2 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(3)");
        boxElement3 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(4)");
        boxElement4 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(5)");
        boxElement5 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(6)");
        boxElement6 = document.querySelector("main section:nth-of-type(2) ul li:nth-of-type(7)");

        createObservers()
    },
    false,
);

function createObservers() {
    for (let i = 0; i < modelBGImagePaths.length; i++) {
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
            case 3:
                observer = new IntersectionObserver(handleIntersect3, options);
                observer.observe(boxElement3);
                break;
            case 4:
                observer = new IntersectionObserver(handleIntersect4, options);
                observer.observe(boxElement4);
                break;
            case 5:
                observer = new IntersectionObserver(handleIntersect5, options);
                observer.observe(boxElement5);
                break;
            case 6:
                observer = new IntersectionObserver(handleIntersect6, options);
                observer.observe(boxElement6);
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

function handleIntersect0(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[2];
            modelHeading.innerHTML = modelHeaderValues.granTurismo;
            modelParagraph.innerHTML = modelParagraphValues.granTurismo;
            modelButton.innerHTML = modelButtonValues.granTurismo;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect1(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[1];
            modelHeading.innerHTML = modelHeaderValues.grecale;
            modelParagraph.innerHTML = modelParagraphValues.grecale;
            modelButton.innerHTML = modelButtonValues.grecale;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect2(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[0];
            modelHeading.innerHTML = modelHeaderValues.ghibli;
            modelParagraph.innerHTML = modelParagraphValues.ghibli;
            modelButton.innerHTML = modelButtonValues.ghibli;
        } else {
            // Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect3(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[3];
            modelHeading.innerHTML = modelHeaderValues.levante;
            modelParagraph.innerHTML = modelParagraphValues.levante;
            modelButton.innerHTML = modelButtonValues.levante;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect4(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[6];
            modelHeading.innerHTML = modelHeaderValues.quattroporte;
            modelParagraph.innerHTML = modelParagraphValues.quattroporte;
            modelButton.innerHTML = modelButtonValues.quattroporte;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect5(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[4];
            modelHeading.innerHTML = modelHeaderValues.mc20;
            modelParagraph.innerHTML = modelParagraphValues.mc20;
            modelButton.innerHTML = modelButtonValues.mc20;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}

function handleIntersect6(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            modelBackground.src = modelBGImagePaths[5];
            modelHeading.innerHTML = modelHeaderValues.mc20cielo;
            modelParagraph.innerHTML = modelParagraphValues.mc20cielo;
            modelButton.innerHTML = modelButtonValues.mc20cielo;
        } else {
            //   Startup();
        }

        prevRatio = entry.intersectionRatio;
    });
}


window.onload = Startup();