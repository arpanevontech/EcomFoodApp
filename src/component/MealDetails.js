import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils/theme';

export default function MealDetails({duration,complexity,affordability,style, textstyle}) {
    return (
      <View style={[styles.details, style]}>
        <Text style={[styles.inputDetails,textstyle]}>{duration} </Text>
        <Text style={[styles.inputDetails,textstyle]}>{complexity.toUpperCase()} </Text>
        <Text style={[styles.inputDetails,textstyle]}>{affordability.toUpperCase()}</Text>
      </View>
    );
  } 
  
  const styles = StyleSheet.create({
    details: {
      flexDirection: "row",
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
  
    inputDetails: {
      fontFamily: "serif",
      fontSize: 14,
      fontWeight: "550",
      textAlign: "center",
      color: COLORS.primary,
      marginHorizontal: 5,
    },
  
  });
  