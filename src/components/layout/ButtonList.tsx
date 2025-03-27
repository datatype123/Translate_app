import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OptionsChat from "../ui/OptionsChat";

interface ButtonListProps {
  nameButtonList:string[];
  functionList: (() => void)[];
  iconButtonList: any[];
}

const ButtonList: React.FC<ButtonListProps> = ({nameButtonList, functionList, iconButtonList} ) => {


//STYLES
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10,
      marginLeft: 10,
    },
  });

//render
  return (
    <View style={styles.container}>
      <OptionsChat
        onPress={functionList[0]}
        icon={iconButtonList[0]}
        title={nameButtonList[0]}
      />
      <OptionsChat
        onPress={functionList[1]}
        icon={iconButtonList[1]}
        title={nameButtonList[1]}
      />
      <OptionsChat
        onPress={functionList[2]}
        icon={iconButtonList[2]}
        title={nameButtonList[2]}
      />
    </View>
  );
};

export default ButtonList;
function setLayout(arg0: React.JSX.Element): any {
    throw new Error("Function not implemented.");
}

