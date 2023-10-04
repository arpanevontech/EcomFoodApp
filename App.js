import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigation from './src/screens/AppNavigation';
import {COLORS, FONT, MARGIN, SIZES} from './src/utils/theme';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
    <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} translucent={true} hidden={false}/>
      <AppNavigation />
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  heading: {
    fontSize: SIZES.extraLarge,
    fontWeight: SIZES.headWeight,
    fontFamily: FONT.font,
    color: COLORS.headingColor,
    textAlign: 'center',
    marginTop: MARGIN.top,
  },
});

export default App;
