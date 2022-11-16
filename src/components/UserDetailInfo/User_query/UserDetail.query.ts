import { useQuery } from '@tanstack/react-query';
import UserDetailRepository from './UserDetail.repository';

export const useGetUserDetailQuery = (userId: string) => {
  return useQuery(
    ['GetUserDetail', userId],
    async () => {
      return await UserDetailRepository.getUserDetail(
        userId
      )
      .then(async (res)=>
        {          
          const data = await UserDetailRepository.getUserSetting(res.data[0].uuid)
          res.data[0] = {...res.data[0], userSetting: data.data[0]}
          return res
        }
      )
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
