import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const PollItem = ({ id }) => {
  // Truy cập dữ liệu từ Redux store
  const question = useSelector((state) => state.questions[id]);
  const author = question?.author || "";
  const time = moment(question?.timestamp).format("h:mm A | MM/DD/YYYY");

  return (
    <div className="poll-item">
      <p>{author}</p>
      <p>{time}</p>

      <Link to={`poll/${id}`}>Show</Link>
    </div>
  );
};

export default PollItem;
