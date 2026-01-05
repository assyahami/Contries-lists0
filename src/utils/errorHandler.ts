import axios from "axios";

export const handleApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status || null;
        const data = error.response?.data || {};

        switch (status) {
            case 400:
                return {
                    message:
                        (data).msg ||
                        (Array.isArray(data) ? data[0] : undefined) ||
                        (data.result?.resultmsg as string) ||
                        "Bad Request. Please check your input.",
                    statusCode: status,
                };
            case 401:
                return { message: "Unauthorized. Please log in.", statusCode: status };
            case 500:
                return { message: "Server error. Please try again later.", statusCode: status };
            default:
                return { message: "An unknown error occurred.", statusCode: status };
        }
    } else {
        return { message: "Network error, please try again later.", statusCode: null };
    }
};
