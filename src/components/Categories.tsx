import { Wrap, Flex, Button } from "@chakra-ui/react";
import CatButton from "./CatButton";
export default function Categories() {
  return (
    <Flex justifyContent={"center"}>
      <Wrap>
        <CatButton name="Copywriting" />
        <CatButton name="Twitter Growth" />
        <CatButton name="Twitter Monetize" />
        <CatButton name="Indie Hacking" />
        <CatButton name="Storytelling" />
        <CatButton name="Copywriting" />
      </Wrap>
    </Flex>
  );
}
