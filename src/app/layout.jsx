import "../styles/globals.css";
import NextAuthProvider from "../lib/NextAuthProvider";
export default function Layout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>Authentication - Shourav Rahman</title>
			</head>
			<body>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
