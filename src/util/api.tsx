import axios, { AxiosResponse } from 'axios';

interface KeywordData {
  text: string;
  category: string;
  start_offset: number;
  end_offset: number;
}

interface KeywordResponse {
  success: boolean;
  result: {
    data: KeywordData[];
  };
}

const BASE_URL: string = process.env.REACT_APP_BASE_URL!;

export const getData = async <T,>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(
    `${BASE_URL}/${endpoint}`,
    {
      params: params,
    }
  );
  return response.data;
};

export const postData = async <T, R>(
  endpoint: string,
  data: T,
  params: Record<string, any> = {}
): Promise<R> => {
  const response: AxiosResponse<R> = await axios.post(
    `${BASE_URL}/${endpoint}`,
    data,
    {
      params: params,
    }
  );
  return response.data;
};

export const deleteData = async (
  endpoint: string,
  params: Record<string, any> = {}
): Promise<void> => {
  await axios.delete(`${BASE_URL}/${endpoint}`, {
    params: params,
  });
};

export const putData = async <T,>(
  endpoint: string,
  data: T,
  params: Record<string, any> = {}
): Promise<void> => {
  await axios.put(`${BASE_URL}/${endpoint}`, data, {
    params: params,
  });
};

// 비속어 확인
export const checkForSlang = async (document: string): Promise<boolean> => {
  const response = await axios.post<KeywordResponse>(
    'https://api.matgim.ai/54edkvw2hn/api-keyword-slang',
    { document },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': process.env.REACT_APP_API_KEY,
      },
    }
  );

  // data 배열이 비어 있으면 비속어가 없음을 의미

  return response.data.result.data.length > 0;
};


