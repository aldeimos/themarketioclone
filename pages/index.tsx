import Main from '../modules/Main';
import { wrapper } from '../store';
import { getBlogPosts } from '../store/actions/blog';
import { getCategories } from '../store/actions/sexCategory';

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store, query }) => {
  try {
    await Promise.all([getCategories()(store.dispatch), getBlogPosts()(store.dispatch)]);
  } catch (error) {
    console.log(`Failed to fetch main page data: ${error}`);
  }
  return { props: {} };
});

export default Main;
