import all_product from "./all_product";
import ethnicWearImg from "./images/explore_men.png"; // Add the image for Women Ethnic Wear
import womenImg from "./images/explore_women.png";
import kidsImg from "./images/explore_kids.png";
import westernWearImg from "./images/item21.jpg"; // Add the image for Western Wear
import bcImg1 from "./images/explore_bc_img1.svg";
import bcImg2 from "./images/explore_bc_img2.svg";
import bcImg3 from "./images/explore_bc_img3.svg";
// Add a new background image for Western Wear

// Filter for each category
const ethnicWearItemsLength = all_product.filter(item => item.category === "Women Ethnic Wear").length;
const womenItemsLength = all_product.filter(item => item.category === "Women").length;
const kidsItemsLength = all_product.filter(item => item.category === "Kids").length;
const westernWearItemsLength = all_product.filter(item => item.category === "Western Wear").length;

export const exploreData = [
  {
    id: 1,
    name: "Women Ethnic Wear",
    path: "/ethnic-wear",
    img: ethnicWearImg, // Image for Women Ethnic Wear
    bcImg: bcImg1,
    num: ethnicWearItemsLength, // Number of items in the Women Ethnic Wear category
  },
  {
    id: 2,
    name: "Women Categories",
    path: "/women",
    img: womenImg,
    bcImg: bcImg2,
    num: womenItemsLength,
  },
  {
    id: 3,
    name: "Best Sellers",
    path: "/kids",
    img: kidsImg,
    bcImg: bcImg3,
    num: kidsItemsLength,
  },
  {
    id: 4,
    name: "Western Wear",
    path: "/western-wear",
    img: westernWearImg, // Image for Western Wear

    num: westernWearItemsLength, // Number of items in the Western Wear category
  },
];
