import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LightTheme, DarkTheme } from '../../config/Theme';
import { useAppSelector } from '../../store/hooks';

const CustomHeader = ({ title }: { title: string }) => {
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;

    const styles = StyleSheet.create({
      safeArea: {
          backgroundColor: theme.colors.background,
      },
      header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: theme.colors.background,
      },
      headerTitle: {
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
          color: theme.colors.text.primary,
      },
      headerIcon: {
          width: 30,
          height: 30,
      }
  })

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <TouchableOpacity>
            <Image 
              source={require('../../assets/icon/account.png')} 
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

  
  };



export default CustomHeader;
