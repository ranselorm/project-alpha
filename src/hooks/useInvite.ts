import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface InvitePayload {
  phone: string;
}

const API_URL = `${import.meta.env.VITE_BASE_URL}/invite`;

const sendInvite = async (payload: InvitePayload, token: string) => {
  const response = await axios.post(API_URL, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const useInvite = () => {
  const token = useSelector((state: RootState) => state.user.token);

  return useMutation({
    mutationFn: (payload: InvitePayload) => sendInvite(payload, token!),
  });
};
