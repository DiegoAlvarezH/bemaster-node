// Imports
const githubService = require('../services/githubService');

// Handles the request to obtain and submit the main repositories
exports.getTopRepositories = async (req, res) => {
  try {
    const repositories = await githubService.getTopRepositories();
    res.json(repositories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
