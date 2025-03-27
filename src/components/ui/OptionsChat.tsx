import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Image, StyleSheet, Animated, ViewStyle, ImageSourcePropType, Text, View } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";

interface CustomButtonProps {
  onPress: () => void;
  icon: ImageSourcePropType;
  size?: number;
  color?: string;
  style?: ViewStyle;
  isActive?: boolean;
  title?: string;
}

const OptionsChat: React.FC<CustomButtonProps> = ({
  onPress,
  icon,
  size = 24,

  style,
  isActive = false,
  title,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === 'light' ? LightTheme : DarkTheme;

  // Styles
  const styles = StyleSheet.create({
    container: {
      padding: 8,
      paddingHorizontal: 12,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      minWidth: 'auto',
      flexShrink: 0,
      alignSelf: 'flex-start',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'nowrap',
    },
    icon: {
      resizeMode: 'contain',
      flexShrink: 0,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      flexShrink: 1,
      flexWrap: 'wrap',
    },
  });

  // Animation
  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isActive]);

  const handlePressIn = () => {
    Animated.timing(colorAnim, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(colorAnim, {
      toValue: isActive ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      theme.colors.surface,
      theme.colors.primaryContainer,
      theme.colors.primary,
    ],
  });

  const borderColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      theme.colors.border,
      theme.colors.primary,
      theme.colors.primaryContainer,
    ],
  });

  const textColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      theme.colors.text.primary,
      theme.colors.primary,
      theme.colors.surface,
    ],
  });

  const scale = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.95, isActive ? 1.1 : 1],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor,
            borderColor,
            transform: [{ scale }],
          },
          style,
        ]}
      >
        <View style={styles.iconContainer}>
          <Animated.Image
            source={icon}
            style={[
              styles.icon,
              {
                width: size,
                height: size,
                tintColor: textColor,
              },
            ]}
          />
          {title && (
            <Animated.Text
              style={[
                styles.title,
                {
                  color: textColor,
                },
              ]}
              numberOfLines={1}
            >
              {title}
            </Animated.Text>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default OptionsChat;