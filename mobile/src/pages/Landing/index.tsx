import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigationToGiveClasses() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigationToStudyPages() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container} >

            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title} >
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold} >O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigationToStudyPages}
                >
                    <Image source={studyIcon} />
                    
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigationToGiveClasses}
                >
                    <Image source={giveClassesIcon} />
                    
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas. {"  "}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}

export default Landing;