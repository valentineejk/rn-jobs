import {useState} from "react"

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import { COLORS, SIZES, icons, images } from '../../../constants';
import { useRouter } from 'expo-router'
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter()
  const [activeJob, setActiveJob] = useState("Full-time")

const jobTypes = [
  "Full-time", "Part-time", "Remote"
]

  return (
    <View>
      <View style={ styles.container } >
        <Text style={ styles.userName } >Hello, Amaradeus</Text>
        <Text style={ styles.welcomeMessage } >Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={ styles.searchWrapper }>
          <TextInput
            style={ styles.searchInput }
            value=""
            onChange={ () => { } }
            placeholder="Search for your dream job now!"
          />
  
        </View>
        <TouchableOpacity 
        style={styles.searchBtn}
        onPress={()=>{}}
        >
          <Image
            source={ icons.search }
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer} >
        <FlatList 
          keyExtractor={item =>item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          data={jobTypes}
          renderItem={({item})=>(
<TouchableOpacity 
style={styles.tab(activeJob, item)}
onPress={()=>{
  setActiveJob(item)
  router.push(`/search/${item}`)
}}
 >
  <Text style={styles.tabText(activeJob, item)} >
    {item}
  </Text>
</TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome