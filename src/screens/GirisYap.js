import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class GirisYap extends Component {
    render() {
        return (
            <View>
                <Button title="Giriş Yap" onPress={() => Actions.Panel()} />
            </View>
        )
    }
}
