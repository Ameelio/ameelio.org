import React, { ReactElement, useState } from "react";
import { Form, Button, Col, Image, ProgressBar } from "react-bootstrap";
import "./Onboarding.css";
import AlertDismissible from "src/components/Alert/Alert";

import Mailbox from "src/assets/Referral/Mailbox.json";

import Lottie from "react-lottie";
import UserBanner from "src/assets/HowFree/UsersBanner.png";
import AppStoreButton from "src/components/buttons/AppStoreButton";
import {
  PLACEMENT,
  APP_STORES,
  REFERRAL_SOURCES,
  STATES,
} from "src/utils/constants";
import { isValidUSZipCode } from "src/utils/utils";
import { register } from "src/services/Api/index";
import { registerSegment, track } from "src/utils/analytics";

export default function Onboarding(): ReactElement {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [referralSource, setReferralSource] = useState<string>("");
  const [referredBy] = useState<string | null>(
    localStorage.getItem("referrer_id")
  );
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postal, setPostal] = useState<string>("");

  const [step, setStep] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (
    set: React.Dispatch<React.SetStateAction<string>>,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    set(event.target.value);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Mailbox,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isValidInput = (): boolean => {
    if (step === 0) {
      return !!(
        firstName.length &&
        lastName.length &&
        email.length &&
        password.length >= 8 &&
        password === passwordConfirmation &&
        (referralSource.length || referredBy)
      );
    } else if (step === 1) {
      return !!(
        address1.length &&
        city.length &&
        state &&
        isValidUSZipCode(postal)
      );
    }
    return true;
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (step === 0) {
      track("Landing Page - Onboarding - Click on Next");
      setStep((step) => step + 1);
    } else {
      setLoading(true);
      track("Landing Page - Onboarding - Click on Create Acccount");
      const referrer = referredBy ? "Referral Invitation" : referralSource;
      const userData: UserRegisterInfo = {
        email,
        password,
        passwordConfirmation,
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        postal,
        referrer,
        referredBy,
      };
      try {
        await register(userData);
        registerSegment(userData);
        setLoading(false);
        setStep((step) => step + 1);
      } catch (err) {
        let error = "";
        if (err.data && err.data.email) {
          error = `Email was taken`;
          setErrorMessage(`The email (${email}) has already been taken.`);
        } else if (err.message === "timeout") {
          error = `Timeout`;
          setErrorMessage(
            "Your request timed out! If this error keeps happening, please contact support."
          );
        } else {
          error = "Other";
          setErrorMessage(
            "Something went wrong and it's our fault! If this error happens again, please contact support."
          );
        }
        track("Landing Page - Onboarding - Create Account Error", {
          error: error,
        });
        setLoading(false);
      }
    }
  };

  const handleBackClick = () => {
    setStep((step) => step - 1);
  };

  const genFunnelStep = (): JSX.Element => {
    if (step === 0) {
      return (
        <Form>
          <div className="d-flex flex-column mb-3">
            <span className="font-weight-bold p3 mb-1">Getting started</span>
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
          {!referredBy && (
            <Form.Row>
              <Col>
                <Form.Group controlId="selectReferralSource">
                  <Form.Control
                    as="select"
                    custom
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      handleInputChange(setReferralSource, e)
                    }
                    placeholder="How did you learn about Ameelio?"
                    value={referralSource}
                  >
                    <option value="" disabled>
                      How did you learn about Ameelio?
                    </option>
                    {REFERRAL_SOURCES.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          )}
          <Form.Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="password"
                placeholder="Password (min. 8 characters)"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setPassword, e)
                }
                isInvalid={!!(password.length && password.length < 8)}
              />
              <Form.Control.Feedback type="invalid">
                Password needs to be at least 8 character.
              </Form.Control.Feedback>
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
    } else if (step === 1) {
      return (
        <Form>
          {errorMessage && <AlertDismissible message={errorMessage} />}

          <div className="d-flex flex-column mb-5">
            <span className="font-weight-bold p3">Welcome, {firstName}</span>
            <span>
              Please provide the <b>return address</b> you'd like to use for
              your mailed letters & postcards.
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
                  value={state}
                >
                  <option value="" disabled>
                    State
                  </option>
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
                placeholder="Zip Code (e.g 06511)"
                value={postal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(setPostal, e)
                }
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Button
              size="lg"
              disabled={isLoading}
              variant="light"
              onClick={handleBackClick}
            >
              {"Back"}
            </Button>
            {isValidInput() ? (
              <Button
                size="lg"
                disabled={isLoading}
                variant="primary"
                onClick={handleClick}
                className="ml-3"
              >
                {isLoading ? "Creating..." : "Create Account"}
              </Button>
            ) : (
              <Button size="lg" variant="primary" disabled className="ml-3">
                Create Account
              </Button>
            )}
          </Form.Row>
        </Form>
      );
    }
    return <div />;
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
              Yes! We print and mail letters, photos and postcards for you.
            </span>
          </div>

          <div className="d-flex flex-column">
            <span className="font-weight-bold mb-1">
              How long does it take for the letters & photos to arrive?
            </span>
            <span>
              7-9 business days. We've been experiencing some delays due to
              COVID{" "}
              <span role="img" aria-label="pensive face emoji">
                😔
              </span>
              .
            </span>
          </div>
        </div>
      );
    } else if (step === 1) {
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
    return <div />;
  };

  return (
    <div className="w-100">
      {step <= 1 && (
        <div className="d-flex flex-column flex-md-row">
          <div className="default-px  py-5 w-100">
            <ProgressBar
              className="mb-4"
              now={(step + 1) * 34}
              label={`Step ${step + 1}`}
            />
            {genFunnelStep()}
          </div>
          <div className="instruction-section p-5">{genInstructions()}</div>
        </div>
      )}
      {step > 1 && (
        <div className="d-flex flex-column align-items-center w-100">
          <Image src={UserBanner} className="referral-page-banner" />
          <div className="d-flex flex-column align-items-center bg-white rounded referral-page-card text-center mb-5">
            <div className="d-flex flex-column">
              <span className="font-weight-medium p2 mw-100">Success!</span>
              <span className="mt-3">
                {firstName}, you're one tap away from sending your first photo,
                letter or postcard to your loved one.
              </span>
              <div className="d-flex flex-column flex-md-row mt-5 justify-content-center">
                <div>
                  <AppStoreButton
                    placement={PLACEMENT.REFERRAL}
                    type={APP_STORES.APPLE}
                  />
                </div>
                <div className="ml-md-3 mt-3 mt-md-0">
                  <AppStoreButton
                    placement={PLACEMENT.REFERRAL}
                    type={APP_STORES.GOOGLE}
                  />
                </div>
              </div>
              <Lottie options={defaultOptions} height="80%" width="80%" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
