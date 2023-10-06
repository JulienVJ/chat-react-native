import { Text, View, StyleSheet } from 'react-native';

export default function Message(props) {
	return (
	  <View style={[styles.container, styles.shadowProp, props.sender == "+332222222222" ? styles.user : ""]}>
		<Text style={styles.text}>
		  {props.content}
		</Text>
		<Text style={[styles.text, styles.boldText]}>
		  {props.sender}
		</Text>
	  </View>
	);
}

  const styles = StyleSheet.create({
	container: {
		width: "auto",
		height: "auto",
		flexDirection: 'column',
		alignItems: "start",
		justifyContent: 'space-between',
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
		alignSelf: "flex-start",
		maxWidth: "50%",
		margin: 5,
	},
	text: {
	  fontSize: 18,
	  textAlign: 'center',
	},
	boldText: {
		fontWeight: 'bold',
	},
	shadowProp: {
		shadowColor: '#171717',
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	  },
	user: {
		alignSelf: "flex-end",
		alignItems: "end",
		backgroundColor: "#F65972"
	}
  });