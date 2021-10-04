import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import PlusIcon from '../../assets/icons/svg/plus.svg';
import FilterIcon from '../../assets/icons/svg/filter.svg';
import JobStatusList from '../../components/JobStatusList';
import Jobs from '../../components/Jobs';
import jobs from '../../constants/data';
import ModalComponent from '../../components/Modal';
import COLORS from '../../constants/theme';


const MainScreen = () => {
    const [chosenStatus, setChosenStatus] = useState('Progress');
    const [modalVisible, setModalVisible] = useState(false);

    const filteredData = useMemo(() =>
            jobs.filter((status) => status.status == chosenStatus.toLowerCase()),
        [chosenStatus]);

    return (
        <View style={styles.container}>
            <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <View style={styles.headerContainer}>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitleText}>Tidy Host</Text>
                </View>
                <View style={styles.headerButtonContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.headerButtonTouchable}>
                        <PlusIcon fill={COLORS.white} stroke={COLORS.white} />
                        <Text style={styles.headerButtonText}>Add Job</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.jobsInfoContainer}>
                <View>
                    <Text style={styles.jobsText}>Jobs</Text>
                    <Text style={styles.jobsInfoText}>1 house cleaned, 2 continues.</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
            <JobStatusList chosenStatus={chosenStatus} setChosenStatus={setChosenStatus} />
            <FlatList
                style={styles.list}
                data={filteredData}
                renderItem={({item}) => <Jobs image={item.image} userName={item.name}
                                              place={item.place} time={item.createdAt} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MainScreen;
