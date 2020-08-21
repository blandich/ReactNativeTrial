/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'; 
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Dimensions,
  SectionList,
  ScrollView,
  Button
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-ionicons';

import { Card, Header} from 'react-native-elements';

import { PROFILEPIC, JAVA, IONIC, ANGULAR, AS400, PHP, KORE, SWAGGER, JS, GATLING, LONDON} from './image';

import UnityView from '@asmadsen/react-native-unity-view';



declare const global: {HermesInternal: null | {}};

const DATA = [
  {
    title: "Background",
    data: ["Software Engineer at Finastra", "Application Developer at UP-NIH"]
  }
];

type Props = {};

type State = {
  renderUnity: boolean
}


const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Icon name='briefcase' size={12} />
    <Text style={styles.itemtext}>{'       '}{title}</Text>
  </View>
);

function  HomeScreen()  {
  return(
    <Card
      title='Welcome!'
      image={LONDON}>
        <Text style={{marginBottom: 10}}>
        1. This is a trial app to showcase my skills in cross-platform mobile app development. 
        {'\n\n'}
        2. There's a brief summary of my experiences in the <Text style={{fontWeight: 'bold'}}>Profile Tab. </Text>
        {'\n\n'}
        3. You may view the Unity AR integration with this react native app using the <Text style={{fontWeight: 'bold'}}>Integration Tab.
        </Text></Text>
        
  
    </Card>
  );
}

function ProfileScreen() {
  return(
      <View style={styles.section_container}>
        <SectionList
        ListHeaderComponent={
          <View style={styles.container}>
              <View style={styles.profcontainer}>
                <Image  
                style={styles.profile_picture}
                source={ PROFILEPIC }
                />
            </View>
            <View style={styles.name_container}>
              <Text style={styles.name}>Benjamin Joseph C. Landicho</Text>
            </View>
          </View>
        }
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}

        ListFooterComponent={
          <View>
              <Text style={styles.header}>Expertise</Text>
              <View style={styles.expertise_container}>
                <Card title="Ionic" containerStyle={{ flex: 1}}>
                  <Image source={ IONIC } style={styles.expertise_icon}></Image>
                </Card>
              <Card title="Java" containerStyle={{ flex: 1}}>
                <Image source={ JAVA } style={styles.expertise_icon}></Image>
              </Card>
              <Card title="Angular" containerStyle={{ flex: 1}}>
                <Image source={ ANGULAR } style={styles.expertise_icon}></Image>
              </Card>
              </View>
              <View style={styles.expertise_container}>
                <Card title="PHP" containerStyle={{ flex: 1}}>
              <Image source={ PHP } style={styles.expertise_icon} resizeMode='contain'></Image>
              </Card>
              <Card title="AS/400" containerStyle={{ flex: 1}}>
                <Image source={ AS400 } style={styles.expertise_icon} resizeMode='contain'></Image>
              </Card>
              <Card title="KORE" containerStyle={{ flex: 1}}>
                <Image source={ KORE } style={styles.expertise_icon}></Image>
              </Card>
              </View>
              <View style={styles.expertise_container}>
                <Card title="Swagger" containerStyle={{ flex: 1}}>
              <Image source={ SWAGGER } style={styles.expertise_icon} resizeMode='contain'></Image>
              </Card>
              <Card title="JS" containerStyle={{ flex: 1}}>
                <Image source={ JS } style={styles.expertise_icon} ></Image>
              </Card>
              <Card title="Gatling" containerStyle={{ flex: 1}}>
                <Image source={ GATLING } style={styles.expertise_icon} resizeMode='contain'></Image>
              </Card>
              </View>
          </View>
        }
        />
      </View>
    
    
  );
}

class IntegrationScreen extends React.Component<Props, State>{
  constructor(props:any){
    super(props);
    this.state = {
      renderUnity: false
    }
  }

  private onToggleUnity(){
    this.setState({ renderUnity: !this.state.renderUnity});
  }

  render(){
    const {renderUnity} = this.state;
    let unityElement: JSX.Element;

    if(renderUnity){
      unityElement = (
        <UnityView style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
        </UnityView>
      );
    }
    else{
      unityElement = (
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>This button will launch Unity AR inside this React Native App.</Text>
      );
    }
    return (
      <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
        {unityElement}
        <Button title="Toggle Unity" onPress={this.onToggleUnity.bind(this)}></Button>
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header
        centerComponent={{ text: 'TERP', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#800000',
          justifyContent: 'space-around'
        }}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Integration') {
              iconName = focused ? 'star' : 'star-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#800000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Integration" component={IntegrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profile_picture: {
    width: 100,
    height: 150,
  },
  profcontainer: {
    paddingTop: 50,
    paddingLeft: ((Dimensions.get('window').width)/2) - 50
  },
  container: {
    flex: 1
  },
  name_container: {
    paddingTop: 5,
    paddingLeft: ((Dimensions.get('window').width)/2) - 130,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#DCDCDC",
    padding: 10,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  itemtext: {
    fontSize: 12
  },
  header: {
    fontSize: 15,
    padding: 5
  },
  section_container: {
    marginVertical: 4 
  },
  expertise_icon: {
    width: 60,
    height: 75,
  },
  expertise_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default App;
