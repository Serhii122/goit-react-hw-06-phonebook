import React from 'react';
import {removeContact} from '../../redux/contacts/contactsSlice';

import { useDispatch } from 'react-redux';

import css from "./contacts.module.css";

export const Contact = ({id, name, number}) => {
const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    const action = removeContact(id);
    dispatch(action);
  };
  return (
  <li className={css.item}>
    <p className={css.text}>
      <span className={css.name}>{name}:</span>
      <span>{number}</span>
    </p>
    <button
      className={css.btn}
      type="button"
      onClick={handleDeleteBtnClick}
    >
      Delete
    </button>
  </li>
  );
}