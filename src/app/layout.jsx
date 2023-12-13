import "../styles/globals.css";
import NextAuthProvider from "../lib/NextAuthProvider";

import ToastContainerWrapper from "@/lib/ToastWrapper";
export default function Layout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>Authentication - Shourav Rahman</title>
			</head>
			<body>
				<NextAuthProvider>
					<ToastContainerWrapper />
					{children}
				</NextAuthProvider>
			</body>
		</html>
	);
}
