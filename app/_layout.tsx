import { Stack } from "expo-router"
import { View } from "react-native"

export default function RootLayout() {
	return (
		<View style={{ flex: 1, paddingTop: 25 }}>
			<Stack screenOptions={{ headerShown: false }} />
		</View>
	)
}
