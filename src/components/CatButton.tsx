import { Button, ButtonProps, Flex } from "@chakra-ui/react";

export default function CatButton(props: ButtonProps) {
  return (
    <Flex h="20vh" justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.700",
        }}
      >
        {props.name}
      </Button>
    </Flex>
  );
}
