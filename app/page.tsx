import { Oxanium } from "@next/font/google";
import classname from "classnames";
import styles from "./frontpage.module.css";
import NavMenu from "./Components/Menu/page";
import { motion, LayoutGroup } from "framer-motion";
import Post from "./Components/post/post";

//Font code
const oxt = Oxanium({
	subsets: ["latin"],
	weight: "variable",
});

//Frontpage Output
const Frontpage = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<p>
				This is the portfolio website of Matthew Hanson, a junior web developer
				and hopeful candidate for your future employement.
			</p>
			<p>This website was developed with the following items:</p>
			<Post />
		</div>
	);
};

export default Frontpage;
