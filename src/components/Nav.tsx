import "@fontsource/rajdhani/500.css";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <HStack justifyContent="space-between" paddingY={5} paddingX={10}>
      <HStack>
        <Image src={logo} boxSize="40px" />
        <Text fontSize="25px">rottenApple</Text>
      </HStack>

      <ColorModeSwitcher />
    </HStack>
  );
};

export default Nav;
