import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.text}>9 Packet Lane</Text>
				<ScrollView showsHorizontalScrollIndicator={false} bounces horizontal style={styles.section}>
					<View style={styles.section_cell}><Text style={styles.section_text}>For you</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Grocery</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>EBT</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Alcohol</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Gifts</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Wholesale</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Convenience</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Pets</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Beauty</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Pharmacy</Text></View>
					<View style={styles.section_cell}><Text style={styles.section_text}>Retail</Text></View>
				</ScrollView>
			</View>
			<ScrollView showsVerticalScrollIndicator style={styles.body}>
				<View>
					<View style={{ flexDirection: "row", justifyContent: "space-between"}}>
						<Text style={[styles.text, { fontWeight: "600" }]}>Stores to help you save</Text>
						<Text style={[styles.text, { textDecorationLine: 'underline' }]}>Show all</Text>
					</View>
					<View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
						<View style={{ borderColor: "rgba(81, 85, 89, .1)", borderWidth: 1, width: 75, height: 50, borderRadius: 8 }}></View>
						<View>
							<Text style={[styles.text, { fontWeight: "600", fontSize: 14 }]}>ALDI</Text>
							<Text style={[styles.text, { fontWeight: "500", fontSize: 12, color: "rgba(62,135,42,1)"}]}>Delivery by 11:45am</Text>
						</View>
					</View>
					<View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
						<View style={{ borderColor: "rgba(81, 85, 89, .1)", borderWidth: 1, width: 75, height: 50, borderRadius: 8 }}></View>
						<View>
							<Text style={[styles.text, { fontWeight: "600", fontSize: 14 }]}>Price Rite</Text>
							<Text style={[styles.text, { fontWeight: "500", fontSize: 12, color: "rgba(62,135,42,1)"}]}>Delivery by 11:45am</Text>
						</View>
					</View>
					<View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center", gap: 10 }}>
						<View style={{ borderColor: "rgba(81, 85, 89, .1)", borderWidth: 1, width: 75, height: 50, borderRadius: 8 }}></View>
						<View>
							<Text style={[styles.text, { fontWeight: "600", fontSize: 14 }]}>Walgreens</Text>
							<Text style={[styles.text, { fontWeight: "500", fontSize: 12, color: "rgba(62,135,42,1)"}]}>Delivery by 11:30am</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%"
	},
	top: {
		width: "100%",
		height: "auto",
		borderColor: "rgba(81, 85, 89, .1)",
		borderBottomWidth: 1,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	section: {
		width: "100%",
		flexDirection: "row",
		decoration: "none",
	},
	section_cell: {
		padding: 10,
	},
	section_text: {
		fontSize: 14,
		fontWeight: "500"
	},
	body: {
		width: "100%",
		height: "100%",
		padding: 10,
	},
	text: {
		fontSize: 16
	}
})