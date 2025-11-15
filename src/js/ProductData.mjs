// src/js/ProductData.mjs

export default class ProductData {
  constructor(jsonPath) {
    this.jsonPath = jsonPath; // path to JSON file
  }

  /**
   * Fetch data from the JSON file
   * @param {string} category - Optional category filter (e.g., "tents")
   * @returns {Promise<Array>} - Array of products
   */
  async getData(category) {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.status}`);
      }
      const data = await response.json();

      // If category is provided, filter by category
      if (category) {
        return data.filter(item => item.category === category);
      }
      return data;
    } catch (error) {
      console.error("Error loading product data:", error);
      return [];
    }
  }
}
