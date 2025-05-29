import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const API_URL = `${import.meta.env.VITE_BASE_URL}/login/invite`;

const fetchInvitedUsers = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data?.data ?? [];
};

export const useInvitedUsers = () => {
  const token = useSelector((state: RootState) => state.user.token);

  return useQuery({
    queryKey: ["invitedUsers", token],
    queryFn: () => fetchInvitedUsers(token!),
    enabled: !!token,
  });
};
