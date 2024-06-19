import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ route }) => {
  const { name, email } = route.params;
  const profileImage = require('./assets/c130d596724f96243c64d44feb9f0b30.jpeg');
  const filterImage = require('./assets/Filter.png');
  const facebookLogo = require('./assets/facebook.png');
  const googleLogo = require('./assets/google.png');


  const taskData = [
    { key: 1, name: "Jnr Executive", description: "Burger King", image: require('./assets/burgerking.png'), price: "$96,000/y", city: "New York" },
    { key: 2, name: "Product Manager", description: "Beats", image: require('./assets/beats.png'), price: "$84,000/y", city: "Florida, US" },
    { key: 3, name: "Product Manager", description: "Facebook", image: require('./assets/facebook.png'), price: "$86,000", city: "Florida, US" },
  ];
  
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Facebook',
      location: 'San Francisco, CA',
      salary: '$400,000',
    },
    {
      id: '2',
      title: 'UX Designer',
      company: 'Google',
      location: 'New York, NY',
      salary: '$160,000',
    },
    {
      id: '3',
      title: 'Data Analyst',
      company: 'Omega Technologies',
      location: 'Chicago, IL',
      salary: '$500,000',
    },
    {
      id: '4',
      title: 'Product Manager',
      company: 'Beta Innovations',
      location: 'Seattle, WA',
      salary: '$80,000 ',
    },
    {
      id: '5',
      title: 'Frontend Developer',
      company: 'Gamma Corp',
      location: 'Los Angeles, CA',
      salary: '$75,000',
    },
  ]);

  const renderJobCard = ({ item }) => (
    <View style={[styles.jobCardContainer, item.id === '2' && styles.jobCardContainerId2]}>
      <View style={styles.jobCardContent}>
        <View style={styles.jobTitleLocationContainer}>
          <View style={styles.jobTitleCompanyContainer}>
            <View style={styles.logoContainer}>
              {item.id === '1' || item.id === '3' || item.id === '4' || item.id === '5' ? (
                <Image source={facebookLogo} style={styles.companyLogo} />
              ) : (
                <Image source={googleLogo} style={styles.companyLogo} />
              )}
            </View>
            <View>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>{item.company}</Text>
            </View>
          </View>
        </View>
        <View style={styles.jobSalaryLocationContainer}>
          <Text style={styles.jobSalary}>{item.salary}</Text>
          <Text style={styles.jobLocation}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.info}>{name}</Text>
          <Text style={[styles.info, styles.noMargin]}>{email}</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={[styles.statusDotContainer, { backgroundColor: '#FFFFFF' }]}>
            <View style={[styles.statusDot, { backgroundColor: '#FC1010' }]} />
          </View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput placeholder="Search a job or position" style={styles.searchInput} />
        </View>
        <View style={styles.filterImageContainer}>
          <View style={styles.filterImageWrapper}>
            <Image source={filterImage} style={styles.filterImage} />
          </View>
        </View>
      </View>

      <View style={styles.featuredJobsContainer}>
        <Text style={styles.featured}>Featured Jobs</Text>
        <Text style={[styles.seeAll, styles.marginLeft]}>See all</Text>
      </View>

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={renderJobCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.jobCardsContainer}
      />

      <View style={styles.ongoingStyles}>
        <View style={styles.popularJobsHeader}>
          <Text style={styles.title}>Popular Jobs</Text>
          <Text style={{ color: '#AFB0B6', fontSize: 15 }}>See all</Text>
        </View>
        <View>
          {taskData.map((tasks) => (
            <View key={tasks.key} style={styles.ongoingContainer}>
              <Image source={tasks.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.ongoingtask}>{tasks.name}</Text>
                <Text style={styles.description}>{tasks.description}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{tasks.price}</Text>
                <Text style={styles.city}>{tasks.city}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  nameEmailContainer: {
    flex: 1,
  },
  info: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 0,
  },
  noMargin: {
    marginVertical: 0,
    fontSize: 15,
    fontWeight: 300,
    color:'#95969D',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 28,
  },
  statusDotContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    borderColor: '#DCDCDC',
    paddingHorizontal: 10,
    width: 263,
    height: 48,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 5,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterImageWrapper: {
    backgroundColor: '#F2F2F3',
    borderRadius: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterImage: {
    width: 17.33,
    height: 15.6,
  },
  featuredJobsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  featured: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#AFB0B6',
  },
  marginLeft: {
    marginLeft: 8,
  },

  jobCardContainer: {
    width: 286,
    height: 186,
    borderRadius: 24,
    marginRight: 16,
    elevation: 5,
    backgroundColor:'#83B4FF',
  },
  jobCardContent: {
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: '#FFFFFF',
  },
  jobTitleLocationContainer: {
    alignItems: 'flex-start',
  },
  jobSalaryLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFFFFF',
  },
  jobCompany: {
    fontSize: 14,
    marginBottom: 50,
    color: '#FFFFFF',
   },
  jobLocation: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  jobSalary: {
    fontSize: 14,
    color: '#FFFFFF',

  },

  logoContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  companyLogo: {
    width: 22,
    height: 23.57,
  },

 
     title:{
     fontWeight: 'bold',
     fontSize: 20,
     },
     popularJobsHeader: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 16,
     },
     ongoingContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginVertical: 10,
       justifyContent: 'space-between',
     },
     image: {
       width: 50,
       height: 50,
       borderRadius: 25,
       marginRight: 16,
     },
     textContainer: {
       flex: 1,
     },
     ongoingtask: {
       // your existing styles
       fontWeight: 'bold'
     },
     description: {
       color: '#666',
       fontSize: 14,
     },
     priceContainer: {
       alignItems: 'flex-end',
     },
     price: {
       fontWeight: 'bold',
       fontSize: 16,
     },
     city: {
       color: '#666',
       fontSize: 14,
     },

     jobCardContainerId2:{
      backgroundColor: '#001C30',
     }
});


export default Home;
