import {View, Text} from 'react-native';
import styles from './Button.styles';
const Button = (props) => {
  console.log(props);
    return (
    <View style={[styles.button, {backgroundColor: props.bgColor}]} >
      <Text style={[styles.buttonText, {color: props.color}]} >
        {props.children}
      </Text>
    </View>
  );
};

export default Button;