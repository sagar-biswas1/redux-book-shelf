import React from "react";
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import styles from "./book.module.css";
import {
  addToReadingList,
  markAsFinished,
  deleteFromReadingList,
  removeFromFinishedList,
} from "../../redux/actions/bookActions";
import { useLocation } from "react-router";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis, id } = props.book;
  const dispatch = useDispatch();
  let location = useLocation();

  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {location.pathname === "/reading" && (
          <>
            <HiMinusCircle
              title="Remove from list"
              className={styles.minus_icon}
              onClick={() => dispatch(deleteFromReadingList(id))}
            />
            <HiCheckCircle
              title="Mark as Finish"
              className={styles.check_icon}
              onClick={() => dispatch(markAsFinished(id))}
            />
          </>
        )}

        {location.pathname === "/" && (
          <HiPlusCircle
            title="Add to Reading"
            className={styles.plus_icon}
            onClick={() => dispatch(addToReadingList(props.book))}
          />
        )}
        {location.pathname === "/finish" && (
          <HiMinusCircle
            title="Remove from list"
            className={styles.minus_icon}
            onClick={() => dispatch(removeFromFinishedList(id))}
          />
        )}
      </div>
    </div>
  );
};

export default SingleBook;
