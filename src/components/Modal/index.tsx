import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import styles from './style';

interface Props {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalComponent = ({modalVisible, setModalVisible}: Props) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitleText}>Add a Job</Text>
                        <View style={styles.input}>
                            <TextInput placeholder={'Write a task..'} />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonPostContainer}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonPostText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default ModalComponent;
