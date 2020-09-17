import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./MemberCard.css";

interface Props {
  member: BoardMember | Member;
  boardMember?: boolean;
}

export default function MemberCard({
  member,
  boardMember,
}: Props): ReactElement {
  return (
    <div className="d-flex flex-column mx-md-4 mb-3 align-items-center member-card">
      <Image src={member.img} alt="Team member" className="profile-picture" />

      <span className=" font-weight-bold mt-2">{member.name}</span>
      <span className="">{member.title}</span>
      {boardMember && (
        <span className="p5">{(member as BoardMember).company}</span>
      )}
    </div>
  );
}
