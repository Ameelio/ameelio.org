import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  message: string;
}
export default function AlertDismissible({ message }: Props) {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Something went wrong!</Alert.Heading>
      <span>{message}</span>
    </Alert>
  ) : (
    <div />
  );
}
