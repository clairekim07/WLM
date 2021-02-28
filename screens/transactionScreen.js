import React from 'react';
import {Text,View, TouchableOpacity, StyleSheet,TextInput,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default  class transactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            scannedBook:'',
            scannedStudent:'',
            buttonState:'normal'
        }
    }

    getCameraPermission=async(id)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
            hasCameraPermission:status==='granted',
            buttonState:id,
            scanned:false
        })

    }

    handleBarcodeScan=async(type,data)=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal',
        })
    }
    render(){
        const hasCameraPermission = this.state.hasCameraPermission;
        const scannedData = this.state.scannedData;
        const buttonState = this.state.buttonState;
        const scanned = this.state.scanned
        if(buttonState!=='normal'&& hasCameraPermission){
                return(
                    <BarCodeScanner 
                    onBarCodeScanned={scanned?undefined:this.handleBarcodeScan}
                    style={StyleSheet.absoluteFillObject} 
                    />
                )
        }else if(buttonState==='normal'){
        return(
            <View>
                <Text>{hasCameraPermission===true?this.state.scannedData:"Request camera permissions"}</Text>
                <Text style={styles.text}>Issue or Return</Text>
                
                <View>
                <TextInput
                style={styles.textInput}
                placeholder="Student ID"
                value={this.state.scannedBook}
                />
                <TouchableOpacity onPress={this.getCameraPermission('bookID')}>
                    <Text style={styles.scan}>
                        Scan
                    </Text>

                </TouchableOpacity>

                <TextInput
                style={styles.textInput}
                placeholder="Book ID"
                value={this.state.scannedStudent}
                />
                <TouchableOpacity onPress={this.getCameraPermission('studentID')}>
                    <Text style={styles.scan}>
                        Scan
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.submit}>
                <Text>Submit</Text>
                </TouchableOpacity>
                </View>
            </View>
        )}
    }
}
const styles= StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:'underline',
        color:'blue',
        alignSelf:'left',
        marginTop:20

    },
    scan:{
        backgroundColor:'lightblue',
        margin:10,
        padding:10,

    },
    textInput:{
        width:200,
        height:30,
        margin:20,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2
    },
    submit:{
        alignSelf:'center'
    }
})
/*
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        hasCameraPermissions: null,
        scanned: false,
        scannedBookId: '',
        scannedStudentId:'',
        buttonState: 'normal'
      }
    }

    getCameraPermissions = async (id) =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      
      this.setState({
        /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        
        hasCameraPermissions: status === "granted",
        buttonState: id,
        scanned: false
      });
    }

    handleBarCodeScanned = async({type, data})=>{
      const {buttonState} = this.state

      if(buttonState==="BookId"){
        this.setState({
          scanned: true,
          scannedBookId: data,
          buttonState: 'normal'
        });
      }
      else if(buttonState==="StudentId"){
        this.setState({
          scanned: true,
          scannedStudentId: data,
          buttonState: 'normal'
        });
      }
      
    }

    render() {
      const hasCameraPermissions = this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState = this.state.buttonState;

      if (buttonState !== "normal" && hasCameraPermissions){
        return(
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      }

      else if (buttonState === "normal"){
        return(
          <View style={styles.container}>
            <View>
              <Image
                source={require("../assets/booklogo.jpg")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Wily</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Book Id"
              value={this.state.scannedBookId}/>
            <TouchableOpacity 
              style={styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("BookId")
              }}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Student Id"
              value={this.state.scannedStudentId}/>
            <TouchableOpacity 
              style={styles.scanButton}
              onPress={()=>{
                this.getCameraPermissions("StudentId")
              }}>
              <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
            </View>
          </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });
*/