import React from "react";
import Gogole from "../../../assets/Gogle.png";
import Netflix from "../../../assets/Netfix.png";
import Airbnb from "../../../assets/Airbnb.png";
import Amazon from "../../../assets/Amazon.png";
import Facebook from "../../../assets/Facebook.png";
import Grab from "../../../assets/Grab.png";
import Background from "../../../assets/Background.png";
import Student from "../../../assets/Student.png";

function Section2Otabek() {
  return (
    <div
      style={{
        color: "#696984",
        fontSize: "28px",
        marginTop: "100px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
    <div style={{ textAlign: "center" }}>
  <h1>Trusted by 5,000+ Companies Worldwide</h1>
</div>
      <div
    style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "60px",
    width: "100%",
  }}
      >
        <a target="_blank" href="https://www.google.com/?hl=ru">
          <img style={{height:"30px",width:"auto"}} src={Gogole} alt="" />
        </a>
        <a target="_blank" href="https://www.netflix.com/uz-ru/">
          <img style={{height:"30px",width:"auto"}} src={Netflix} alt="" />
        </a>
        <a target="_blank" href="https://www.airbnb.ru/">
          <img style={{height:"30px",width:"auto"}} src={Airbnb} alt="" />
        </a>
        <a target="_blank" href="https://www.amazon.com/">
          <img style={{height:"30px",width:"auto"}} src={Amazon} alt="" />
        </a>
        <a target="_blank" href="https://www.facebook.com/?locale=ru_RU">
          <img style={{height:"30px",width:"auto"}} src={Facebook} alt="" />
        </a>
        <a target="_blank" href="https://www.grab.com/sg/">
          <img style={{height:"30px",width:"auto"}} src={Grab} alt="" />
        </a>
      </div>
      <div>
        <h1
          style={{
    color: "#2F327D",
    textAlign: "center",
    marginTop: "100px",
  }}
        >
          What is <span style={{ color: "#F3AC50"  }}>Skilline?</span>
        </h1>
        <p
       style={{
  fontSize: "16px",
  width: "700px",
  margin: "20px auto 0",
  textAlign: "center",
}}
        >
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      <div
  style={{
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  marginTop: "100px",
  marginBottom: "200px",
}}
      >
        <div
          style={{
            backgroundImage: `url(${Background})`,
            width: "600px",
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "32px", color: "white", marginTop: "132px" }}>
            FOR INSTRUCTORS
          </h2>
          <button
            type="submit"
            style={{
              color: "white",
              padding: "20px 30px 24px 30px",
              backgroundColor: "transparent",
              borderRadius: "80px",
              marginTop: "13px",
              border: "2px solid white",
            }}
          >
            Start a class today
          </button>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${Student})`,
              width: "600px",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{ fontSize: "32px", color: "white", marginTop: "132px" }}
            >
              FOR STUDENTS
            </h2>
            <button
              type="submit"
              style={{
                color: "white",
                padding: "20px 30px 24px 30px",
                backgroundColor: "transparent",
                borderRadius: "80px",
                marginTop: "13px",
                border: "2px solid white",
              }}
            >
             Enter access code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2Otabek;
