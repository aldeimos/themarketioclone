import Search from '../../modules/Search';
import { wrapper } from '../../store';
import { getCategories } from '../../store/actions/sexCategory';

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store, query }) => {
  try {
    await getCategories()(store.dispatch);
  } catch (error) {
    console.log(`Failed to fetch main page data: ${error}`);
  }
  return {
    props: {
      query: query.query || ''
    }
  };
});

export default Search;
