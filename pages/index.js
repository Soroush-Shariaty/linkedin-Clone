import React from "react";
import LoadingContainer from "./../containers/loadingContainer/LoadingContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const IndexPage = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.email) {
      router.push("/feed");
    } else {
      router.push("/");
    }
  }, []);
  return <LoadingContainer />;
};

export default IndexPage;
