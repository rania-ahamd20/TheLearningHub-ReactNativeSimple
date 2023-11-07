/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet,Image,Button} from 'react-native';
class CV extends React.Component {

  /*changeName = ()=>{
    this.setState({name:'Rania Ahmad Ali'});
  };*/

  state = {name:'Rania ',IsFullName:true,toggleText:'Show Full Name'};

  handelToggle = ()=>{
    const {IsFullName} = this.state;
    if (IsFullName)
    {
      this.setState({IsFullName:false});
      this.setState({toggleText:'Show Short Name'});
      this.setState({name:'Rania Ahmad Ali'});
    }
    else
    {
      this.setState({IsFullName:true});
      this.setState({toggleText:'Show Full Name'});
      this.setState({name:'Rania '});
    }
  };

  render(): React.ReactNode {
  return (
    <View style={styles.container}>
        <Text style={styles.Header}>Computer Engineer</Text>

      <View style={styles.rowContainer}>
        <Image style={styles.Image} source={require('./Images/R.png')} />
        <Text style={styles.Name}>{this.state.name}</Text>
      </View>

      <Button color="black" title={this.state.toggleText} onPress={this.handelToggle} />

      <View style={styles.divider} />
      <Text style={styles.Headings}>Professional Experience:</Text>
      <Text style={styles.Text}>September 2022 - March 2023</Text>
      <Text style={styles.Text}>Jovision Company - irbid, JO</Text>
      <Text style={styles.Text}>Machine Learning And Mobile Applications Developer</Text>
      <Text style={styles.Headings}>Age: </Text>
      <Text style={styles.Text}>23 years </Text>
      <Text style={styles.Headings}>University: </Text>
      <Text style={styles.Text}>Yarmouk University</Text>
      <Text style={styles.Headings}>Another Information:</Text>
      <Text style={styles.Text}>March 2023 - OCt 2023</Text>
      <Text style={styles.Text}>Tahaluf Elmarat Technical Solutions - JO</Text>
      <Text style={styles.Text}>Full-Stack Developer InternShip</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  Image:
  {
    width:130 ,
    height:130 ,
    borderRadius:10 ,
    margin:20,
  },
  Name:
  {
    color:'black',
    fontSize:24,
    margin:20,

  },

  Headings:
  {
    color:'black',
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:20,
    marginTop:20,
    marginBottom:10,
  },
  container: {flex: 1, backgroundColor: '#FCDBE5'},

  rowContainer:
  {
    flexDirection: 'row',
    alignItems: 'center',

  },
 Text:{marginLeft:20,fontSize:16,color:'black'},
  divider: {
    height: 1,
    backgroundColor: 'black',
  },
  Header:{textAlign:'center',color:'black',fontSize:24,marginTop:10},

});
export default CV;
