import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Card } from 'react-native-paper';

export default class ReminderCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ padding: 5 }}>
                <Card style={{ borderRadius: 10 }} mode='contained'>
                    <List.Item
                        style={{ borderRadius: 10, marginTop: 10 }}
                        title={this.props.title}
                        titleStyle={styles.cardTitle}
                        description={this.props.subtitle}
                        descriptionStyle={styles.cardSubDescription}
                    />
                </Card>
            </View>
        );

    }
};

const styles = StyleSheet.create({

    reading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 18,
        marginTop: -8
    },
    cardSub: {
        fontFamily: 'Roboto'
    },
    cardSubDescription: {
        fontSize: 16, 
        marginTop: 2
    }
});