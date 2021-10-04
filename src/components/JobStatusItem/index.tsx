import React, {Dispatch, SetStateAction} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/theme';

interface Props {
    item: string;
    isChosenStatus: boolean;
    setChosenStatus: Dispatch<SetStateAction<string>>;
}

const JobStatusItem = ({item, isChosenStatus, setChosenStatus}: Props) => {
    return (
        <TouchableOpacity
            style={[styles.textContainer, {backgroundColor: isChosenStatus ? COLORS.lightRed : COLORS.lightGray}]}
            onPress={() => setChosenStatus(item)}>
            <Text style={[styles.text, {color: isChosenStatus ? COLORS.white : COLORS.black}]}>{item}</Text>
        </TouchableOpacity>
    );
};

export default JobStatusItem;
