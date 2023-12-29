import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { mutateLogin } from "./mutate";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutateLogin,
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    await mutate();
    localStorage.setItem("guest_session_id", data?.guest_session_id);
    navigate("/home");
  };

  return (
    <Flex justifyContent="center" alignItems="center" h="70vh">
      <Card
        maxW="md"
        h="200px"
        boxShadow="lg"
        background="#748ffc"
        color="white"
      >
        <CardBody>
          <Text fontSize={26} fontWeight={500} textAlign="center">
            Welcome! Login by registering as a guest below{" "}
          </Text>
        </CardBody>
        <Button background="#ffa94d" onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </Flex>
  );
};

export default Auth;
