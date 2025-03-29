import axios from "axios";
import { Iprofile } from "../profile/page";

export const handleGetProfile = async (token: string) => {
  const response: Iprofile = await axios
    .get("http://localhost:3001/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return response;
};

export const handleUpdateProfile = async (
  data: Partial<Iprofile>,
  token: string
) => {
  const response = await axios
    .put("http://localhost:3001/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
  return response;
};
