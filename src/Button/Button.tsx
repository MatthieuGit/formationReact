import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Button.styles';

interface IbuttonProps {
    children: string,
    color?: "white" | "black",
    bgColor: "blue" | "red" ,
    onButtonPressed: () => void
}

const Button: React.FC<IbuttonProps> = ({children, color, bgColor, onButtonPressed=()=>{}}) => {
    return (
    <Pressable onPress={(evt) => {
        onButtonPressed()
    }}
    style={[styles.button, {backgroundColor: bgColor}]} >
      <Text style={[styles.buttonText, {color: color}]} >{children}</Text>
    </Pressable>
  );
};

export default Button;