import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios";
import { setUsers } from "@/store/userSlice";

const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

const fetchUsers = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data?.data?.users ?? [];
};

export const useUsers = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  return useQuery<any, Error>({
    queryKey: ["users", token],
    queryFn: async () => {
      const users = await fetchUsers(token!);
      dispatch(setUsers(users));
      return users;
    },
    enabled: !!token,
  });
};
