import { createAction, props } from '@ngrx/store';
import { BookRequiredProps } from '@book-co/shared-models';

export const enter = createAction('[Books Page] Enter');

export const selectBook = createAction(
  '[Books Page] Selected Book',
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction('[Books Page] Selected Book');

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ book: BookRequiredProps }>()
);

export const udpateBook = createAction(
  '[Books Page] Update Book',
  props<{ bookId: string; changes: BookRequiredProps }>()
);

export const deleteBook = createAction(
  '[Books Page] Delete Book',
  props<{ bookId: string }>()
);
