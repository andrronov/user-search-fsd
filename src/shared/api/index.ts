import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { APIError, UserInfo } from "@shared/types";

class AxiosService {
  axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }
}

class API extends AxiosService {
  async request<T>(
    config: AxiosRequestConfig,
  ): Promise<[T, null] | [null, APIError]> {
    try {
      const response = await this.axiosInstance.request<T>(config);

      if (!response.data) {
        return [null, { code: 500, message: "No data received" }];
      }

      return [response.data, null];
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return [
            null,
            {
              code: error.response.status,
              message: error.response.data.error || error.message,
            },
          ];
        }
        return [null, { code: 500, message: error.message }];
      }

      return [null, { code: 500, message: "Unknown error" }];
    }
  }

  async getUsers(params: URLSearchParams) {
    return this.request<UserInfo[]>({
      method: "GET",
      url: `/users?${params}`,
    });
  }
}

export const api = new API("https://jsonplaceholder.typicode.com");
