import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../utils/theme'

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}> {children}</Text>
        </View>
  )
}

const styles = StyleSheet.create({

    subtitleContainer: {
        borderBottomColor: "#e6dede",
        borderBottomWidth: 1,
        marginHorizontal: 12,
        padding: 8,
        marginVertical: 5,
      },

      subtitle: {
        textAlign: "center",
        fontFamily: "serif",
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: "700",
        marginLeft: 10,
      },
})