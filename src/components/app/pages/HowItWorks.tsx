import React, { FunctionComponent } from "react";
import TutorialList from "../tutorial/TutorialList";

const HowItWorks: FunctionComponent = () => {
  const STEPS = [
    {
      header: "Add your contact",
      body:
        "Before sending your first letter, use our locator tool to find your loved one’s inmate ID. Select their facility, and we’ll auto-complete the mailing address. We send mail to all correctional and detention facilities in the U.S.",
    },
    {
      header: "Write a message & attach a photo",
      body:
        "Type up your note and attach photos through our web or mobile application. Right now, your letter can be about 9,000 characters. That translates to roughly three typed pages or six handwritten pages. The maximum photo attachment is 25mb. Because of prison mailing restrictions, we can only print images no larger than 4’’ x 6’’",
    },
    {
      header: "Review your letter",
      body:
        "We’ll give you a chance to read over your letter and check the formatting. Your loved one will receive a physical copy of the note you see on your screen.",
    },
    {
      header: 'Click "send"',
      body:
        "Once you click send, we route your note to an automated third-party service for printing and mailing. Ameelio Letters are sent using USPS First Class Mail, and typically take 4 to 7 business days to travel from your device to your loved one’s facility. Please note that due to COVID-19, your letter may arrive a little later than usual.",
    },
    {
      header: "Track your letter",
      body:
        "We know you’re excited for your loved one to receive your message, so we’ll keep you updated on its progress. Each letter sent through our platform has a unique barcode that is scanned by USPS as it travels through the mail stream. We’ll share mail tracking events with you on your account.",
    },
    {
      header: "Receive updates",
      body:
        "Here is a breakdown of the major events: on its way (the letter request was successfully created, and should arrive within 4-7 business days), delivered to facility (the letter was successfully delivered to the facility), returned to sender (the letter is being returned to sender because of barcode, ID tag, or address errors).",
    },

    {
      header: "Read your past messages",
      body:
        "We introduced our Memory Lane feature in response to our users’ requests for a memory bank. We save your past letters for you to re-read whenever you like.",
    },
  ];
  return (
    <div>
      <div className="d-flex flex-column">
        <span className="p1 font-weight-bold text-center">
          How Ameelio Works
        </span>
        <span className="font-weight-bold text-center text-break p4">
          A step-by-step walkthrough to send your first letter
        </span>
      </div>
      <TutorialList steps={STEPS} />
    </div>
  );
};

export default HowItWorks;
