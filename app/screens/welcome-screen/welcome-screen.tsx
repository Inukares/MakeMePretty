import * as React from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Header, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
// import { TextInput } from "react-native-gesture-handler"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
  marginTop: spacing[3]
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}

const GETSTARTED: TextStyle = {
  ...TEXT,
  ...TITLE,
  marginTop: spacing[6]
}
// const CONTENT: TextStyle = {
//   ...TEXT,
//   color: "#BAB6C8",
//   fontSize: 15,
//   lineHeight: 22,
//   marginBottom: spacing[5],
// }
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
    props.navigation,
  ])

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
        <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="Book your beauty service in" />
          <Text style={ALMOST} text=" seconds" />
          <Text style={TITLE} text="!" />
        </Text>
        <Text style={GETSTARTED} preset="header" tx="welcomeScreen.readyForLaunch" />
        {/* somewhere here I'll add fancy wallpaper probably */}
        <View>
          <Input
            placeholder='INPUT WITH CUSTOM ICON'
            rightIcon={
              <Icon
                name='user'
                size={24}
                color={color.dim}
              />
            }
          />

        </View>

      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
