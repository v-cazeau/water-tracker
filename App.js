import { NativeBaseProvider, Box } from "native-base";
import { TextComponent } from "react-native";

export default function App() {
  return (
   <NativeBaseProvider>
    <Box flex= {1} bg= "#151926" alignItems= "center" justifyContent = "flex-start">
     <Box height = {50} width = "100%" bg = "#29313C" >
      1
      2
      3
      4
     </Box>
    </Box>
   </NativeBaseProvider>
  );
}
