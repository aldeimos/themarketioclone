import { Main } from '../modules/Main';
import { wrapper } from '../store';
import { getCategories } from '../store/actions/sexCategory';

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store, query }) => {
  try {
    await getCategories()(store.dispatch);
  } catch (error) {
    console.log(`Failed to fetch sexCategories: ${error}`);
  }
  return { props: { kek: 'mem' } };
});

export default Main;
