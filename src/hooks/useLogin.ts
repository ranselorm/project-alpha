import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";
import { useNavigate } from "react-router-dom";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  data: any;
}

interface DecodedToken {
  id: string;
  name: string;
  nickname: string;
  email: string;
  picture: string;
}

const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>(
    "https://yahwe-eita-api-dev.azurewebsites.net/api/login/admin",
    credentials
  );
  return data;
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { access_token } = data.data;
      console.log(access_token, "TOKEN");
      try {
        const decoded: DecodedToken = jwtDecode(data?.data?.id_token);
        console.log(decoded, "DECODED");
        dispatch(
          login({
            user: {
              id: decoded.id,
              email: decoded.email,
              name: decoded.name,
              nickname: decoded.name,
              picture: decoded.picture,
              role: decoded.name,
            },
            token: access_token,
          })
        );
        localStorage.setItem("user", JSON.stringify({ email: decoded.email }));
        localStorage.setItem("token", access_token);
        navigate("/");
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
