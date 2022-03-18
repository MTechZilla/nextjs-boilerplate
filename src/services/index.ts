import invokeApi, { $axiosV1 } from "@/utils/api";

export const hello = async (): Promise<unknown> => {
	try {
		const resp = await invokeApi($axiosV1, "/hello");
		return resp;
	} catch (error) {
		throw error;
	}
};
