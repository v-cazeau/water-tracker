import { useState, useEffect } from "react"; 
import { NativeBaseProvider, Box, Toast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage"
import Title from "./src/components/Title.jsx";
import Goals from "./src/components/Goals.jsx";
import Tracker from "./src/components/Tracker.jsx";
import Controls from "./src/components/Controls.jsx";

export default function App() {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2200)

  const getPreviousIntake = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value) {
      setIntake(JSON.parse(value)); 
    }
  }
  
  const setPreviousIntake = async () => {
    if (intake){
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(intake));
    }
  }

  useEffect(() => {
    getPreviousIntake();
  }, []); 

  useEffect(() => {
    setPreviousIntake(); 
    if(intake >= goal){
      Toast.show({
        title: "🎊🎊",
        description: "You met your water intake goal!!!",
        bg: "blue.400",
        w: 360, 
        h: 90,
        p: 16
      })
    }
  }, [intake]); 
  
  return (
   <NativeBaseProvider>
    <Box flex= {1} bg= "#151926" alignItems= "center" justifyContent = "flex-start">
     <Box height = {50} width = "100%" bg = "#29313C" > </Box>
      <Title />
      <Goals goal = {goal} />
      <Tracker intake = {intake} goal = {goal} setIntake={Tracker}/>
      <Controls intake = {intake} setIntake= {setIntake} />
     </Box>
   </NativeBaseProvider>
  );
}
