import slider_1 from './assets/images/1.jpeg';
import identificador_1 from './assets/Identificador_1.png';
import categoria_poleras from './assets/images/categories/categoria_poleras.JPG';
import categoria_poleron from './assets/images/categories/categoria_poleron.JPG';
import categoria_apedido from './assets/images/categories/categoria_apedido.JPG';
import categoria_totebags from './assets/images/categories/categoria_totebags.JPG';
import product_1 from './assets/images/products/product_1.JPG';
import product_2 from './assets/images/products/product_2.JPG';

export const sliderItems = [
    {
        id: 1,
        img:slider_1,
        title:"NUEVO STOCK",
        bg: "1D1D1B",
    },
    {
        id: 2,
        img: "https://img.ltwebstatic.com/images3_pi/2021/05/19/16214084598bb76c072f8496e2ef81ac335af6707b_thumbnail_900x.webp",
        title:"Alo",
        bg: "1D1D1B",
    },
    {
        id: 3,
        img: "https://img.ltwebstatic.com/images3_pi/2022/05/24/16533858360d02158c1ca7df00d9082cdcd63b69ed_thumbnail_900x.webp",
        title:"",
        bg: "1D1D1B",
    }

];
export const categories = [
    {
        id:1,
        img: categoria_poleron,
        title: "POLERONES",
        color: "#000000",
        subTitle:""

    },
    {
        id:2,
        img: categoria_poleras,
        title: "POLERAS",
        color: "#000000"
    },
    {
        id:3,
        img: categoria_apedido,
        title: "A PEDIDO",
        color: "#000000",
        subTitle:""
    },
    {
        id:4,
        img: categoria_totebags,
        title: "TOTEBAGS",
        color: "#000000",
        subTitle:""
    },
    {
        id:5,
        img: identificador_1,
        title: "ENVIOS A TODO CHILE",
        color: "#fff",
        subTitle:"VÍA STARKEN Y ENVIOS PYME"
    }
];

export const ProductsList = [
    {
        id:1,
        img: product_1,
        title: "Polera asfafasf",
        price: "$15,990",
        category: "Polera",
        subcategory: "Anime"
    },
    {
        id:2,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990",
        poleron: "Poleron"
    },
    {
        id:3,
        img: product_1,
        title: "Polera asfafasf",
        price: "$15,990",
        category: "Poleron"
    },
    {
        id:4,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
    {
        id:5,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
    {
        id:6,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
    {
        id:7,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
    {
        id:8,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
    {
        id:9,
        img: product_2,
        title: "Polera asfafasf",
        price: "$15,990"
    },
];

export const instagram = [
    {
        id:1,
        img: product_1,

    },
    {
        id:2,
        img: product_2,
    },
    {
        id:3,
        img: product_2,
    },
    {
        id:4,
        img: product_2,
    },
    {
        id:5,
        img: product_2,
    },
    {
        id:6,
        img: product_2,
    },
];

export const FaqQuestions = [
    {
        id: 1,
        question:"¿Cuáles son los valores de los envios?",
        answer: "Si eres de Región, los envíos los maneja Starken según el peso de tu pedido y la ciudad en la que resides. Estos se harán x pagar cuando Starken entregue tu pedido. \nSi eres de Santiago, los envios tienen un valor de $3,000 con la excepción de las siguientes comunas: Colina, Lampa, Chicureo, Batuco, Padre Hurtado, Pirque. Noviciado, Las Vizcachas, Ciudad Satélite ($4,000) Calera de Tango, Peñaflor, Talagante, Buin, El Monte (4,500).",

    },
        {
        id:2,
        question:"¿La pintura se sale al momento de lavarla?",
        answer: "La pintura NO se sale al momento de lavarla si sigues nuestras instrucciones de lavado (ver). Si tienes alguna duda no dudes en preguntar en nuestro Instagram", 

    },
        {
        id:3,
        question:"¿Cuáles son los cuidados de las prendas?",
        answer: "Para un mejor cuidado de tu prenda te recomendamos lavar esta a mano a temperatura baja evitando los sectores que contengan pintura. \nNO utilices el centrifugado ni la secadora en tu prenda ya que esta podría ser dañada. \nNO pongas calor directamente en tu prenda. Si es necesario plancharla porfavor evita los sectores que contengan pintura.",

    },
        {
        id:4,
        question:"¿Cómo puedo hacer un pedido personalizado?",
        answer:"Puedes contactarnos directamente en nuestro Instagram o llenar nuestro formulario de cotización",
        enlace: "aquí."

    },
    {
        id:5,
        question:"¿Solo hacen poleras a pedido?",
        answer: "Hacemos poleras y polerones a pedido, sin embargo es mas probable tengamos poleras que polerones por lo que te pedimos siempre preguntar por nuetro stock.",
    },
    {
        id:6,
        question:"¿Cuáles son los métodos de pago?",
        answer:"Se puede pagar a través de transferencia bancaria y webpay, estas opciones te las daremos al momento de comprar la prenda que desees."
    },
    {
        id:7,
        question:"¿Hacen envíos a todo Chile?",
        answer:"Hacemos envios vía Starken para regiones y por envios pyme para los pedidos dentro de Santiago."

    },
    {
        id:8,
        question: "¿Hacen envíos Internacionales?",
        answer:"Por el momento no estamos realizando envios internacionales pero esperamos que pronto podamos hacerlo.",

    }
];

export const Dummy = [
    {
        id:1,
        img: [product_2, product_1, product_2],
        title:"POLERO SOUCHI",
        category: "Categoria",
        description:"loremipsum",
        price:"15990",
        sizes:["XL","L","S"]
    },
    

]