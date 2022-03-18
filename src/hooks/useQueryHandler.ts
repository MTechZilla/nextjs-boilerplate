import type { QueryFunction, QueryKey } from "react-query";
import { useQuery } from "react-query";
import { TQueryResponse } from "../types/index";

const useQueryHandler = <TData, TError>(
	key: QueryKey,
	fetcher: QueryFunction<TQueryResponse<TData>>
) => {
	const { data, isLoading, isError, error, isSuccess } = useQuery<TQueryResponse<TData>, TError>(
		key,
		fetcher,
		{
			retry: false,
		}
	);

	return { data, isLoading, isError, error, isSuccess };
};

export default useQueryHandler;
