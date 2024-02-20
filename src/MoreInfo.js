import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.SPtitle}>Select Park</Text>
      <Text style={styles.MIheader}>More Information</Text>

      <Text style={styles.FAQheader}>FAQs</Text>
         <Text style={styles.QText}>Q: What is an unauthorized vehicle is in my assigned spot?</Text>
         <Text style={styles.AText}>A: You must file a report that includes a picture of the vehicle's license plate and the spot number. Please visit the 'Report' tab to complete the report form.</Text>
         <Text style={styles.QText}>Q: How can I add more time to my assigned spot?</Text>
         <Text style={styles.AText}>A: You will be required to book another sessionto add more time to your current spot number. Please visit the 'Booking' tab to re-book.</Text>
      
      <Text style={styles.MQHeader}>More Questions?</Text>
         <Text style={styles.QText}>Please contact the UNT Dallas Parking Office</Text>

           <Text style={styles.QText}>Phone: 972-780-3022</Text>
           <Text style={styles.QText}>Office Location: 7300 University Hills Blvd, DAL 1, Suite 112, Dallas, TX 75241</Text>
           <Text style={styles.QText}>Office Hours: 8:00am to 5:00pm Monday - Friday</Text>
           <Text style={styles.QText}>Email: UNTDParking@untdallas.edu</Text>
           <Text style={styles.SPtitle}>  </Text>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#c0c4cc",
    marginTop: 20,
  },
  SPtitle: {
    backgroundColor: "navy",
    borderLeftWidth: 95,
    paddingVertical: 30,
    fontSize: 40,
    fontFamily: "Century Gothic",
    fontWeight: "bold",
    color: "white",
  },
  MIheader: {
   padding: 12,
   fontSize: 20,
   fontWeight: 'bold',
   fontFamily: "Century Gothic",
   textAlign: "center",
  },
  FAQheader: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  QText: {
    paddingVertical: 5,
    marginHorizontal: 11,
    fontSize: 14,
  },
  AText: {
    paddingVertical: 1,
    marginHorizontal: 17,
    fontSize: 14,
    color: "#237FD0",
  },
  MQHeader: {
    paddingTop: 5,
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Footer: {

  }

});

export default App
