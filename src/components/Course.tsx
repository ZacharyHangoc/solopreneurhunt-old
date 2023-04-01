import {
  Card,
  Image,
  CardBody,
  Grid,
  Stack,
  IconButton,
  GridItem,
  CardHeader,
  CardFooter,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { TriangleUpIcon } from "@chakra-ui/icons";

export default function Course(props: any) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      m={"3"}
      minH={{ base: "100%", sm: "150px" }}
    >
      <Image
        border={"solid"}
        borderColor={"gray.400"}
        borderRadius={"10%"}
        objectFit="fill"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.img}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.title}</Heading>

          <Text py="2">{props.content}</Text>
        </CardBody>
      </Stack>
      <Grid>
        <GridItem colStart={4}>
          <IconButton
            aria-label="Upvote"
            icon={<TriangleUpIcon />}
          ></IconButton>
        </GridItem>
      </Grid>
    </Card>
  );
}
