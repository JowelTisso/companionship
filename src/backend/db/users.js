import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { bookmarks } from "./bookmarks";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "jowel123",
    firstName: "jowel",
    lastName: "tisso",
    username: "joweltisso",
    password: "test123",
    avatar: "https://i.pravatar.cc/150?img=60",
    bookmarks: [],
    bio: "Time to level up | Aspiring neograd22 | React | React Native | Learning with @neogcamp",
    website: "https://github.com/JowelTisso",
    backgroundImg: "https://picsum.photos/id/10/1000/500",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "goku123",
    firstName: "Son",
    lastName: "Goku",
    username: "songoku",
    password: "goku",
    avatar: "https://i.pravatar.cc/150?img=54",
    bookmarks: [],
    bio: "Power comes in response to a need, not a desire.",
    website: "https://github.com/JowelTisso",
    backgroundImg: "https://picsum.photos/id/10/1000/500",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "yuzhong123",
    firstName: "yu",
    lastName: "zhong",
    username: "yuzhong",
    password: "yuzhong",
    avatar: "https://i.pravatar.cc/150?img=40",
    bookmarks: [],
    bio: "Doubt my intentions as you please, in the end, only the victor will be remembered.",
    website: "https://github.com/JowelTisso",
    backgroundImg: "https://picsum.photos/id/10/1000/500",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "vegeta123",
    firstName: "prince",
    lastName: "vegeta",
    username: "vegeta",
    password: "vegeta",
    avatar: "https://i.pravatar.cc/150?img=31",
    bookmarks: [],
    bio: "I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
    website: "https://github.com/JowelTisso",
    backgroundImg: "https://picsum.photos/id/10/1000/500",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "tim123",
    firstName: "Tim",
    lastName: "Carpenter",
    username: "tim",
    password: "carpenter",
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    bookmarks: [],
    bio: "I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
    website: "https://github.com/JowelTisso",
    backgroundImg: "https://picsum.photos/id/10/1000/500",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
