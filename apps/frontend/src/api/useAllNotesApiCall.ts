import axios from "axios";
import { BASE_URL } from "../env";
import { INotes } from "../types/notes";
import { getToken } from "../utils/getToken";

export const fetchAllNotesApiCall = async ({
  pageParam,
}: {
  pageParam: number | undefined;
}): Promise<INotes[]> => {
  const config = getToken();

  const { data } = await axios.get(
    `${BASE_URL}/api/notes?page=${pageParam}`,
    config
  );
  return data;
};
