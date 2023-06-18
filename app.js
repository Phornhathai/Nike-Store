const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id : 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                Img: "./img/air.png",
            },
            {
                code: "darkblue",
                Img: "./img/air2.png",
            },
        ],
    },
    {
        id : 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                Img: "./img/jordan.png",
            },
            {
                code: "darkblue",
                Img: "./img/jordan2.png",
            },
        ],
    },
    {
        id : 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                Img: "./img/blazer.png",
            },
            {
                code: "darkblue",
                Img: "./img/blazer2.png",
            },
        ],
    },
    {
        id : 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                Img: "./img/crater.png",
            },
            {
                code: "darkblue",
                Img: "./img/crater2.png",
            },
        ],
    },
    {
        id : 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                Img: "./img/hippie.png",
            },
            {
                code: "black",
                Img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");