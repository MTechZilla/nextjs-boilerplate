/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import queryClient from "@/utils/client";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}
export default MyApp;
