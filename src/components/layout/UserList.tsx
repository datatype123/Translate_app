import React from 'react';
import { View, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';
import PinComponent from '../ui/PinComponent';
import { useAppSelector } from '../../store/store';
import { DarkTheme, LightTheme } from '../../config/Theme';

interface User {
    id: string;
    name: string;
    message: string;
    avatar: ImageSourcePropType;
    status: 'yellow' | 'blue' | 'gray' | 'green';
}

const users: User[] = [
    {
        id: '1',
        name: 'Mike Wazowski',
        message: "That's awesome! ...",
        avatar: require('../../assets/icon/account.png'),
        status: 'yellow'
    },
    {
        id: '2',
        name: 'Darlene Steward',
        message: "Pls take a look at the...",
        avatar: require('../../assets/icon/account.png'),
        status: 'blue'
    },
    {
        id: '3',
        name: 'Gregory Robertson',
        message: "Preparing for next vac...",
        avatar: require('../../assets/icon/account.png'),
        status: 'gray'
    },
    {
        id: '4',
        name: 'Dwight Wilson',
        message: "I'd like to watch ...",
        avatar: require('../../assets/icon/account.png'),
        status: 'green'
    },
    {
        id: '5',
        name: 'Dwight Wilson',
        message: "I'd like to watch ...",
        avatar: require('../../assets/icon/account.png'),
        status: 'yellow'
    }
];

const UserList = () => {
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;
    const renderItem = ({ item }: { item: User }) => (
        <View style={[styles.itemContainer, { backgroundColor: theme.colors.surface }]}>
            <PinComponent 
                name={item.name}
                message={item.message}
                avatar={item.avatar}
                status={item.status}
            />
        </View>
    );
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            // padding: 8,
        },
        itemContainer: {
            flex: 1,
            maxWidth: '50%',
            padding: 8,
        },
        row: {
            flex: 1,
            justifyContent: 'space-between',
        }
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};



export default UserList;