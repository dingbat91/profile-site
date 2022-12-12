import "./global.css";
import NavMenu from "./Components/Menu/page";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<div className="spaceBar" />
				<NavMenu />
				{children}
			</body>
		</html>
	);
}
