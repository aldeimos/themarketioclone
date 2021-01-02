type FetchOptions = {
  method: string;
};

export const makeApiCall = async (route: string, options: FetchOptions): Promise<any> => {
  console.log(`${process.env.API_URI}/${route}`);
  return await fetch(`${process.env.API_URI}/${route}`, { ...options }).then((response) =>
    response.json()
  );
};
