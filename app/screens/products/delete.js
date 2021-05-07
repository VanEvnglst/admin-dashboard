import React, {Component} from 'react';
import {Modal, Text, View, TextInput, inputValue, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import SQLite from 'react-native-sqlite-storage';

export default class Delete extends Component {
  constructor(props) {
  super(props)
  this.state = {
    itemName: '',
    itemCategory: '',
    modalVisible: false,
  };
  }

  setModalVisible = visible => {
    this.setState ({modalVisible: visible});
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  deleteProduct = () => {
    const prod = this.state
      SQLite.openDatabase(
      'adminDash.db',
      '1.0',
      'Admin Dashboard',
      '200000'
      ).then(DB => {
      db = DB;
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM Items WHERE Item=? OR ItemCategory=?', [prod.itemName, prod.itemCategory]).then(([tx, results]) => {});
      }).then((result) => {
        db.close();
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  };  

  deleteAllProducts = () => {
    const prod = this.state
      SQLite.openDatabase(
      'adminDash.db',
      '1.0',
      'Admin Dashboard',
      '200000'
      ).then(DB => {
      db = DB;
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM Items').then(([tx, results]) => {});
      }).then((result) => {
        db.close();
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
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
            <Text style={styles.textStyle}>DELETE PRODUCT</Text>
            <Text style={styles.modalText}>ITEM NAME</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={(text) => this.updateTextInput(text, 'itemName')}
            />
            <Text style={styles.modalText}>CATEGORY</Text>
            <TextInput
              placeholder="Type Here"
              value={inputValue}
              style={styles.textInput}
              onChangeText={(text) => this.updateTextInput(text, 'itemCategory')}
            />
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {this.deleteProduct() ; this.setModalVisible (!modalVisible)}}
            >
              <Text style={styles.textButton}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setModalVisible (!modalVisible)}
            >
              <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {this.deleteAllProducts() ; this.setModalVisible (!modalVisible)}}
            >
              <Text style={styles.textButton}>Reset Products</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.setModalVisible (true)}
          style={styles.delfab}
        >
          <Text style={styles.fabIcon}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
