import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    profileScreen: {
        backgroundColor: '#f7f8fb',
        paddingTop: 55,
        paddingBottom: -20
    },
    profileOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 20,
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20
    },
    starsBg: {
        position: 'absolute',
        width: '100%',
        zIndex: 0,
        top: 30,
        left: 50
    },
    profileImgWrapper: {
        padding: 2,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginRight: 20
    },
    profileImg: {
        width: 110, 
        height: 110,
    }, 
    profileInfo: {
        justifyContent: 'space-between'
    },
    profileName: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    profileLocation: {
        color: '#b5b8ba',
        fontSize: 18,
        fontWeight: '600'
    },
    followBtn: {
        backgroundColor: '#de3051',
        alignItems: 'center',
        borderRadius: 5,
        width: 150,
        height: 40,
        justifyContent: 'center',
        shadowColor: '#de3051',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    followBtnActive: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 5,
        width: 150,
        height: 40,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.38,
        shadowRadius: 16.00,
        elevation: 24,
    },  
    icon: {
        fontSize: 25,
    },
    greyText: {
        color: '#b5b8ba',
    },
    whiteText: {
        color: "#fff",
        fontSize: 20
    },
    blackText: {
        color: '#000',
        fontSize: 20
    }, 
    postsSection: {
        marginTop: 80,
        paddingTop: 50,
        backgroundColor: '#fff',
        borderWidth: 10,
        borderColor: '#f9f8f8',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.38,
        shadowRadius: 16.00,
        elevation: 24,
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 100
    },
    postIconWrapper: {
        zIndex: 5,
        position: "absolute",
        width: 50,
        height: 100 
    },
    postIcon: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: -50,
        left: 25
    },
    postsSectionTitle: {
        fontSize: 25,
        fontFamily: 'kalam'
    },  
    postsWrapper: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between'
    },
    post: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '48%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    postData: {
        paddingTop: 10,
    }
})