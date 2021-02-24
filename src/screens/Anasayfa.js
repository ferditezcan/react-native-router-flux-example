import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Anasayfa extends Component {

    state = {
        posts: [],
        loaded: false,
    }

    componentDidMount() {
        this.getPosts()
    }

    async getPosts() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.json()
        this.setState({ posts: data, loaded: true })
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>

                        {
                            this.state.loaded ?
                                this.state.posts.map((item, index) => (

                                    <ListItem thumbnail key={index}>
                                        <Body>
                                            <Text>{item.title}</Text>
                                            <Text note numberOfLines={1}>{item.body}</Text>
                                        </Body>
                                        <Right>
                                            <Button
                                                transparent
                                                onPress={() => Actions.PostDetay({item})}
                                            >
                                                <Text>Görüntüle</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                )) :
                                <Spinner color='blue' />
                        }
                    </List>
                </Content>
            </Container>
        )
    }
}
