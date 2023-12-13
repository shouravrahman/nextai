"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainerWrapper() {
	return (
		<ToastContainer
			position={toast.POSITION.TOP_LEFT}
			theme='colored'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnHover
		/>
	);
}
