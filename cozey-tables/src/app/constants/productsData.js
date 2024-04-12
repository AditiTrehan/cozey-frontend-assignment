import MensaOakCT from "../../../public/images/MensaOak.JPG";
import MensaBlackCT from "../../../public/images/MensaBlack.JPG";
import MensaWalnutCT from "../../../public/images/MensaWalnut.JPG";
import StellaOakCT from "../../../public/images/StellaOak.JPG";
import StellaWalnutCT from "../../../public/images/StellaWalnut2.JPG";
import PlutoEspressoCT from "../../../public/images/PlutoCTEspresso.webp";
import StellaWalnutST from "../../../public/images/StellaSTWalnut.webp";
import StellaOakST from "../../../public/images/StellaOak.JPG";
import PlutoSTWalnut from "../../../public/images/PlutoSTWalnut.webp";
import StellaWalnutMU from "../../../public/images/stellaMU.webp";
import StellaOakMU from "../../../public/images/stellaMUOak.webp";
import SettaOakTS from "../../../public/images/StellaTSets.webp";

const productsData = [
  {
    category: "Coffee Tables",
    products: [
      {
        imgSrc: MensaOakCT,
        color: "Oak",
        colorCode: "#ddb586",
        productName: "Mensa Coffee Table",
        price: "$360",
      },
      {
        imgSrc: MensaBlackCT,
        color: "Black Wood",
        colorCode: "#0a0401",
        productName: "Mensa Coffee Table",
        price: "$360",
      },
      {
        imgSrc: MensaWalnutCT,
        color: "Walnut",
        colorCode: "#582f11",
        productName: "Mensa Coffee Table",
        price: "$360",
      },
      {
        imgSrc: StellaOakCT,
        color: "Oak",
        colorCode: "#ddb586",
        productName: "Stella Coffee Table - 1 Unit",
        price: "$210",
      },
      {
        imgSrc: StellaWalnutCT,
        color: "Walnut",
        colorCode: "#582f11",
        productName: "Stella Coffee Table - Set of 2",
        price: "$420",
      },
      {
        imgSrc: PlutoEspressoCT,
        color: "Espresso",
        colorCode: "#442109",
        productName: "Pluto Coffee Table",
        price: "$135",
      },
    ],
  },
  {
    category: "Side Tables",
    products: [
      {
        imgSrc: StellaWalnutST,
        color: "Walnut",
        colorCode: "#582f11",
        productName: "Stella Side Table",
        price: "$250",
      },
      {
        imgSrc: StellaOakST,
        color: "Oak",
        colorCode: "#ddb586",
        productName: "Stella Side Table",
        price: "$250",
      },
      {
        imgSrc: PlutoSTWalnut,
        color: "Walnut",
        colorCode: "#582f11",
        productName: "Pluto Side Table",
        price: "$85",
      },
    ],
  },
  {
    category: "Media Units",
    products: [
      {
        imgSrc: StellaWalnutMU,
        color: "Walnut",
        colorCode: "#582f11",
        productName: "Stella Media Unit - Set of 3",
        price: "$360",
      },
      {
        imgSrc: StellaOakMU,
        color: "Oak",
        colorCode: "#ddb586",
        productName: "Stella Media Unit - Set of 3",
        price: "$360",
      },
    ],
  },
  {
    category: "Table Sets",
    products: [
      {
        imgSrc: SettaOakTS,
        color: "Oak",
        colorCode: "#ddb586",
        productName: "Stella Table Sets",
        price: "$360",
      },
    ],
  },
];

export default productsData;
