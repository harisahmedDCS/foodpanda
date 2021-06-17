import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderIcon = ({name,size,color,onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default HeaderIcon
