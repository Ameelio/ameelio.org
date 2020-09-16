import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  message: string;
}
export default function AlertDismissible({ message }: Props) {
  const [shown, setShow] = useState(true);

  return shown ? (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Something went wrong!</Alert.Heading>
      <span>{message}</span>
    </Alert>
  ) : (
    <></>
  );
}
