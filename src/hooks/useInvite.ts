import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface InvitePayload {
  phone: string;
}

const sendInvite = async (payload: InvitePayload, token: string) => {
  const response = await axios.post(
    "https://yahwe-eita-api-dev.azurewebsites.net/api/invite",
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export const useInvite = () => {
  const token = useSelector((state: RootState) => state.user.token);

  return useMutation({
    mutationFn: (payload: InvitePayload) => sendInvite(payload, token!),
  });
};
