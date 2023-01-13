import axios from "axios";
import { BASE_URL } from "../env";
import { getToken } from "../utils/getToken";

const fetchNotesListApiCall = async ({
  pageNumber,
}: {
  pageNumber: number;
}) => {
  const config = getToken();

  const { data } = await axios.get(
    `${BASE_URL}/api/notes?_limit=2&_page=${pageNumber}`,
    config
  );
  return data;
};

import { useQuery } from "react-query";
import { INotes } from "../types/notes";

export const useNotesInfiniteQuery = async () => {
  return useQuery<INotes[], Error>(
    ["list-notes"],
    await fetchNotesListApiCall({ pageNumber: 1 })
  );
};
