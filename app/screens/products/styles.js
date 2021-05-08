import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#F2F2F2',
  },
  headStyle: {
    height: 50,
    backgroundColor: '#D4D4D4',
  },
  tableText: {
    margin: 10,
    textAlign: 'center',
  },
  tableStyle: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '90%',
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalText: {
    marginTop: 10,
    textAlign: 'left',
  },
  addfab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    bottom: 0,
    backgroundColor: '#999999',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
  },
  button: {
    backgroundColor: '#888888',
    marginTop: 10,
    borderRadius: 4,
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  wrap: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  delfab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    bottom: 70,
    backgroundColor: '#999999',
    borderRadius: 30,
    elevation: 8,
  },
});
