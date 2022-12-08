import React from 'react'
import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database'
import { color } from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';

export default class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Welcome, ' + this.props.route.params.name,
                    createdAt: new Date(),
                    system: true,
                }
            ],
            name: this.props.route.params.name,
            id: this.props.route.params.id,
            loading: true
        }
    }


    componentDidMount() {
        // let name = this.props.route.params.name

        database()
            .ref('/chat/')
            // .limitToLast(1)
            .on('child_added', snapshot => {
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, snapshot.val()),
                    loading: false
                }))
            });
    }


    render() {
        return (
            <>
                <View
                    style={{
                        flex: 1
                    }}
                >
                    {this.state.loading ? (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: 'center',
                                flex: 1
                            }}
                        >
                            <ActivityIndicator
                                size={40}
                                color={"#f0f"}
                            />

                        </View>
                    ) : (
                        <>
                            <View
                                style={{
                                    width: '70%',
                                    borderBottomWidth: .5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#027206",
                                        padding: 15,
                                        fontSize: 20
                                    }}
                                >
                                    My Academy Group
                                </Text>
                            </View>
                            <GiftedChat
                                messages={this.state.messages}
                                onSend={message => this.onSend(message)}
                                showUserAvatar={true}
                                textInputProps={
                                    {
                                        color: "#000"
                                    }
                                }
                                renderUsernameOnMessage={true}
                                renderAvatarOnTop={true}
                                multiline={false}
                                user={{
                                    name: this.state.name,
                                    _id: this.state.id,

                                    // avatar: 'https://placeimg.com/140/140/any'
                                }}
                            />
                        </>

                    )}

                </View>

            </>

        )
    }

    onSend = ((message) => {
        // message[0]._id = 10
        database()
            .ref('/chat/')
            .push(message,
                () => {
                    console.log(message)

                }
            )


    }
    )

}
