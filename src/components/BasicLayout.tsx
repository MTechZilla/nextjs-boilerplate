import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function BasicLayout({ children }: Props) {
	return (
		<>
			<Head>
				<title>Mtechzilla</title>
				<meta name="description" content="Nextjs boilerplate" />
			</Head>
			<Flex direction="column" w="100%" align="center" minHeight="100vh">
				{children}
			</Flex>
		</>
	);
}
