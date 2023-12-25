import { HStack, Switch, useColorMode } from "@chakra-ui/react";

import { IoIosMoon } from "react-icons/io";

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <IoIosMoon size={25} />
    </HStack>
  );
};

export default ColorModeSwitcher;
