const getCategoryFromUrl = search => {
  return search.split('=')[1];
};

export default getCategoryFromUrl;
