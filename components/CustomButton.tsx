import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  isLoading: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity 
        style={styles.button}
        onPress={handlePress}
        activeOpacity={isLoading ? 1 : 0.7}
        disabled={isLoading}
        >
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        minHeight: 62,
        backgroundColor: '#FFA001',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    btnText: {
        color: '#161622',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    }
})

export default CustomButton