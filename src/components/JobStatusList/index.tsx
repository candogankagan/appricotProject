import React, {Dispatch, SetStateAction} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import JobStatusItem from '../JobStatusItem';

interface Props {
    chosenStatus: string;
    setChosenStatus: Dispatch<SetStateAction<string>>;
}

const jobStatus = ['Progress', 'Complated', 'Waiting', 'Errors'];

const JobStatusList = ({chosenStatus, setChosenStatus}: Props) => {
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                ListHeaderComponent={<View style={{width: 15}} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={jobStatus}
                renderItem={({item}) => (
                    <JobStatusItem
                        setChosenStatus={setChosenStatus}
                        isChosenStatus={chosenStatus == item}
                        item={item}
                    />
                )}
                keyExtractor={(index) => index}
            />
        </View>
    );
};

export default JobStatusList;
