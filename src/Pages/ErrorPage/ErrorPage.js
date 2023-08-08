import classes from "./ErrorPage.module.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <div className={classes.ErrorContainer}>
        <h1>An error occurred!</h1>
        <h2>Could not find this page!</h2>
        <div className={classes.button}>
          <Link to="/">Go home</Link>
        </div>
      </div>
    </>
  );
}
export default ErrorPage;
