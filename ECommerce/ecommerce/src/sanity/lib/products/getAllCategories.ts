import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"
  ] | order(name asc)`)

  try {
    // use sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    // Return list of categories or empty array if none found
    return categories.data || []
  }
  catch (err) {
    console.error("Error fetching categories", err);
    return [];
  }
}