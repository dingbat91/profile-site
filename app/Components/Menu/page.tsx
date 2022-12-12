"use client";

import styles from "./navmenu.module.css";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import react from "react";
import { LayoutGroup } from "framer-motion";

//animation variants for buttons
const itemvariant: Variants = {
	open: { height: "45px", visibility: "visible" },
	closed: { height: "0px", visibility: "hidden" },
};

//animation Variants for the open button
const firstvariant: Variants = {
	open: {
		borderBottomRightRadius: 0,
	},
	closed: {
		borderBottomRightRadius: 20,
	},
};

//animation variants for menu buttons (Excluding the open button)
const collapsevariants: Variants = {
	//On opening
	open: {
		height: "45px",
		opacity: 1,
	},
	//on closing
	closed: {
		height: "0px",
		opacity: 0,
	},
};

const NavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<LayoutGroup id="Menu">
				<motion.nav
					initial={false}
					animate={isOpen ? "open" : "closed"}
					className={styles.navMenu}
				>
					<motion.button
						variants={firstvariant}
						onClick={() => setIsOpen(!isOpen)}
					>
						Page
					</motion.button>
					<motion.div variants={collapsevariants}>
						<motion.button variants={itemvariant}>Home</motion.button>
						<motion.button variants={itemvariant}>About</motion.button>
						<motion.button variants={itemvariant}>Skills</motion.button>
						<motion.button variants={itemvariant}>Contact</motion.button>
					</motion.div>
				</motion.nav>
			</LayoutGroup>
		</>
	);
};

export default NavMenu;
