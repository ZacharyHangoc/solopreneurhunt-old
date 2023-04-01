import { Input, Flex, Button } from "@chakra-ui/react";
import AiOutlineSearch from "react-icons";
export default function SearchBar() {
  return (
    <Flex m={5} justifyContent={"center"}>
      <Input htmlSize={30} width="auto" />
      <Button width={"50px"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Flex>
  );
}
