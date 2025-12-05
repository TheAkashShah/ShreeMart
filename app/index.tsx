import { StatusBar } from "expo-status-bar"
import React from "react"
import { WebView } from "react-native-webview"

export default function App() {
	return (
		<>
			<StatusBar style="auto" />

			<WebView source={{ uri: "https://shreemart.me" }} style={{ flex: 1 }} originWhitelist={["*"]} javaScriptEnabled={true} domStorageEnabled={true} startInLoadingState={true} />
		</>
	)
}
