import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useAppSelector } from '../../store/hooks';
import { LightTheme, DarkTheme } from '../../config/Theme';
import Pulse from 'react-native-pulse';
import { useNavigation } from '@react-navigation/native';
interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: string;
  time: string;
  isOnline: boolean;
  hasVideo?: boolean;
}

const RecentChat: React.FC = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === 'light' ? LightTheme : DarkTheme;
  const navigation = useNavigation();

  const recentChats: ChatItem[] = [
    {
      id: '1',
      name: 'Darlene Steward',
      avatar: require('../../assets/icon/account.png'),
      time: '03:30 AM',
      isOnline: false,
    },
    {
      id: '2',
      name: 'Lee Williamson',
      avatar: require('../../assets/icon/account.png'),
      time: 'July 08, 06:30 PM',
      isOnline: true,
    },
    {
      id: '3',
      name: 'Dwight Wilson',
      avatar: require('../../assets/icon/account.png'),
      time: 'July 08, 4:30 PM',
      isOnline: true,
      hasVideo: true,
    },
    {
      id: '4',
      name: 'Albert Bell',
      avatar: require('../../assets/icon/account.png'),
      time: 'July 08, 1:30 PM',
      isOnline: true,
      hasVideo: true,
    },
    {
      id: '5',
      name: 'Albert Bell',
      avatar: require('../../assets/icon/account.png'),
      time: 'July 08, 1:30 PM',
      isOnline: false,
      hasVideo: true,
    },
    {
        id: '6',
        name: 'Albert Bell',
        avatar: require('../../assets/icon/account.png'),
        time: 'July 08, 1:30 PM',
        isOnline: false,
        hasVideo: true,
      },
      {
        id: '7',
        name: 'Albert Bell',
        avatar: require('../../assets/icon/account.png'),
        time: 'July 08, 1:30 PM',
        isOnline: false,
        hasVideo: true,
      },
      {
        id: '8',
        name: 'Albert Bell',
        avatar: require('../../assets/icon/account.png'),
        time: 'July 08, 1:30 PM',
        isOnline: false,
        hasVideo: true,
      },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    avatarContainer: {
      position: 'relative',
      marginRight: 12,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.colors.success,
      borderWidth: 2,
      borderColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text.primary,
      marginBottom: 4,
    },
    time: {
      fontSize: 12,
      color: theme.colors.text.secondary,
    },
    iconContainer: {
      marginLeft: 12,
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: theme.colors.primary,
    },
    iconDisabled: {
      width: 24,
      height: 24,
      tintColor: theme.colors.text.disabled,
    },
  });

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => {
        navigation.navigate('Chat' as never);
    }}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/icon/account.png')} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        {item.hasVideo ? (
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icon/facetime.png')}
              style={styles.icon}
            />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/icon/facetime.png')}
              style={styles.iconDisabled}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recentChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentChat;
