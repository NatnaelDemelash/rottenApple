import { Center, Image, Stack, Text } from "@chakra-ui/react";
import error from "../../assets/404.png";

const NotFound = () => {
  return (
    <Center>
      <Stack justifyContent="center" alignItems="center" marginTop={20}>
        <Image src={error} boxSize="250px" />
        <Text fontWeight={700} fontSize={42}>
          Page Not Found! Please check your route again.{" "}
        </Text>
      </Stack>
    </Center>
  );
};

export default NotFound;
