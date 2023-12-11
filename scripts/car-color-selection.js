
const carModel = document.querySelector("#car-color img:first-of-type");
const sectionBG = document.querySelector("#car-color");
const colorHeadingValue = document.querySelector("#car-color h2");

// 9 buttons
const RossoButton = document.querySelector("#rosso-button");
const BiancoButton = document.querySelector("#bianco-button");
const BluNButton = document.querySelector("#blu-n-button");
const BluEButton = document.querySelector("#blu-e-button");
const CorseButton = document.querySelector("#corse-button");
const CangianteButton = document.querySelector("#cangiante-button");
const MaraMattButton = document.querySelector("#mara-matt-button");
const MaraButton = document.querySelector("#mara-button");
const NeroButton = document.querySelector("#nero-button");

// 9 backgrounds
var carModelBackgroundColors = {
    Rosso: "#5B0104",
    Bianco: "#BEBEBE",
    BluN: "#0D1219",
    BluE: "#0A1D51",
    Corse: "#E5A600",
    Cangiante: "#7C7D7F",
    MaraMatt: "#E8DDCA",
    Mara: "#2C2B2C",
    Nero: "#0F0F0F"
};

var headerColor = {
    Rosso: "#fff",
    Bianco:"#000",
    BluN:"#fff",
    BluE:"#fff",
    Corse:"#000",
    Cangiante:"#fff",
    MaraMatt:"#000",
    Mara:"#fff",
    Nero:"#fff"
};

// 9 cars
var carModelIMGPaths = {
    Rosso: "../images/GranTurismo/color-select-models/gt-modena_rosso-granturismo_cal-black_imola-diamond.png",
    Bianco: "../images/GranTurismo/color-select-models/gt-modena_bianco-pastello_cal-black_imola-diamond.png",
    BluN: "../images/GranTurismo/color-select-models/gt-modena_blu-nobile_cal-black_imola-diamond.png",
    BluE: "../images/GranTurismo/color-select-models/gt-modena_blu-emozione_cal-black_imola-diamond.png",
    Corse: "../images/GranTurismo/color-select-models/gt-modena_giallo-corse_cal-black_imola-diamond.png",
    Cangiante: "../images/GranTurismo/color-select-models/gt-modena_grigio-cangiante_cal-black_imola-diamond.png",
    MaraMatt: "../images/GranTurismo/color-select-models/gt-modena_grigio-maratea-matte_cal-black_imola-diamond.png",
    Mara: "../images/GranTurismo/color-select-models/gt-modena_grigio-maratea-met_cal-black_imola-diamond.png",
    Nero: "../images/GranTurismo/color-select-models/gt-modena_nero-ribelle_cal-black_imola-diamond.png"
};

var carColorNames = {
    Rosso: "Rosso Granturismo - Fuoriserie",
    Bianco: "Bianco Pastello",
    BluN: "Blu Nobile",
    BluE: "Blu Emozione",
    Corse: "Giallo Corse - Primaserie launch edition",
    Cangiante: "Grigio Cangiante - Fuoriserie",
    MaraMatt: "Grigio Maratea Matte",
    Mara: "Grigio Maratea Metallico",
    Nero: "Nero Ribelle"
};



function Startup() {
    carModel.src = carModelIMGPaths.Nero;
    sectionBG.style.backgroundColor = carModelBackgroundColors.Nero;
    colorHeadingValue.innerHTML = carColorNames.Nero;
}

function changeColor(index) {
    switch (index) {
        // rosso
        case 0:
            carModel.src = carModelIMGPaths.Rosso;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Rosso;
            colorHeadingValue.innerHTML = carColorNames.Rosso;
            colorHeadingValue.style.color = headerColor.Rosso;
            break;

        // bianco
        case 1:
            carModel.src = carModelIMGPaths.Bianco;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Bianco;
            colorHeadingValue.innerHTML = carColorNames.Bianco;
            colorHeadingValue.style.color = headerColor.Bianco;
            break;

        // blu n
        case 2:
            carModel.src = carModelIMGPaths.BluN;
            sectionBG.style.backgroundColor = carModelBackgroundColors.BluN;
            colorHeadingValue.innerHTML = carColorNames.BluN;
            colorHeadingValue.style.color = headerColor.BluN;
            break;

        // blu e
        case 3:
            carModel.src = carModelIMGPaths.BluE;
            sectionBG.style.backgroundColor = carModelBackgroundColors.BluE;
            colorHeadingValue.innerHTML = carColorNames.BluE;
            colorHeadingValue.style.color = headerColor.BluE;
            break;

        // corse
        case 4:
            carModel.src = carModelIMGPaths.Corse;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Corse;
            colorHeadingValue.innerHTML = carColorNames.Corse;
            colorHeadingValue.style.color = headerColor.Corse;
            break;

        // cangiante
        case 5:
            carModel.src = carModelIMGPaths.Cangiante;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Cangiante;
            colorHeadingValue.innerHTML = carColorNames.Cangiante;
            colorHeadingValue.style.color = headerColor.Cangiante;
            break;

        // mara matt
        case 6:
            carModel.src = carModelIMGPaths.MaraMatt;
            sectionBG.style.backgroundColor = carModelBackgroundColors.MaraMatt;
            colorHeadingValue.innerHTML = carColorNames.MaraMatt;
            colorHeadingValue.style.color = headerColor.MaraMatt;
            break;

        // mara
        case 7:
            carModel.src = carModelIMGPaths.Mara;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Mara;
            colorHeadingValue.innerHTML = carColorNames.Mara;
            colorHeadingValue.style.color = headerColor.Mara;
            break;

        // nero
        case 8:
            carModel.src = carModelIMGPaths.Nero;
            sectionBG.style.backgroundColor = carModelBackgroundColors.Nero;
            colorHeadingValue.innerHTML = carColorNames.Nero;
            colorHeadingValue.style.color = headerColor.Nero;
            break;

    }
}
window.onload = Startup();

RossoButton.addEventListener("click", function () { changeColor(0); });
BiancoButton.addEventListener("click", function () { changeColor(1); });
BluNButton.addEventListener("click", function () { changeColor(2); });
BluEButton.addEventListener("click", function () { changeColor(3); });
CorseButton.addEventListener("click", function () { changeColor(4); });
CangianteButton.addEventListener("click", function () { changeColor(5); });
MaraMattButton.addEventListener("click", function () { changeColor(6); });
MaraButton.addEventListener("click", function () { changeColor(7); });
NeroButton.addEventListener("click", function () { changeColor(8); });
