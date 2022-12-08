// import React, { useState } from 'react'
// import { View, Text, Button, TextInput, StatusBar } from 'react-native'


// function Login() {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     return (
//         <>
//             <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
//             <View style={{ flex: 1, backgroundColor: "#fff" }}>

//                 <Text style={{ textAlign: 'center', paddingVertical: 20 }}>Please login</Text>
//                 <View style={{ padding: 10 }}>
//                     <TextInput
//                         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, color: "#000" }}
//                         placeholder={'email@gmail.com'}
//                         placeholderTextColo={"#ddd"}
//                         onChangeText={text => setEmail(text)}
//                         value={email}

//                     />

//                     <Button
//                         title="دخول"

//                         onPress={() => {
//                             doLogin(email, password)
//                         }}
//                     />


//                 </View>
//             </View>
//         </>
//     )
// }

// export default Login




// function doLogin(email, password) {

// }


import React, { useState } from 'react'
import { View, Text, Button, TextInput, StatusBar } from 'react-native'


export default class Login extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    render() {

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#0f0",
                }}>

                <>
                    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
                    <View style={{ flex: 1, backgroundColor: "#fff" }}>

                        <Text style={{ textAlign: 'center', paddingVertical: 20 }}>Please login</Text>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, color: "#000" }}
                                placeholder={'الاسم'}
                                placeholderTextColor={"#ddd"}
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email}

                            />

                            <Button
                                title="دخول"
                                onPress={() => {
                                    this.setState({ email: '' })
                                    this.props.navigation.navigate("Home", {
                                        name: this.state.email,
                                        id: this.state.email + 1
                                    })
                                }}
                            />


                        </View>
                    </View>
                </>


            </View>
        );
    };

}
