import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import "./LogoRow.css";
interface Props {
  title: string;
  images: string[];
  size: "logo-row-small" | "logo-row-large";
}
export default function LogoRow({ title, images, size }: Props): ReactElement {
  return (
    <div className="d-flex flex-column align-items-center">
      {title && <span className="p3">{title}</span>}
      <div className="d-flex flex-column flex-md-row py-3 flex-wrap">
        {images.map((img) => (
          <Image src={img} className={`mt-3 mr-md-5 ${size}`} />
        ))}
      </div>
    </div>
  );
}
