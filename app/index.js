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
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default Home;



