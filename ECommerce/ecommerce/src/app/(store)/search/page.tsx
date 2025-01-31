async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  return <div>Showing results for {query}</div>;
}

export default SearchPage;
