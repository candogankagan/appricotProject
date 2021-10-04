import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.modalBackground
    },
    modalView: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitleText: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '700'
    },
    input: {
        padding: 3,
        borderRadius: 3,
        borderWidth: 0.4,
        width: 130
    },
    buttonPostContainer: {
        marginTop: 8,
        width: 60,
        height: 30,
        borderRadius: 7,
        backgroundColor: COLORS.lightRed,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPostText: {
        color: COLORS.white
    }
});

export default styles;
