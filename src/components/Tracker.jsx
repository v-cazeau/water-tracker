import { Box, Image, Text, Progress } from "native-base";

export default function Tracker({intake, goal}) {
    return (
        <Box height={400} width="100%" alignItems="center" justifyContent="center">
            <Image 
                size = {200}
                borderRadius={100}
                borderColor="blue.300"
                borderWidth={8}
                mb= {6}
                source = {{
                    uri:"https://wallpaperaccess.com/full/380161.jpg"
                }}
                alt = "A splash of water"
            />
            <Text color = "whitesmoke" fontSize = "2xl" fontWeight="900"> {intake} ml </Text>
            <Box w="90%" maxW="400" mt={8}>
                <Progress size = "2xl" colorScheme="blue" value={intake} max={goal} />
            </Box>
        </Box>
    )
}

