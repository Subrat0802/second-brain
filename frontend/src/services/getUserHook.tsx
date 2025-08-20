// useGetUser.ts
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./operations/auth";
import { setUserContent } from "../redux/slices/commonStates";

const useGetUser = () => {
  const dispatch = useDispatch();

  const refreshUser = useCallback(async () => {
    try {
      const response = await getUser();
      dispatch(setUserContent(response.data?.data.content));
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return { refreshUser };
};

export default useGetUser;
