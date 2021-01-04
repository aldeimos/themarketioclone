import Main from '../modules/Main';
import { wrapper } from '../store';
import { getManNewestProducts, getWomenNewestProducts } from '../store/actions/product';
import { getCategories } from '../store/actions/sexCategory';

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store, query }) => {
  try {
    await Promise.all([
      getCategories()(store.dispatch),
      getWomenNewestProducts()(store.dispatch),
      getManNewestProducts()(store.dispatch)
    ]);
  } catch (error) {
    console.log(`Failed to fetch sexCategories: ${error}`);
  }
  return { props: { kek: 'mem' } };
});

export default Main;
