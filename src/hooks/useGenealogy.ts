import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const API_URL = "https://yahwe-eita-api-dev.azurewebsites.net/api/geneology";

const fetchGenealogy = async (user_id: string, token: string) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        user_id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching genealogy:", error);
    throw error;
  }
};

export const useGenealogy = (user_id: string) => {
  const token = useSelector((state: RootState) => state.user.token);

  return useQuery({
    queryKey: ["genealogy", user_id, token],
    queryFn: async () => {
      if (token && user_id) {
        const data = await fetchGenealogy(user_id, token);
        return data;
      }
      throw new Error("No token or user_id found");
    },
    enabled: !!token && !!user_id,
  });
};
