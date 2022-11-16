import React from "react";
import { useParams } from "react-router-dom";
import {Paper, Grid} from "@mui/material"
import { useGetUserDetailQuery } from "./User_query/UserDetail.query";
import { Box } from "@mui/system";
import { InfoBox } from "./UserDetailInfo.style";

const UserDetailInfo = ({userId, data, isLoading, isError}) => {  
  if (isLoading) return <>loading</>
  if (isError) return <>error</>
  
  const userInfo = data.data[0];

  return <div>
    <Paper>   
      <Grid container>
        <Grid item xs={4}>
          <InfoBox name={"이름"} value={userInfo.name} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"성별"} value={userInfo.gender_origin} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"생년월일"} value={new Date(userInfo.birth_date).toLocaleDateString()} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"주소"} value={userInfo.address + userInfo.detail_address} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"이메일"} value={userInfo.email} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"핸드폰"} value={userInfo.phone_number} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"투자 정보 수신"} value={userInfo.userSetting.allow_invest_push ? "동의":"비동의"} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"마케팅 정보 수신"} value={userInfo.userSetting.allow_marketing_push ? "동의":"비동의"} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"가입시각"} value={new Date(userInfo.created_at).toLocaleDateString()} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"활성화 여부"} value={userInfo.userSetting.is_active ? "O":"X"} />
        </Grid>
        <Grid item xs={4}>
          <InfoBox name={"직원 여부"} value={userInfo.userSetting.is_staff ? "O":"X"} />
        </Grid>
      </Grid>
    </Paper>
  
  </div>;
};

export default UserDetailInfo;
