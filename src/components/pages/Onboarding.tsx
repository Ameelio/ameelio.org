import React, { ReactElement, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./Onboarding.css";
import url from "url";
import { getApiUrl, STATES } from "src/utils/utils";

import { useHistory } from "react-router-dom";

export default function Onboarding(): ReactElement {
  const [step, setStep] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [state, setState] = useState<string>(STATES[0]);
  const [city, setCity] = useState<string>("");
  const [postal, setPostal] = useState<string>("");

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const history = useHistory();

  const handleInputChange = (
    set: React.Dispatch<React.SetStateAction<string>>,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    set(event.target.value);
  };

  const isValidInput = (): boolean => {
    if (step === 0) {
      return !!(
        firstName.length &&
        lastName.length &&
        email.length &&
        password.length >= 8 &&
        password === passwordConfirmation
      );
    } else {
      return !!(
        address1.length &&
        city.length &&
        state &&
        /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postal)
      );
    }
  };

  const handleClick = async (event: React.MouseEvent) => {
    if (step === 0) {
      setStep(step + 1);
    } else {
      setLoading(true);
      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          first_name: firstName,
          last_name: lastName,
          address_line_1: address1,
          address_line_2: address2,
          referred_by: localStorage.getItem("referrer_id"),
          city: city,
          state: state,
          postal: postal,
          country: "US",
          referer: "Referral",
        }),
      };
      const response = await fetch(
        url.resolve(getApiUrl(), "register"),
        requestOptions
      );
      const body = await response.json();
      if (body.status === "ERROR") {
        setErrorMessage(
          "There was a problem creating your account. Please try again with a different email."
        );
      } else {
        history.push(`/`);
      }
    }
  };

  const genFunnelStep = (): JSX.Element => {
    if (step === 0) {
      return (
        <Form>
          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold p3 mb-1">
              Staying connected with your loved ones should be free.
            </span>
            <span>
              Ameelio is a nonprofit committed to providing free prison
              communications.
            </span>
          </div>
          <Form.Row className="mb-3">
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setFirstName, e)
                }
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setLastName, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setEmail, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="password"
                placeholder="Password (min. 8 characters)"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setPassword, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-5">
            <Col xs={12}>
              <Form.Control
                type="password"
                placeholder="Password confirmation"
                value={passwordConfirmation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setPasswordConfirmation, e)
                }
                isInvalid={
                  !!(
                    passwordConfirmation.length &&
                    passwordConfirmation !== password
                  )
                }
              />
              <Form.Control.Feedback type="invalid">
                Password should match
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
          {isValidInput() ? (
            <Button size="lg" variant="primary" onClick={handleClick}>
              Continue
            </Button>
          ) : (
            <Button size="lg" variant="primary" disabled>
              Continue
            </Button>
          )}
        </Form>
      );
    } else {
      return (
        <Form>
          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold p3">Welcome {firstName}</span>
            <span>
              Please provide the return address you'd like to use for your
              mailed letters & postcards.
            </span>
          </div>

          <Form.Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="text"
                placeholder="Return address"
                value={address1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setAddress1, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="text"
                placeholder="Apartment #, Building #, etc. (optional)"
                value={address2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setAddress2, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row className="mb-5">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setCity, e)
                }
              />
            </Col>
            <Col>
              <Form.Group controlId="selectState">
                <Form.Control
                  as="select"
                  custom
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(setState, e)
                  }
                  placeholder="State"
                >
                  {STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Control
                type="text"
                placeholder="Zip Code"
                value={postal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setPostal, e)
                }
              />
            </Col>
          </Form.Row>
          {isValidInput() ? (
            <Button
              size="lg"
              disabled={isLoading}
              variant="primary"
              onClick={handleClick}
            >
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          ) : (
            <Button size="lg" variant="primary" disabled>
              Create Account
            </Button>
          )}
        </Form>
      );
    }
  };

  const genInstructions = (): JSX.Element => {
    if (step === 0) {
      return (
        <div className="d-flex flex-column">
          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold mb-1">Is it really free?</span>
            <span>Yes! All free of charge.</span>
          </div>
          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold mb-1">
              Are these physical letters?
            </span>
            <span>
              Yes, we print and mail letters, photos and postcards for you.
            </span>
          </div>

          <div className="d-flex flex-column">
            <span className="font-weight-bold mb-1">
              How long does it take for the letters & photos to arrive?
            </span>
            <span>7-9 business days.</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-column">
          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold mb-1">
              Why does Ameelio need my address?
            </span>
            <span>
              We will only use your address information as the return address
              for the mailed letter.
            </span>
          </div>
          <div className="d-flex flex-column">
            <span className="font-weight-bold mb-1">
              Will Ameelio send advertisements to my address?
            </span>
            <span>Never. We value your privacy.</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="default-px py-5">{genFunnelStep()}</div>
      <div className="instruction-section p-5">{genInstructions()}</div>
    </div>
  );
}
