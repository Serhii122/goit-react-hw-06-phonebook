import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

import css from "./filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(store => store.filter.filter);
  

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={handleFilterChange}
      />
    </label>
  );
};