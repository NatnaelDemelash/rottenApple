import "@fontsource/rajdhani/500.css";
import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <HStack justifyContent="space-between" paddingY={5} paddingX={10}>
      <HStack>
        <Image src={logo} boxSize="40px" />
        <Text fontSize={25}>
          <Link to="/">RottenApple</Link>
        </Text>
      </HStack>

      <HStack>
        <Stack direction="row" spacing={10} marginX={16}>
          <Link to="/">
            <Text color="#ffc078" fontSize={17} fontWeight={600}>
              Home
            </Text>
          </Link>

          <Link to="/rated">
            <Text color="#ffc078" fontSize={17} fontWeight={600}>
              Rated
            </Text>
          </Link>

          <Link to="/auth">
            <Text color="#ffc078" fontSize={17} fontWeight={600}>
              Auth
            </Text>
          </Link>
        </Stack>

        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

export default Nav;
