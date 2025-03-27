import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import UserList from '../components/layout/UserList';
import ButtonList from '../components/layout/ButtonList';
import RecentChat from '../components/layout/RecentChat';
import { setNameTitleChat, setLayout } from '../store/store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { LightTheme, DarkTheme } from '../config/Theme';


const NormalChat = () => {

    //CONSTANTS VARIABLES
    const [layout, setLayout] = useState<React.ReactNode>(<RecentChat />);
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;
    const dispatch = useAppDispatch();
    //khai bao danh sach ten cac screen trong man normal chat
    const nameButtonList = ["Pinned", "Recent", "Favor"];
    //khai bao danh sach function cho tung screen trong man normal chat
    const functionList = [
        ()=>{
            dispatch(setNameTitleChat(nameButtonList[0]));
            setLayout(<UserList />);
        },
        ()=>{
            dispatch(setNameTitleChat(nameButtonList[1]));
            setLayout(<RecentChat />);
        },
        ()=>{
            dispatch(setNameTitleChat(nameButtonList[2]));
            setLayout(<UserList />);
        }
    ];
    //khai bao danh sach icon cho tung screen trong man normal chat
    const iconButtonList = [
        require("../assets/icon/pin.png"),
        require("../assets/icon/pin.png"),
        require("../assets/icon/pin.png"),
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:theme.colors.background,
            padding: 20,
        },
    });

    //RENDER
    return (
        <View style={styles.container}>
            <ButtonList nameButtonList={nameButtonList} functionList={functionList} iconButtonList={iconButtonList} />
            {layout}

            
        </View>
    );
}


export default NormalChat;

