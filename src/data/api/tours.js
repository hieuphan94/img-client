import API from "./api";

export const TourAPI = {
  getTour: async (url) => {
    try {
      const result = await API.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
  getAllTour: async (url) => {
    try {
      const result = await API.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
  getTourByCategory: async (url, category) => {
    try {
      const result = await API.get(url, category);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
};
