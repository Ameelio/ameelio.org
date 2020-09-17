import React, { ReactElement } from "react";
import LogoRow from "src/components/LogoRow/LogoRow";
import Hero from "src/components/sections/Orgs/Hero";
import { PartnerOrgs } from "src/utils/constants";
import UseCases from "src/components/sections/Orgs/UseCases";
import OrgsTestimonials from "src/components/sections/Orgs/OrgTestimonials";

export default function LettersOrgs(): ReactElement {
  return (
    <div>
      <Hero />
      {/* <LogoRow images={PartnerOrgs} title="Trusted by" size="logo-row-large"/> */}
      <OrgsTestimonials />
      <UseCases />
    </div>
  );
}
