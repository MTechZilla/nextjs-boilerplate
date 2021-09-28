import BasicLayout from "@/components/BasicLayout";
import { Heading, Text, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<BasicLayout>
				<Flex h="50vh" w="100%" direction="column" justify="center" align="center">
					<Heading>Mtechzilla</Heading>
					<Text>Nextjs boilerplate</Text>
				</Flex>
			</BasicLayout>
		</>
	);
};

export default Home;
