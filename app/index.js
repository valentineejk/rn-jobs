//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, images } from '../constants';
import { Stack, useRouter } from 'expo-router';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import Popularjobs from '../components/home/popular/Popularjobs';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';

// create a component
const Home = () => {

    const router = useRouter();
    const [searchText, setSearchText] = useState("")

    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite, }} >
            <Stack.Screen
            options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                },
               headerShadowVisible: false,
               headerLeft: () => (
                   <ScreenHeaderBtn iconUrl={ icons.menu } dimension="60%" />
               ),
                 headerRight: () => (
                    <ScreenHeaderBtn iconUrl={ images.profile } />
                ),
                headerTitle: ""
                
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false} >
<View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome
                    searchText={searchText}
                    setSearchText={ setSearchText }
                    handleClick={()=>{
                        router.push(`/search/${searchText}`)
                    }}

                    />
                    <Popularjobs />
                    <Nearbyjobs />
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
};



//make this component available to the app
export default Home;



