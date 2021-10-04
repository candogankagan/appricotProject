import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import ClockLightIcon from '../../assets/icons/svg/clock-light.svg';
import ClockIcon from '../../assets/icons/svg/clock.svg';
import TickIcon from '../../assets/icons/svg/check-circle.svg';
import {Bar} from 'react-native-progress';
import {formatRelative} from 'date-fns';
import styles from './style';
import COLORS from '../../constants/theme';

interface Props {
    userName: string;
    image: ImageSourcePropType;
    place: string;
    time: string;
}

const Jobs = ({userName, image, place, time}: Props) => {
    const [barLength, setBarLength] = useState(0);
    const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

    useEffect(() => {
        const milisecondToHour = 0.000000278;
        const distance = (Date.parse(time).valueOf() - new Date().valueOf()) * milisecondToHour;
        if (distance < 0)
            return setBarLength(1);
        setBarLength(1 / distance);
    }, [time]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.placeText}>{place}</Text>
                <View style={styles.timeRowContainer}>
                    <ClockLightIcon color={COLORS.lightRed} />
                    <Text style={styles.timeText}>
                        {capitalize(formatRelative(Date.parse(time), new Date()).replace('at', '-'))}
                    </Text>
                </View>
                <View style={styles.userContainer}>
                    <Image source={image} />
                    <Text style={styles.userTextContainer}>
                        <Text style={styles.userText}>Cleaner </Text><Text>{userName}</Text>
                    </Text>
                </View>
            </View>
            <View>
                <View
                    style={[styles.timeRemaining, {backgroundColor: barLength == 1 ? COLORS.lightRed : COLORS.lightGray}]}>
                    {barLength == 1 ? <TickIcon fill={COLORS.white} stroke={COLORS.white} /> : <ClockIcon />}
                </View>
                <Bar progress={barLength} color={COLORS.lightRed} borderWidth={0} unfilledColor={COLORS.lightGray}
                     width={70} />
            </View>
        </View>
    );
};

export default Jobs;
