import React from "react";
import "../../styles/diff.scss";

const List = function (props) {
  const { data } = props;
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={item.what}>
            <h2>
              <span>{`0${index + 1}`}</span> {item.what}
            </h2>
            <p>{item.details}</p>
          </li>
        );
      })}
    </ul>
  );
};

const AboutManage = function () {
  const data = [
    {
      what: "Track company-wide progress",
      details:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone Level all the way done to the smallest of details. Never lose sight of the bigger picture again",
    },
    {
      what: "Advanced build-in reports",
      details:
        "Set internal delivery estimates and track progress towar company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed",
    },
    {
      what: "Everything you need in one place",
      details:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution",
    },
  ];

  return (
    <section id="about">
      <div>
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the the functionality your team needs, whihout the
          complexity. Our software is tailor-made for modern digital product
          teams
        </p>
      </div>
      <List data={data} />
    </section>
  );
};

export default AboutManage;
