// All the react native component import 

import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

////////////////////////// -----------xxxxxxxxxx-------- End

// All The third party imports 
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

//////////////// ------------------xxxxxxxxxxx---------- End

// All the varaibles
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const options: any = ["Welcome Set", "Placement Type", "Settings", "Stop"];

/////////// -------------xxxxxxxxxx---------- End

// Main Export fuction
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

////////// ----------xxxxxxxxx---------- End  


// Function to fetch Api 

const Api = ()=> {
 console.log(
  "Fatch Api here plzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
 );
}


////////////// -------xxxxxxxxxx---------- End


// Ui start
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <View style={{  height: windowHeight, alignItems: 'center', justifyContent: 'center', bottom: 5 }}>


            <View style={{ flexDirection: 'row', alignSelf: 'flex-end',  }}>

            {/** The main button where the api fuction will be active */}

            <TouchableOpacity 
            onPress={Api}
            style={{ backgroundColor: 'white', borderRadius: 10, height: 40, width: 100, justifyContent: 'center', elevation: 5, alignItems: 'center', marginRight: 10 }}>
              <Text style={{fontSize:12}}>{options[0]}</Text>
            </TouchableOpacity>

            {/** -----xxxxxxxxxx------- End */}

            </View>

           <LottieView
            style={{ height: windowHeight / 2, alignSelf: 'center',}}
            source={require('./animations/bot.json')} autoPlay loop 
            />

        {/** The mic button dont use this */}
          <TouchableOpacity>
          <LottieView
          style={{height:100,backgroundColor:'transparent'}} 
           source={require('./animations/mic.json')} autoPlay loop 
           />
          </TouchableOpacity>
        {/** ---------xxxxxxxx----------- End */}

        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
