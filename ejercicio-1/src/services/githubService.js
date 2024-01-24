const axios = require('axios');
// API of github 
const API_URL = 'https://api.github.com/users/google/repos';

// function to return the main repositories 
// stargazers_count its property of API
exports.getTopRepositories = async () => {
  const response = await axios.get(API_URL);
  return response.data
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10);
};