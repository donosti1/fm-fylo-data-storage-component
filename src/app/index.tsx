import React from "react";
import {Image, Progress, Stack, Text} from "@chakra-ui/react";

const App: React.FC = () => {
  const Button = (props: any) => {
    const link = `assets/icon-${props.title}.svg`;

    return (
      <Stack backgroundColor="primary.800" borderRadius="md" justifyContent="center" padding={3}>
        <Image
          alt={props.title}
          height={props.title == "document" ? [6, 5] : [5, 4]}
          src={link}
          width={[6, 5]}
        />
      </Stack>
    );
  };

  return (
    <Stack
      backgroundColor="primary.800"
      backgroundImage={["url('/assets/bg-mobile.png')", "url('/assets/bg-desktop.png')"]}
      backgroundPosition={["50% 50%", "50% 120%"]}
      backgroundRepeat={["no-repeat", "no-repeat"]}
      backgroundSize={["auto", "contain"]}
      flex={1}
      height="100vh"
      justifyContent="center"
      role="main"
    >
      <h1 style={{display: "none"}}>Frontend Mentor</h1>
      <Stack
        alignItems="flex-end"
        alignSelf="center"
        direction={["column", "row"]}
        justifyContent="space-between"
        paddingX={[6, 0]}
        spacing={6}
        textAlign="center"
        width={["100%", "container.md"]}
      >
        <Stack
          backgroundColor="primary.700"
          borderRadius="lg"
          borderTopRightRadius="80px"
          paddingX={[6, 8]}
          paddingY={[10, 8]}
          spacing={8}
          width={["100%", 72]}
        >
          <Image alt="logo" src="/assets/logo.svg" width={28} />
          <Stack direction="row" spacing={3}>
            <Button title="document" />
            <Button title="folder" />
            <Button title="upload" />
          </Stack>
        </Stack>
        <Stack
          alignItems="flex-start"
          backgroundColor="primary.700"
          borderRadius="lg"
          flex={1}
          paddingX={[6, 8]}
          paddingY={[10, 8]}
          position="relative"
          width={["100%", "auto"]}
        >
          <Stack direction="row" spacing={[1, 2]}>
            <Text color="primary.400" fontSize={["xs", "sm"]} fontWeight="400">
              You’ve used <strong>815 GB</strong> of your storage
            </Text>
          </Stack>
          <Progress
            backgroundColor="primary.800"
            borderColor="primary.800"
            borderRadius="lg"
            borderWidth={2}
            size="lg"
            value={82}
            width="100%"
          />
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Text color="whiteAlpha.900" fontSize="xs" fontWeight="700">
              0 GB
            </Text>
            <Text color="whiteAlpha.900" fontSize="xs" fontWeight="700">
              1000 GB
            </Text>
          </Stack>
          <Stack
            alignItems="center"
            alignSelf="center"
            backgroundColor="white"
            borderBottomLeftRadius="lg"
            borderBottomRightRadius={["lg", 0]}
            borderTopRadius="lg"
            direction="row"
            id="usedStorage"
            paddingX={[5, 4]}
            paddingY={[3, 2]}
            position={["absolute", "absolute"]}
            right={[null, 8]}
            top={["80%", "-35%"]}
          >
            <Text color="primary.800" fontSize="3xl" fontWeight="700">
              185
            </Text>
            <Text color="primary.500" fontSize="xs" fontWeight="700">
              GB LEFT
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
