import React from "react";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
interface MatchParams {
  userId: number
}

const UserDetail = () => {
  const { userId } = useParams();
  
  return <div>{userId}</div>;
};

export default UserDetail;
