import React from "react";

interface BoardCardProps {
  name: string;
  title: string;
  company: string;
}

const BoardCard = (props: BoardCardProps) => {
  return (
    <div className="d-flex flex-column ml-md-5 mb-md-5 mb-3">
      <span className="p4 font-weight-bold">{props.name}</span>
      <span className="p5">{props.title}</span>
      <span className="p5">{props.company}</span>
    </div>
  );
};

export default BoardCard;
