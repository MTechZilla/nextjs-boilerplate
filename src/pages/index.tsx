import BasicLayout from "@/components/BasicLayout";
import { Flex, Heading, Text } from "@chakra-ui/react";

function Home() {
	return (
		<BasicLayout>
			<Flex h="50vh" w="100%" direction="column" justify="center" align="center">
				<Heading>Mtechzilla</Heading>
				<Text>Nextjs boilerplate</Text>
			</Flex>
		</BasicLayout>
	);
}

export default Home;
