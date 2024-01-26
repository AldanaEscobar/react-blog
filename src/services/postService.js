import axios from "axios";

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://dummyapi.io/data/v1/post', {
      headers: {
        'app-id': '65b41628bc244e0625759725',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export default fetchPosts;