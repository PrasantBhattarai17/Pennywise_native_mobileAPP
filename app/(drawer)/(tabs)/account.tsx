import { View, Text } from 'react-native'
import React from 'react'
import { useDetailsOfUser } from '../../../components/hooks/useDetailsOfUser'

const account = () => {
  useDetailsOfUser();
  return (
    <View>
      <Text>account</Text>
    </View>
  )
}

export default account