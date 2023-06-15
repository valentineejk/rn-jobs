//import liraries
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';



// create a component
const JobDetails = () => {
    const tabs = ["About", "Qualifications", "Responsibilities"]

    const params = useSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const { data, isLoading, error, refresh } = useFetch('job-details', {
        job_id: params.id
    })
    const onRefresh = () => {

    }


    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite } } >
            <Stack.Screen
                options={ {
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={ icons.left }
                            dimension="60%"
                            handlePress={ () => router.back() }
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={ icons.share }
                            dimension="60%"
                        />
                    ),
                    headerTitle: '',
                } }
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={ false }
                    refreshControl={ <RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } /> }
                >
                    { isLoading ? (<ActivityIndicator size="large" colors={ COLORS.primary } />)
                        : error
                            ? (<Text>Error</Text>)
                            : data.length === 0
                                ? (<Text>No data</Text>)
                                : <View style={ { padding: SIZES.medium, paddingBottom: 100, } }>
                                    <Company
                                    companyLogo={data[0].employer_logo}
                                    jobTitle={ data[0].job_title }
                                    companyName={ data[0].employer_name }
                                    location={ data[0].job_country }

                                    />

                                    <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                        setActiveTab={ setActiveTab }
                                    />
                                </View> }
                </ScrollView>
            </>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default JobDetails;
