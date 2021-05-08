import React, {Component} from 'react';
import {Modal, Text, View, TextInput, inputValue, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = visible => {
    this.setState ({modalVisible: visible});
  };
  render () {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert ('Modal has been closed.');
            this.setModalVisible (!modalVisible);
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textStyle}>ADD TO PRODUCTS</Text>
            <Text style={styles.modalText}>SKU</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={value => setInputValue (value)}
            />
            <Text style={styles.modalText}>ITEM NAME</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={value => setInputValue (value)}
            />
            <Text style={styles.modalText}>CATEGORY</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={value => setInputValue (value)}
            />
            <Text style={styles.modalText}>PRICE</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={value => setInputValue (value)}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setModalVisible (!modalVisible)}
            >
              <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.setModalVisible (true)}
          style={styles.fab}
        >
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
