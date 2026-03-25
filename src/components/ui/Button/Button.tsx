import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Button.styles';

interface IbuttonProps {
    children: string,
    color?: "white" | "black",
    bgColor: "blue" | "red" ,
    onButtonPressed: () => void
}

const Button: React.FC<IbuttonProps> = ({children, color, bgColor, onButtonPressed=()=>{}}) => {
     const [buttonColor, setButtonColor] = useState<string>(bgColor);
     useEffect(() => {
        setTimeout(() => {
            setButtonColor(bgColor)
        }, 200);
     }, [bgColor, setButtonColor])
    return (
    <Pressable onPress={(evt) => {
        setButtonColor('grey')
        onButtonPressed()
    }}
    style={[styles.button, {backgroundColor: buttonColor}]} >
      <Text style={[styles.buttonText, {color: color}]} >{children}</Text>
    </Pressable>
  );
};

export default Button;