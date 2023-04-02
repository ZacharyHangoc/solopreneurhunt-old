import { Wrap, Flex, Button, WrapItem } from "@chakra-ui/react";
import CatButton from "./CatButton";

const categories = [
  "Copywriting",
  "Twitter Growth",
  "Twitter Monetize",
  "Indie Hacking",
  "Storytelling",
  "SEO",
];
export default function Categories() {
  return (
    <Flex justifyContent={"center"} m={"0"}>
      <Wrap m={"0"}>
        {categories.map((category) => {
          return (
            <WrapItem m={"0"}>
              <CatButton name={category} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}
