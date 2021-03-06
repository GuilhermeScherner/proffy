import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import PageHeader from '../../components/PageHeader'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import TeacherItem, { Teacher } from '../../components/TeachItem'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList(){

  const [teachers, setTeachers] = useState([])

  const [favorites, setFavorites] = useState<number[]>([])

  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')


  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })
  
  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit(){ 
    loadFavorites()
    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time
      }
    })
    setIsFiltersVisible(false)

    setTeachers(response.data)

  }

  return(
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#fff"></Feather>
        </BorderlessButton>
      )}>
        {isFiltersVisible && (<View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
            style={styles.input}
            placeholder="Qual a matéria:"
            placeholderTextColor="#c1bccc"
            value={subject}
            onChangeText={text => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
                value={week_day}
                onChangeText={text => setWeek_day(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                style={styles.input}
                placeholder="Qual o horário?"
                placeholderTextColor="#c1bccc"
                value={time}
                onChangeText={text => setTime(text)}
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}
              onPress={handleFiltersSubmit}>Filtar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
      
      {teachers.map((teacher:Teacher) => <TeacherItem 
      key={teacher.id} 
      teacher={teacher}
      favorited={favorites.includes(teacher.id)}/>)}
      </ScrollView>
    </View>
  )
}
export default TeacherList