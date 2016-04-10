export const SORT_BY_YEAR = 'SORT_BY_YEAR';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';

export const MOVIE_SORT = {
  [SORT_BY_YEAR]: (todos)=> todos.sort((a, b)=> {
    if (a.year < b.year) {
      return 1;
    }
    if (a.year > b.year) {
      return -1;
    }
    return 0;
  }),
  [SORT_BY_RATING]: (todos)=> todos.sort((a, b)=> {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  }),
  [SORT_BY_TITLE]: (todos)=> todos.sort((a, b)=> {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
};
