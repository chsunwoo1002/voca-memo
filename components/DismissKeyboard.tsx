import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function DismissKeyboard({ children }: any) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
