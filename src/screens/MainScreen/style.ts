import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerTitleContainer: {
        flex: 6,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    headerTitleText: {
        fontWeight: '800',
        fontSize: 16
    },
    headerButtonContainer: {
        flex: 4,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    headerButtonTouchable: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightRed,
        borderRadius: 30,
        width: 95,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerButtonText: {
        color: COLORS.white,
        marginLeft: 5
    },
    jobsInfoContainer: {
        marginTop: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    jobsText: {
        fontWeight: '700',
        fontSize: 30
    },
    jobsInfoText: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 15
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        width: 30,
        height: 30
    },
    list: {
        marginBottom: 10
    }
});

export default styles;
