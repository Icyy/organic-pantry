import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ThemeProvider,
} from "@mui/material";
import NavBar from "../src/ui/navigation/NavBar";
import DetailsCard from "./ui/navigation/DetailsCard";
import theme from "./ui/theme";
import Banner from "./ui/Banner";

const data = [
  // Vegetables
  {
    id: 1,
    name: "Onion",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Onion",
  },
  {
    id: 2,
    name: "Potato",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Potato",
  },
  {
    id: 3,
    name: "Tomato",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Tomato",
  },
  {
    id: 4,
    name: "Parwal",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Parwal",
  },
  {
    id: 5,
    name: "Capsicum Green",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Capsicum+Green",
  },
  {
    id: 6,
    name: "Carrot",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Carrot",
  },
  {
    id: 7,
    name: "Cauliflower",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Cauliflower",
  },
  {
    id: 8,
    name: "Coconut Fresh Grated",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Coconut+Fresh+Grated",
  },
  {
    id: 9,
    name: "Dudhi (Bottle Gourd)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Dudhi+%28Bottle+Gourd%29",
  },
  {
    id: 10,
    name: "Beetroot",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Beetroot",
  },
  {
    id: 11,
    name: "Lady Finger (Bhindi)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Lady+Finger+%28Bhindi%29",
  },
  {
    id: 12,
    name: "Coriander Leaves",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Coriander+Leaves",
  },
  {
    id: 13,
    name: "Cucumber Green",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Cucumber+Green",
  },
  {
    id: 14,
    name: "Cucumber White Green",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Cucumber+White+Green",
  },
  {
    id: 15,
    name: "Curry Leaves",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Curry+Leaves",
  },
  {
    id: 16,
    name: "French Beans",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=French+Beans",
  },
  {
    id: 17,
    name: "Garlic Peeled (Large)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Garlic+Peeled+%28Large%29",
  },
  {
    id: 18,
    name: "Garlic Peeled (Small)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Garlic+Peeled+%28Small%29",
  },
  {
    id: 19,
    name: "Pumpkin Red Small",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Pumpkin+Red+Small",
  },
  {
    id: 20,
    name: "Green Chilli",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Green+Chilli",
  },
  {
    id: 21,
    name: "Green Peas Fresh",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Green+Peas+Fresh",
  },
  {
    id: 22,
    name: "Lemon Large",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Lemon+Large",
  },
  {
    id: 23,
    name: "Fenugreek Leaves (Methi)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Fenugreek+Leaves+%28Methi%29",
  },
  {
    id: 24,
    name: "Mint (Pudina)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Mint+%28Pudina%29",
  },
  {
    id: 25,
    name: "Raddish (Moola)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Raddish+%28Moola%29",
  },
  {
    id: 26,
    name: "Snake Gourd",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Snake+Gourd",
  },
  {
    id: 27,
    name: "Spinach",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Spinach",
  },
  {
    id: 28,
    name: "Sweet Potato",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Sweet+Potato",
  },
  {
    id: 29,
    name: "Turai (Ridge Gourd)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Turai+%28Ridge+Gourd%29",
  },
  {
    id: 30,
    name: "Brinjal (Long)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Brinjal+%28Long%29",
  },
  {
    id: 31,
    name: "Baingan (Bharta)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Baingan+%28Bharta%29",
  },
  {
    id: 32,
    name: "Brinjal (Bharvaan)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Brinjal+%28Bharvaan%29",
  },
  {
    id: 33,
    name: "Brinjal (Light Green & Long)",
    category: "Vegetables",
    image:
      "https://via.placeholder.com/150?text=Brinjal+%28Light+Green+%26+Long%29",
  },
  {
    id: 34,
    name: "Cluster Beans (Guar)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Cluster+Beans+%28Guar%29",
  },
  {
    id: 35,
    name: "Baby Spinach",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Spinach",
  },
  {
    id: 36,
    name: "Chayote",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Chayote",
  },
  {
    id: 37,
    name: "Drumstick (Shevga)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Drumstick+%28Shevga%29",
  },
  {
    id: 38,
    name: "Cabbage",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Cabbage",
  },
  {
    id: 39,
    name: "Baby Cabbage",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Cabbage",
  },
  {
    id: 40,
    name: "Colocasia (Arvi)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Colocasia+%28Arvi%29",
  },
  {
    id: 41,
    name: "Bitter Gourd (Karela)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Bitter+Gourd+%28Karela%29",
  },
  {
    id: 42,
    name: "Coccinia (Tondali)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Coccinia+%28Tondali%29",
  },
  {
    id: 43,
    name: "Ridge Gourd (Turai)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Ridge+Gourd+%28Turai%29",
  },
  {
    id: 44,
    name: "Cowpea Beans (Chavalichi Sheng)",
    category: "Vegetables",
    image:
      "https://via.placeholder.com/150?text=Cowpea+Beans+%28Chavalichi+Sheng%29",
  },
  {
    id: 45,
    name: "Ginger (Adrak)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Ginger+%28Adrak%29",
  },
  {
    id: 46,
    name: "Red Raddish (Chukandar)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Red+Raddish+%28Chukandar%29",
  },
  {
    id: 47,
    name: "Round Gourd (Tinda)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Round+Gourd+%28Tinda%29",
  },
  {
    id: 48,
    name: "Ash Gourd (Petha)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Ash+Gourd+%28Petha%29",
  },
  {
    id: 49,
    name: "Green Tomato",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Green+Tomato",
  },
  {
    id: 50,
    name: "Elephant Yam (Suran)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Elephant+Yam+%28Suran%29",
  },
  {
    id: 51,
    name: "Raw Mango",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Raw+Mango",
  },
  {
    id: 52,
    name: "Jackfruit (Kathal)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Jackfruit+%28Kathal%29",
  },
  {
    id: 53,
    name: "Runner Beans",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Runner+Beans",
  },
  {
    id: 54,
    name: "Field Beans (Papdi)",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Field+Beans+%28Papdi%29",
  },
  {
    id: 55,
    name: "Raw Papaya",
    category: "Vegetables",
    image: "https://via.placeholder.com/150?text=Raw+Papaya",
  },

  // Exotic Vegetables
  {
    id: 56,
    name: "Alfa Alfa Sprouts",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Alfa+Alfa+Sprouts",
  },
  {
    id: 57,
    name: "Aloe Vera",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Aloe+Vera",
  },
  {
    id: 58,
    name: "American Corn Wh (Butta)",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=American+Corn+Wh+%28Butta%29",
  },
  {
    id: 59,
    name: "Asparagus Green",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Asparagus+Green",
  },
  {
    id: 60,
    name: "Asparagus Green Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Asparagus+Green+Imported",
  },
  {
    id: 61,
    name: "Asparagus Peru Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Asparagus+Peru+Imported",
  },
  {
    id: 62,
    name: "Asparagus White Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Asparagus+White+Imported",
  },
  {
    id: 63,
    name: "Avocado Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Avocado+Imported",
  },
  {
    id: 64,
    name: "Avocado",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Avocado",
  },
  {
    id: 65,
    name: "Baby Beets",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Beets",
  },
  {
    id: 66,
    name: "Baby Carrot",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Carrot",
  },
  {
    id: 67,
    name: "Baby Corn",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Corn",
  },
  {
    id: 68,
    name: "Baby Pakchoy",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Pakchoy",
  },
  {
    id: 69,
    name: "Baby Potato",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Potato",
  },
  {
    id: 70,
    name: "Baby Red Radish",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Baby+Red+Radish",
  },
  {
    id: 71,
    name: "Bamboo Shoot",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Bamboo+Shoot",
  },
  {
    id: 72,
    name: "Basil",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Basil",
  },
  {
    id: 73,
    name: "Beans Sprout",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Beans+Sprout",
  },
  {
    id: 74,
    name: "Broccoli",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Broccoli",
  },
  {
    id: 75,
    name: "Brussels Sprout",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Brussels+Sprout",
  },
  {
    id: 76,
    name: "Brussels Sprout Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Brussels+Sprout+Imported",
  },
  {
    id: 77,
    name: "Butternut Squash (Pumpkin)",
    category: "Exotic Vegetables",
    image:
      "https://via.placeholder.com/150?text=Butternut+Squash+%28Pumpkin%29",
  },
  {
    id: 78,
    name: "Capsicum Red",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Capsicum+Red",
  },
  {
    id: 79,
    name: "Capsicum Yellow",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Capsicum+Yellow",
  },
  {
    id: 80,
    name: "Celery",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Celery",
  },
  {
    id: 81,
    name: "Cherry Tomato",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Cherry+Tomato",
  },
  {
    id: 82,
    name: "Chilly Red",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Chilly+Red",
  },
  {
    id: 83,
    name: "Chinese Cabbage",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Chinese+Cabbage",
  },
  {
    id: 84,
    name: "Chinese Pakchoy",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Chinese+Pakchoy",
  },
  {
    id: 85,
    name: "Chives",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Chives",
  },
  {
    id: 86,
    name: "Dry Oyster",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Dry+Oyster",
  },
  {
    id: 87,
    name: "Dry Shitake",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Dry+Shitake",
  },
  {
    id: 88,
    name: "Edamame Fresh",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Edamame+Fresh",
  },
  {
    id: 89,
    name: "Edamame Frozen Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Edamame+Frozen+Imported",
  },
  {
    id: 90,
    name: "Edible Flowers",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Edible+Flowers",
  },
  {
    id: 91,
    name: "English Cucumber",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=English+Cucumber",
  },
  {
    id: 92,
    name: "Fennel",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Fennel",
  },
  {
    id: 93,
    name: "Garlic Hand Peeled",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Garlic+Hand+Peeled",
  },
  {
    id: 94,
    name: "Garlic Peeled China",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Garlic+Peeled+China",
  },
  {
    id: 95,
    name: "Herbs",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Herbs",
  },
  {
    id: 96,
    name: "Jalapeno",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Jalapeno",
  },
  {
    id: 97,
    name: "Kale Green",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Kale+Green",
  },
  {
    id: 98,
    name: "Kale Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Kale+Imported",
  },
  {
    id: 99,
    name: "Kohlrabi",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Kohlrabi",
  },
  {
    id: 100,
    name: "Lettuce Iceberg",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Lettuce+Iceberg",
  },
  {
    id: 101,
    name: "Lettuce Romaine",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Lettuce+Romaine",
  },
  {
    id: 102,
    name: "Mushroom Button",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Mushroom+Button",
  },
  {
    id: 103,
    name: "Mushroom Shitake",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Mushroom+Shitake",
  },
  {
    id: 104,
    name: "Mushroom White",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Mushroom+White",
  },
  {
    id: 105,
    name: "Pak Choi",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Pak+Choi",
  },
  {
    id: 106,
    name: "Purple Cabbage",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Purple+Cabbage",
  },
  {
    id: 107,
    name: "Purple Carrot",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Purple+Carrot",
  },
  {
    id: 108,
    name: "Red Cabbage",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Red+Cabbage",
  },
  {
    id: 109,
    name: "Red Chilli",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Red+Chilli",
  },
  {
    id: 110,
    name: "Snow Peas",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Snow+Peas",
  },
  {
    id: 111,
    name: "Soya Bean",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Soya+Bean",
  },
  {
    id: 112,
    name: "Spinach",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Spinach",
  },
  {
    id: 113,
    name: "Sweet Corn Fresh",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Sweet+Corn+Fresh",
  },
  {
    id: 114,
    name: "Sweet Corn Frozen",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Sweet+Corn+Frozen",
  },
  {
    id: 115,
    name: "Sweet Potato Red",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Sweet+Potato+Red",
  },
  {
    id: 116,
    name: "Taro Root",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Taro+Root",
  },
  {
    id: 117,
    name: "Thai Eggplant",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Thai+Eggplant",
  },
  {
    id: 118,
    name: "Thai Kafir Lime",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Thai+Kafir+Lime",
  },
  {
    id: 119,
    name: "Tomatillo",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Tomatillo",
  },
  {
    id: 120,
    name: "Turmeric Fresh",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=Turmeric+Fresh",
  },
  {
    id: 121,
    name: "White Asparagus Imported",
    category: "Exotic Vegetables",
    image: "https://via.placeholder.com/150?text=White+Asparagus+Imported",
  },

  // Fruits
  {
    id: 122,
    name: "Apple Red Delicious",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Apple+Red+Delicious",
  },
  {
    id: 123,
    name: "Apple Golden",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Apple+Golden",
  },
  {
    id: 124,
    name: "Apple Fuji",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Apple+Fuji",
  },
  {
    id: 125,
    name: "Banana",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Banana",
  },
  {
    id: 126,
    name: "Mango Alphonso",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Mango+Alphonso",
  },
  {
    id: 127,
    name: "Mango Kesar",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Mango+Kesar",
  },
  {
    id: 128,
    name: "Grapes Red",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Grapes+Red",
  },
  {
    id: 129,
    name: "Grapes Green",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Grapes+Green",
  },
  {
    id: 130,
    name: "Orange",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Orange",
  },
  {
    id: 131,
    name: "Pineapple",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Pineapple",
  },
  {
    id: 132,
    name: "Papaya",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Papaya",
  },
  {
    id: 133,
    name: "Watermelon",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Watermelon",
  },
  {
    id: 134,
    name: "Pomegranate",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Pomegranate",
  },
  {
    id: 135,
    name: "Guava",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Guava",
  },
  {
    id: 136,
    name: "Chikoo (Sapota)",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Chikoo+%28Sapota%29",
  },
  {
    id: 137,
    name: "Plum",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Plum",
  },
  {
    id: 138,
    name: "Pear",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Pear",
  },
  {
    id: 139,
    name: "Avocado",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Avocado",
  },
  {
    id: 140,
    name: "Dragon Fruit",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Dragon+Fruit",
  },
  {
    id: 141,
    name: "Coconut",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Coconut",
  },
  {
    id: 142,
    name: "Kiwi",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Kiwi",
  },
  {
    id: 143,
    name: "Fig",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Fig",
  },
  {
    id: 144,
    name: "Dates",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Dates",
  },
  {
    id: 145,
    name: "Apricot",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Apricot",
  },
  {
    id: 146,
    name: "Starfruit (Carambola)",
    category: "Fruits",
    image: "https://via.placeholder.com/150?text=Starfruit+%28Carambola%29",
  },

  // Exotic Fruits
  {
    id: 147,
    name: "Passion Fruit",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Passion+Fruit",
  },
  {
    id: 148,
    name: "Raspberry",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Raspberry",
  },
  {
    id: 149,
    name: "Blueberry",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Blueberry",
  },
  {
    id: 150,
    name: "Goji Berry",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Goji+Berry",
  },
  {
    id: 151,
    name: "Pomegranate Seeds",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Pomegranate+Seeds",
  },
  {
    id: 152,
    name: "Cranberry",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Cranberry",
  },
  {
    id: 153,
    name: "Blackberry",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Blackberry",
  },
  {
    id: 154,
    name: "Dragon Fruit",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Dragon+Fruit",
  },
  {
    id: 155,
    name: "Cherimoya",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Cherimoya",
  },
  {
    id: 156,
    name: "Starfruit",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Starfruit",
  },
  {
    id: 157,
    name: "Durian",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Durian",
  },
  {
    id: 158,
    name: "Fig",
    category: "Exotic Fruits",
    image: "https://via.placeholder.com/150?text=Fig",
  },

  // Nuts
  {
    id: 159,
    name: "Almond",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Almond",
  },
  {
    id: 160,
    name: "Cashew",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Cashew",
  },
  {
    id: 161,
    name: "Walnut",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Walnut",
  },
  {
    id: 162,
    name: "Pistachio",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Pistachio",
  },
  {
    id: 163,
    name: "Hazelnut",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Hazelnut",
  },
  {
    id: 164,
    name: "Brazil Nut",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Brazil+Nut",
  },
  {
    id: 165,
    name: "Macadamia",
    category: "Nuts",
    image: "https://via.placeholder.com/150?text=Macadamia",
  },

  // Spices
  {
    id: 166,
    name: "Cinnamon",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Cinnamon",
  },
  {
    id: 167,
    name: "Cloves",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Cloves",
  },
  {
    id: 168,
    name: "Cumin",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Cumin",
  },
  {
    id: 169,
    name: "Black Pepper",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Black+Pepper",
  },
  {
    id: 170,
    name: "Turmeric",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Turmeric",
  },
  {
    id: 171,
    name: "Cardamom",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Cardamom",
  },
  {
    id: 172,
    name: "Mustard Seeds",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Mustard+Seeds",
  },
  {
    id: 173,
    name: "Fennel Seeds",
    category: "Spices",
    image: "https://via.placeholder.com/150?text=Fennel+Seeds",
  },

  // Herbs
  {
    id: 174,
    name: "Mint",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Mint",
  },
  {
    id: 175,
    name: "Coriander",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Coriander",
  },
  {
    id: 176,
    name: "Basil",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Basil",
  },
  {
    id: 177,
    name: "Thyme",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Thyme",
  },
  {
    id: 178,
    name: "Rosemary",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Rosemary",
  },
  {
    id: 179,
    name: "Oregano",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Oregano",
  },
  {
    id: 180,
    name: "Dill",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Dill",
  },
  {
    id: 181,
    name: "Parsley",
    category: "Herbs",
    image: "https://via.placeholder.com/150?text=Parsley",
  },

  // Leaves
  {
    id: 182,
    name: "Spinach",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Spinach",
  },
  {
    id: 183,
    name: "Kale",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Kale",
  },
  {
    id: 184,
    name: "Mint",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Mint",
  },
  {
    id: 185,
    name: "Coriander",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Coriander",
  },
  {
    id: 186,
    name: "Lettuce",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Lettuce",
  },
  {
    id: 187,
    name: "Basil",
    category: "Leaves",
    image: "https://via.placeholder.com/150?text=Basil",
  },

  // Flowers
  {
    id: 188,
    name: "Rose",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Rose",
  },
  {
    id: 189,
    name: "Sunflower",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Sunflower",
  },
  {
    id: 190,
    name: "Tulip",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Tulip",
  },
  {
    id: 191,
    name: "Lily",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Lily",
  },
  {
    id: 192,
    name: "Orchid",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Orchid",
  },
  {
    id: 193,
    name: "Daisy",
    category: "Flowers",
    image: "https://via.placeholder.com/150?text=Daisy",
  },

  // Roots
  {
    id: 194,
    name: "Ginger",
    category: "Roots",
    image: "https://via.placeholder.com/150?text=Ginger",
  },
  {
    id: 195,
    name: "Turmeric",
    category: "Roots",
    image: "https://via.placeholder.com/150?text=Turmeric",
  },
  {
    id: 196,
    name: "Beetroot",
    category: "Roots",
    image: "https://via.placeholder.com/150?text=Beetroot",
  },
  {
    id: 197,
    name: "Carrot",
    category: "Roots",
    image: "https://via.placeholder.com/150?text=Carrot",
  },
  {
    id: 198,
    name: "Radish",
    category: "Roots",
    image: "https://via.placeholder.com/150?text=Radish",
  },

  // Miscellaneous
  {
    id: 199,
    name: "Olive Oil",
    category: "Miscellaneous",
    image: "https://via.placeholder.com/150?text=Olive+Oil",
  },
  {
    id: 200,
    name: "Vinegar",
    category: "Miscellaneous",
    image: "https://via.placeholder.com/150?text=Vinegar",
  },
  {
    id: 201,
    name: "Honey",
    category: "Miscellaneous",
    image: "https://via.placeholder.com/150?text=Honey",
  },
  {
    id: 202,
    name: "Sugar",
    category: "Miscellaneous",
    image: "https://via.placeholder.com/150?text=Sugar",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory);
    console.log("Category selected:", selectedCategory);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  const filteredData = data.filter((item) => {
    console.log("Filtering item:", item);
    console.log("Search term:", searchTerm);
    console.log("Category filter:", categoryFilter);
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter ? item.category === categoryFilter : true)
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
      </div>

      <Container style={{ backgroundColor: "#F5F5F5" }}>
        {/* <Typography
          variant="h4"
          align="center"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Organic Pantry
        </Typography> */}

        <Banner />

        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                onChange={handleCategoryChange}
                label="Category"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Vegetable">Vegetables</MenuItem>
                <MenuItem value="Exotic Vegetable">Exotic Vegetables</MenuItem>
                <MenuItem value="Fruit">Fruits</MenuItem>
                <MenuItem value="Exotic Fruit">Exotic Fruits</MenuItem>
                <MenuItem value="Nuts">Nuts</MenuItem>
                <MenuItem value="Spices">Spices</MenuItem>
                <MenuItem value="Herbs">Herbs</MenuItem>
                <MenuItem value="Leaves">Leaves</MenuItem>
                <MenuItem value="Flowers">Flowers</MenuItem>
                <MenuItem value="Roots">Roots</MenuItem>
                <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.category}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewDetails(item)}
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <DetailsCard
          open={dialogOpen}
          handleClose={handleCloseDialog}
          item={selectedItem}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
