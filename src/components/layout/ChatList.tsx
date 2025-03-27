import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserFrameChat from "./UserFrameChat";

const ChatList = () => {
    const MessageList = [
        {
            content: "Hello",
            type: "user"
        },
        {
            content: "Hello",
            type: "assistant"
        },
    ]

    return (
        <View>
            {
                MessageList.map((message, index) => (
                    <UserFrameChat key={index} content={message.content} type={message.type as "user" | "assistant"} />
                ))
            }
        </View>
    )
}

