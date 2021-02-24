import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { Ionicons } from '@expo/vector-icons';

//sayfalarım
import Anasayfa from './screens/Anasayfa'
import Profil from './screens/Profil'
import Randevular from './screens/Randevular'
import GirisYap from './screens/GirisYap'
import PostDetay from './screens/PostDetay'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="GirisYap"
                        component={GirisYap}
                        title="Giriş Yap"
                        initial
                    />
                    <Scene
                        tabs={true}
                        activeTintColor="blue"
                        inactiveTintColor="black"
                        key="Panel"
                        type={"reset"}
                        hideNavBar
                    >
                        <Scene
                            key="Anasayfa"
                            component={Anasayfa}
                            title="Anasayfa"
                            tabBarLabel="Anasayfa"
                            icon={({ focused }) => <Ionicons name="md-home" size={24} color={focused ? "blue" : "black"} />}
                        />
                        <Scene
                            key="Randevular"
                            component={Randevular}
                            title="Randevularım"
                            tabBarLabel="Randevularım"
                            activeTintColor="red"
                            icon={({ focused }) => <Ionicons name="md-calendar" size={24} color={focused ? "blue" : "black"} />}
                        />
                        <Scene
                            key="Profil"
                            component={Profil}
                            title="Profil"
                            tabBarLabel="Profil"
                            icon={({ focused }) => <Ionicons name="md-person" size={24} color={focused ? "blue" : "black"} />}
                        />
                    </Scene>
                    <Scene key="PostDetay" component={PostDetay} title="Post Detay" />
                </Stack>
            </Router>
        )
    }
}

