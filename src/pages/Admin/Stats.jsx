import { startTransition } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import AppLayout from "../../components/Layout/AppLayout";
import STATS_LIST from "./StatsList";
import { Link, useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();

  return (
    <AppLayout isLoggedIn={true}>
      <Container fluid className="px-sm-5 px-3">
        <div className="d-flex justify-content-end mt-sm-5 mt-4 mb-3 mx-sm-0 mx-4 mobileText_align">
          <Link className='' to="">Welcome Deputy Commissioner, Bahawalpur<AiOutlineRight /></Link>
        </div>

        <div className="statsWrapper mb-5 mt-4 mt-sm-5">
          {STATS_LIST.map((item) => (
            <Link
              key={item.title}
              className="d-flex cursor-pointer statsCard"
              onClick={(event) => {
                event.preventDefault();
                startTransition(() => {
                  navigate(item.link);
                });
              }}
            >
              <img src={item.img} height={120} alt="stats" />
              <div
                className="d-flex flex-column justify-content-center px-4 text-white w-100"
                style={{ backgroundColor: item.color }}
              >
                <h6 className="fw-semibold fs-6 mb-1">{item.title}</h6>
                <h3 className="fw-bold fs-1 mb-0">{item.count}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </AppLayout>
  );
};

export default Stats;
