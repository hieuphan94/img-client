import API from "./api";

export const PageAPI = {
  getPage: async (url) => {
    try {
      return await API.get("/page/" + url);
    } catch (error) {
      console.log(error);
    }
  },
};
