import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import Colors from '../Shared/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'


export default function AdvanceCourses() {
  
  return (
    
    <View >
       

        <View>
          <Slider/>
          <View style={styles.imageContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.imageWrapper}>
                <View style={styles.cardContainer}>
                  <Image source={require('./../Assets/Images/python2.png')} style={styles.image}/>
                  <View style={styles.infoContainer}>
                    <Text style={styles.courseTitle}>Learn Python</Text>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                        <Ionicons name='book-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>30 Chapters</Text>
                      </View>
                      <View style={styles.rowRight}>
                        <Ionicons name='time-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>7h:00min</Text>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                      <Text style={{ fontSize:20,color: Colors.primary }}>$4.00</Text>
                      </View>
                      <View style={styles.rowRight}>
                      <Image source={require('././../Assets/Images/pythonlogo.png')} style={{ width: 30, height: 30 }}/>
                      </View>
                    </View>

                  </View>
                </View>
              </View>

              <View style={styles.imageWrapper}>
                <View style={styles.cardContainer}>
                  <Image source={require('././../Assets/Images/python.png')} style={styles.image}/>
                  <View style={styles.infoContainer}>
                    <Text style={styles.courseTitle}>Python Advance Course</Text>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                        <Ionicons name='book-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>18 Chapters</Text>
                      </View>
                      <View style={styles.rowRight}>
                        <Ionicons name='time-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>4h:15min</Text>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                      <Text style={{ fontSize:20,color: Colors.primary }}>$1.99</Text>
                      </View>
                      <View style={styles.rowRight}>
                      <Image source={require('././../Assets/Images/pythonlogo.png')} style={{ width: 30, height: 30 }}/>
                      </View>
                    </View>

                  </View>
                </View>
              </View>
              
              <View style={styles.imageWrapper}>
                <View style={styles.cardContainer}>
                  <Image source={require('././../Assets/Images/python3.png')} style={styles.image}/>
                  <View style={styles.infoContainer}>
                    <Text style={styles.courseTitle}>Python</Text>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                        <Ionicons name='book-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>15 Chapters</Text>
                      </View>
                      <View style={styles.rowRight}>
                        <Ionicons name='time-outline' size={20} color={Colors.black}/>
                        <Text style={styles.chapterText}>2h:30min</Text>
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style={styles.rowLeft}>
                      <Text style={{ fontSize:20,color: Colors.primary }}>Free</Text>
                      </View>
                      <View style={styles.rowRight}>
                      <Image source={require('././../Assets/Images/pythonlogo.png')} style={{ width: 30, height: 30 }}/>
                      </View>
                    </View>

                  </View>
                </View>
              </View>
              
            </ScrollView>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    marginRight:15,
  },
  cardContainer: {
    width: 250, // Resmin ve yazıların toplam genişliği
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ddd'
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  coursePrice: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    width:'100%',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  chapterText: {
    marginLeft: 5,
    fontSize: 12,
    color: Colors.black,
  },
  freeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  }
});
