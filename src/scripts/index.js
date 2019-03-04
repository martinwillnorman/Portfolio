import "../styles/main.scss";

import { TweenMax, TimelineMax } from "gsap/TweenMax";
import CustomEase from "./vendor/CustomEase";
import is from "is_js";

const block = document.querySelector(".block");
TweenMax.to(block, 2, { width: "200px", height: "150px" });
