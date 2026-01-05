import axios from "axios";

import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";

const client: AxiosInstance = axios.create({
    baseURL: `https://restcountries.com/v3.1`,
    responseType: "json",
});



export const DEFAULT_HEADERS: Record<string, string> = {
    "Content-Type": "application/json",
};

const httpRequest = async <T = unknown>(
    options: AxiosRequestConfig
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await client(options);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return Promise.reject(
            err.response ?? err.message ?? err.config ?? err.request
        );
    }
};

class APIRequest {
    static getAuthHeader(
        tokenKey: "accessToken" | "token" = "accessToken"
    ): Record<string, string> {
        const token = localStorage.getItem(tokenKey);

        return token
            ? { Authorization: `Bearer ${token}` }
            : {};
    }

    static async getGetService<T = unknown>(
        url: string
    ): Promise<T> {
        return httpRequest<T>({
            method: "GET",
            url,
            headers: {
                ...DEFAULT_HEADERS,
                ...this.getAuthHeader("token"),
            },
        });
    }

}

export { httpRequest, APIRequest };
