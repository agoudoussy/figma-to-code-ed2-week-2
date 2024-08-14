import { useNavigate, useSearchParams } from "react-router-dom";

export const useNavigationParams = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const addQuerySearchParams = (queryKey: string, queryValue: string) => {
    setSearchParams({ [queryKey]: queryValue });
  };
  let queriesArray: any = [];
  const getParams = (key: string) => searchParams.get(key);
  const getSearchQueries = () => {
    let queryData: any = null;
    Array.from(searchParams.keys()).forEach((element) => {
      queryData = {
        ...queryData,
        [element]: getParams(element),
      };
    });

    return queryData;
  };

  const writeSearchQueries = <T>(queries: T) => {
    if (!queries) {
      throw new Error("provided queries");
    }

    for (let query in queries) {
      queriesArray.push(`${query}=${queries[query]}`);
    }
    return `?${queriesArray.join("&")}`;
  };
  const performWriteQueriesAndNavigate = <T = any>(queries: T) =>
    navigate(writeSearchQueries(queries));
  const locationContains = (key: string) => {
    return location.href.includes(key);
  };

  const queryParamsEquals = (queryValue: string, searchValue: string) => {
    return queryValue === searchValue;
  };

  const removeQuery = () =>
    navigate(window.location.pathname, { replace: true });

  return {
    locationContains,
    queryParamsEquals,
    getSearchQueries,
    addQuerySearchParams,
    searchParams,
    performWriteQueriesAndNavigate,
    removeQuery,
    navigate,
  };
};
