import { useContext } from "react";
import "./style.css";
// import "../../../style/style.css";
import { Context } from "../Context/Context";
import { BiSolidUser } from "react-icons/bi";
import logo from "../../../assets/donation-logo.svg";
import foot from "../../../assets/footer.svg";
import userImg from "../../../assets/Ellipse 32.svg";

const cardData = [
  {
    id: 1,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 2,
    name: "Muhammad Babar Khan",
    money: 100000.0,
    image: <BiSolidUser />,
  },
  {
    id: 3,
    name: "Muhammad Babar Khan",
    money: 1000000.0,
    image: <BiSolidUser />,
  },
  {
    id: 4,
    name: "Muhammad Babar Khan",
    money: 20000.0,
    image: <BiSolidUser />,
  },
  {
    id: 5,
    name: "Muhammad Babar Khan",
    money: 40000.0,
    image: <BiSolidUser />,
  },
  {
    id: 6,
    name: "Muhammad Babar Khan",
    money: 30000.0,
    image: <BiSolidUser />,
  },
  {
    id: 7,
    name: "Muhammad Babar Khan",
    money: 50000.0,
    image: <BiSolidUser />,
  },
  {
    id: 8,
    name: "Muhammad Babar Khan",
    money: 60000.0,
    image: <BiSolidUser />,
  },
  {
    id: 9,
    name: "Muhammad Babar Khan",
    money: 80000.0,
    image: <BiSolidUser />,
  },
  {
    id: 10,
    name: "Muhammad Babar Khan",
    money: 70000.0,
    image: <BiSolidUser />,
  },
  {
    id: 11,
    name: "Muhammad Babar Khan",
    money: 10000000.0,
    image: <BiSolidUser />,
  },
  {
    id: 12,
    name: "Muhammad Babar Khan",
    money: 90000.0,
    image: <BiSolidUser />,
  },
  {
    id: 13,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 14,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 15,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 16,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 17,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 18,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 19,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
  {
    id: 20,
    name: "Muhammad Babar Khan",
    money: 10000.0,
    image: <BiSolidUser />,
  },
];
const emptyCardData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
const UserCard = () => {
  const context = useContext(Context);
  console.log("card-context", context);

  const sortedCardData = [...cardData].sort((a, b) => b.money - a.money);

  const topDonations = sortedCardData.slice(0, 20);

  return (
    <div className="container">
      <div className="header">
        {/* <h2>Logo</h2> */}
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="divider-container">
        <div className="left-container">
          <div className="empty-card-container">
            {emptyCardData.map((e) => (
              <div className="empty-card-wrapper" key={e.id}>
                <div className="empty-card"></div>
              </div>
            ))}
          </div>
          <div className="empty-large-card"></div>
        </div>
        <div className="right-container">
          <div className="card-heading">
            <h3>
              TOP <span style={{ color: "#FBC406" }}>20 </span>DONATIONS BOARD
            </h3>
          </div>
          <div className="card-container">
            {cardData.length === 0 ? (
              <div className="no-record">No Record Found</div>
            ) : (
              <>
                <div className="top-cards-grid">
                  {topDonations.slice(0, 3).map((card, index) => (
                    <div className="top-card" key={card.id}>
                      {/* <div className="top-card-image">{card.image}</div> */}
                      <img src={userImg} alt="Img" className="top-card-image" />
                      <div className="top-card-details">
                        <div className="top-card-name">{card.name}</div>
                        <div className="top-card-money">
                          {" "}
                          {card.money.toLocaleString()}
                        </div>
                        <div className="top-card-index">{card.id}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cards-grid">
                  {topDonations.slice(3).map((card, index) => (
                    <div
                      className={`card ${
                        index % 2 === 0 ? "left-card" : "right-card"
                      }`}
                      key={card.id}
                    >
                      {/* <div className="card-image">{card.image}</div> */}
                      <img src={userImg} alt="Img" className="card-image" />
                      <div className="card-details">
                        <div className="card-name">{card.name}</div>
                        <div className="card-money">
                          ${card.money.toLocaleString()}
                        </div>
                      </div>
                      <div className="card-index">{card.id}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <div className="footer-text">powered by ZIE PIE LLC</div> */}
        <img src={foot} alt="footer" />
      </div>
    </div>
  );
};

export default UserCard;
