import API from "../api";

export const PagesAPI = {
  getPageBySlug: async (url) => {
    try {
      const result = await API.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
  getAllPage: async (url) => {
    try {
      const result = await API.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
};
