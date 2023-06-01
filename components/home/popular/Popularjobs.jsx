import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {

  const router = useRouter();
  const { data, error, refresh, isLoading } = useFetch('search', {
    query: 'React Native Developer',
    num_pages: 1,
  });

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.headerTitle } >Show all</Text>

        <TouchableOpacity>
          <Text style={ styles.headerBtn } >Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.cardsContainer }>
        { isLoading ? (<ActivityIndicator size="large" colors={ COLORS.primary } />
        ) : error ? (
          Text("Something went wrong")
        ) : (<FlatList
          data={ data}
          renderItem={ ({ item }) => (
            <PopularJobCard item={ item } />
          ) }
          keyExtractor={ item => item?.job_id }
          contentContainerStyle={ { columnGap: SIZES.medium } }
          horizontal
        />) }
      </View>
    </View>
  )
}

export default Popularjobs