import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.lightGray,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    placeText: {
        fontSize: 18,
        fontWeight: '600'
    },
    timeRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    timeText: {
        fontSize: 13,
        color: COLORS.gray,
        marginLeft: 8
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    userTextContainer: {
        marginLeft: 5
    },
    userText: {
        color: COLORS.gray
    },
    timeRemaining: {
        marginBottom: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 40,
        backgroundColor: COLORS.lightGray
    }
});

export default styles;
