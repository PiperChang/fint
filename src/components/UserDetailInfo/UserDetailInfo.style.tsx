import React from "react";
import { Box } from "@mui/system";

interface Props {
  name: string;
  value: string;
}
export const InfoBox = ({ name, value }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        height: "100%",
      }}
    >
      <div
        style={{
          fontWeight: "600",
          height: "inherit",
          width: "50%",
          borderRight: "1px gray solid",
          marginRight: "8px",
        }}
      >
        {name}
      </div>
      <div style={{ width: "50%" }}>{value}</div>
    </Box>
  );
};
