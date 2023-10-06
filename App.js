import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import Message from "./components/Message";
import messages from "./DATA/messages.json"

export default function App() {

  const [text, setText] = React.useState('');
  const [random, setRandom] = React.useState(["Wow super !", "Je vais bien :)", "J'adorerai voir ça !"]);
  const [messageData, setMessageData] = React.useState(messages[3]);
  
  function sendMessage() {
    const newId = messageData[messageData.length-1].id + 1
		const newMessage = {
      id: newId,
			sender: "+332222222222",
			content: text,
		};
    setMessageData((prevMessageData) => [...prevMessageData, newMessage]);

    const answer = Math.floor(Math.random() * random.length);
    const newIdAnswer = messageData[messageData.length-1].id + 2;
    const autoAnswer = {
      id: newIdAnswer,
      sender: "+331111111111",
      content: random[answer]
    };
    setTimeout(() => {
      setMessageData((prevMessageData) => [...prevMessageData, autoAnswer]);
    }, 1500);
	};

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./assets/logo.svg')}/>
          <Text style={styles.title}>iMessenger</Text>
        </View>
        <ScrollView>
          {messageData.map((message, index) => (
            <Message content={message.content} sender={message.sender} key={index}/>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.subContainer, styles.smallSubContainer]}>
        <TextInput onChangeText={setText} style={[styles.input, styles.shadowProp]} multiline="true"/>
        <Button disabled={!text} onPress={sendMessage} value={text} placeholder="Écrire un message" title="Envoyer"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4568F6',
    width: "100%",
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 30,
    padding: 10,
    color: '#FFFFFF',
    fontWeight: 900,
    textAlign: 'center',
  },
  subContainer: {
    flex: 2,
    width: '75%',
    margin: 'auto',
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  smallSubContainer: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center"
  },
  input: {
		backgroundColor: 'white',
		height: "30%",
		width: "100%",
		borderRadius: 5,
		fontSize: 24,
		padding: 10
	},
	shadowProp: {
		shadowColor: '#171717',
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});
