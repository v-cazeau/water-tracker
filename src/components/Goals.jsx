import { Box, InfoIcon, ArrowUpIcon, ArrowDownIcon, Text } from 'native-base'; 
// import { Pressable } from 'react-native';

export default function Goals({ goal, setGoal }) {
    return (
        <Box height={100} width= "100%" alignItems = "center" justifyContent="center">
            <Text color="blue.300" fontSize="lg">
                {/* <Pressable onPress={() => setGoal(goal + 500)}>
                    <ArrowUpIcon color = "blue.100"/> {' '}
                </Pressable> */}
                <InfoIcon color = "blue.300" mr={2} />
                Water Target: {goal} ml {' '}
                {/* <Pressable onPress={() => setGoal(goal - 500)}>
                    <ArrowDownIcon color="blue.100"/> 
                </Pressable> */}
            </Text>
        </Box>
    )
}