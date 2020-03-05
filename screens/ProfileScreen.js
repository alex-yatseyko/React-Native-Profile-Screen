import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import ProfileImg from '../assets/Profile.png'
import stars from '../assets/stars.png'
import PostIcon from '../assets/Circle.png'
import PostImage from '../assets/image.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/global'

import * as Font from 'expo-font';
import { FaceAnchorProp } from 'expo/build/AR';

export const ProfileScreen = () => {
    const [isFollow, setFollow] = useState(false)
    const [fontLoaded, setFontLoaded] = useState(false)

    const handleFollow = () => {
        setFollow(!isFollow)
    }

    useEffect(() => {
        Font.loadAsync({
          'kalam': require('../fonts/Kalam-Regular.ttf'),
        });
        setFontLoaded(true)
      }, [])

    return (
        <ScrollView style={styles.profileScreen}>
            <View style={styles.profileOptions}>
            <TouchableOpacity>
                <Icon name="chevron-down" light style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity> 
                <Icon name="cog" light style={styles.icon} />
            </TouchableOpacity>
            </View>
            <Image source={stars} style={styles.starsBg}></Image>
            <View style={styles.profileHeader}>
                    <View style={styles.profileImgWrapper}>
                            <Image
                                style={styles.profileImg}
                                source={ProfileImg}
                            />
                    </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>Ilias</Text>
                    <Text style={styles.profileLocation}>Berlin, Germany</Text>
                    <TouchableOpacity onPress={handleFollow}>
                        <View style={isFollow ? styles.followBtnActive : styles.followBtn} >
                            <Text style={isFollow ? styles.blackText : styles.whiteText}>
                                {isFollow ? 'Following' : 'Follow'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.postsSection} >
                <View style={styles.postIconWrapper}>
                    <TouchableOpacity>
                        <Image source={PostIcon} style={styles.postIcon} />
                    </TouchableOpacity>
                </View>
                {
                    fontLoaded ? (
                    <Text style={styles.postsSectionTitle}>Entries 2</Text>
                    ) : null
                }
                <View style={styles.postsWrapper}>
                    <View style={styles.post}>
                        <Image
                            source={PostImage}
                            style={styles.postImage}
                        />
                        <Text style={styles.postData}>16 JAN 
                            <Text style={styles.greyText}> Berlin, Germany</Text>
                        </Text>
                    </View>
                    <View style={styles.post}>
                        <Image
                            source={PostImage}
                            style={styles.postImage}
                        />
                        <Text style={styles.postData}>16 JAN 
                            <Text style={styles.greyText}> Berlin, Germany</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}