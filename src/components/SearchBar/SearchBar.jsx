import css from './SearchBar.module.css';
import { BiSearchAlt } from "react-icons/bi";
import { Field, Form, Formik } from "formik";

export default function SearchBar({onSearch}) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
    <header>
      <Form className={css.searchBar}>
        <Field className={css.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit"><BiSearchAlt className={css.icon}/></button>
      </Form>
      </header>
    </Formik>
  );
}