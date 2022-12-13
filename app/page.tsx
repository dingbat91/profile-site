import { Oxanium } from "@next/font/google";
import classname from "classnames";
import styles from "./frontpage.module.css";
import NavMenu from "./Components/Menu/page";
import { motion, LayoutGroup } from "framer-motion";
import PostStub from "./Components/PostStub/PostStub";

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
			<p>
				This website was developed with the following items: Next.JS using beta
				app directory Supabase for blog backend database support Slate.js Rich
				text editing
			</p>
			{/* @ts-expect-error Server Component */}
			<PostStub />
		</div>
	);
};

export default Frontpage;
