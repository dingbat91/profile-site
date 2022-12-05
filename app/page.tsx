import { Oxanium } from "@next/font/google";
import classname from "classnames";
import styles from "./frontpage.module.css";

const oxt = Oxanium({
	subsets: ["latin"],
	weight: "variable",
});

const Frontpage = () => {
	return (
		<div className={classname(oxt.className, styles.intro)}>
			<h1>Welcome</h1>
			<p>
				This is the portfolio website of Matthew Hanson, a junior web developer
				and hopeful candidate for your future employement.
			</p>
			<p>This website was developed with the following items:</p>
		</div>
	);
};

export default Frontpage;
