import React from 'react'
import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import UserDetailInfo from '@src/components/UserDetailInfo';
import { useParams } from 'react-router-dom';
import { useGetUserDetailQuery } from '@src/components/UserDetailInfo/User_query/UserDetail.query';
import axios from 'axios';
import clientAPI from '@src/libs/api/client';

const UserDetail = () => {
  const {userId} = useParams()
  const { data, isLoading, isError } = useGetUserDetailQuery(userId)

  clientAPI.post('/users', {
    email: "2@2d",
    // password: "12341234"
  })
  
  return (
    <Layout>
      <Header title={userId} />
      <PageContainer>
        <UserDetailInfo userId={userId} data={data} isLoading={isLoading} isError={isError}/>
      </PageContainer>
    </Layout>
  )
}

export default UserDetail