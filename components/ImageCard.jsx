import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default class ImageCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ padding: 5, flex: 1 }}>
        <Card style={styles.card} mode='elevated'>
          <ImageBackground
            style={styles.coverImage}
            borderRadius={20}
            source={this.props.image}>
            <View style={styles.textView}>
              <Title style={styles.cardTitle}>{this.props.title}</Title>
              <Paragraph style={styles.cardSub}>{this.props.subtitle}</Paragraph>
            </View>
          </ImageBackground>
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  card: {
    borderRadius: 20
  },
  cardTitle: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 5,
  },
  cardSub: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 20,
    marginLeft: 5,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    borderRadius: 20
  },
  coverImage: {
    width: '100%',
    height: 200
  }

});

