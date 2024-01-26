import axios from "axios";
const getUserInfo = async (userId) => {
    try {
      const response = await axios.get(`https://dummyapi.io/data/v1/user`, {
        headers: {
          "app-id": "65b41628bc244e0625759725",
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };
  
  export default getUserInfo
