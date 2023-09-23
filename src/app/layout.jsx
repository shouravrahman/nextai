import "../styles/globals.css";
import NextAuthProvider from "./lib/NextAuthProvider";
export default function Layout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>Next.js</title>
			</head>
			<body>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
