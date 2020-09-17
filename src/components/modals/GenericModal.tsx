import React, { ReactElement } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
interface Props {
  title: string;
  body: string;
  cta: string;
  redirectPath: string;
}

export default function GenericModal({
  title,
  body,
  cta,
  redirectPath,
}: Props): ReactElement {
  const history = useHistory();

  return (
    <Modal show={true}>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <span className="p3 font-weight-bold mb-3">{title}</span>
          <span className="mb-3">{body}</span>
          <Button size="lg" onClick={(e) => history.push(redirectPath)}>
            {cta}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
