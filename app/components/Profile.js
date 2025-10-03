import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from './ListItem'

export default function Profile() {
  return (
    <ListItem title="Uchechukwu Nwulu" subTitle="uchechukwu@gmail.com" image={require("../assets/uche.jpeg")} />
  )
}

const styles = StyleSheet.create({})