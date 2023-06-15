import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImg } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate}) => {


  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ handleNavigate }
    >
      <TouchableOpacity style={ styles.logoContainer }>
        <Image
          source={ { uri: checkImg(job.employer_logo) ? job.employer_logo : 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg' } }
          resizeMode='contain'
          style={ styles.logImage }
        />

      </TouchableOpacity>

      <View style={ styles.textContainer }>
        <Text style={ styles.jobName } numberOfLines={ 1 } >{ job.job_title }</Text>
        <Text style={ styles.jobType } numberOfLines={ 1 } >{ job.job_employment_type }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard