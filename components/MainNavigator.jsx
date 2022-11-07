import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconButton, useTheme, Card, Title, Paragraph } from 'react-native-paper';

import ImageCard from './ImageCard';
import ReminderCard from './ReminderCard';
import ShoppingList from './ShoppingList';

// Photo by Milad Fakurian on Unsplash [https://unsplash.com/photos/u8Jn2rzYIps]
import abstract from '../assets/abstract.jpeg'
import abstract2 from '../assets/abstract2.jpeg';
import abstract3 from '../assets/abstract3.jpeg';



const Tab = createBottomTabNavigator();

export const PrimaryIcon = () => {
    const theme = useTheme();
    return (
        <IconButton
            icon="home"
            iconColor={theme.colors.surfaceVariant}
            size={30}
            style={{ marginBottom: -5 }}
        />
    );
}

export const SecondaryIcon = () => {
    const theme = useTheme();
    return (
        <IconButton
            icon="view-list"
            iconColor={theme.colors.surfaceVariant}
            size={30}
            style={{ marginBottom: -5 }}
        />
    );
}

export const MoreIcon = () => {
    const theme = useTheme();
    return (
        <IconButton
            icon="more"
            iconColor={theme.colors.surfaceVariant}
            size={30}
            style={{ marginBottom: -5 }}
        />
    );
}

const PrimaryScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView>
                <ImageCard image={abstract} title="Shopping List" subtitle="Needed Items" />
                <ReminderCard title="** REMINDER **" subtitle="Get Toilet Paper!" />
                <ShoppingList />
            </ScrollView>
        </View>
    );
}


const SecondaryScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView>
                <ImageCard image={abstract3} title="Something Else" subtitle="For more ideas!" />
                <ReminderCard title="Ideas" subtitle="Use this template!" border='#fff' />
            </ScrollView>
        </View>
    );
}


const MoreScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView>
                <Card>
                    <ImageCard image={abstract2} title="Resources" subtitle="Additional Info" />
                    <Card.Content>
                        <Title style={{ marginTop: 20 }}>Project Background</Title>
                        <Paragraph style={styles.p}>
                            Mobile app theming has become a crucial component for developers to focus on!
                            The goal of this project was to provide a straightforward example of how one can
                            go about incorporating custom themes into their components.
                        </Paragraph>
                        <Paragraph style={styles.p}>
                            This application uses the Expo framework and React Native building blocks. Each component
                            used receives a theming prop passed down from the very top App component, and takes advantage
                            of the react-native-paper library of components to do so.
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
}


export const AppNavigator = () => {
    const theme = useTheme();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: theme.colors.onTertiaryContainer, paddingBottom: 5 },
                    tabBarLabelStyle: { color: theme.colors.tertiaryContainer },
                    headerStyle: { backgroundColor: theme.colors.customHeader },
                    headerTitleStyle: { color: theme.colors.onBackground, fontWeight: 'bold', fontSize: 24 }
                }}
            >
                <Tab.Screen name="Items" component={PrimaryScreen} options={{ tabBarIcon: PrimaryIcon }} />
                <Tab.Screen name="Discounts" component={SecondaryScreen} options={{ tabBarIcon: SecondaryIcon }} />
                <Tab.Screen name="More" component={MoreScreen} options={{ tabBarIcon: MoreIcon }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    p: {
        marginBottom: 20
    }
});