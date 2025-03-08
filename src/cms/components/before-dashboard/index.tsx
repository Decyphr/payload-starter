import { Banner } from "@payloadcms/ui/elements/Banner";
import React from "react";

import "./index.scss";

const baseClass = "before-dashboard";

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      <p style={{ maxWidth: 820 }}>
        Welcome to your Payload CMS admin dashboard! This is your central hub for managing all your content effortlessly.
        <br />
        From creating and editing pages to organizing media and configuring settings, everything you need is at your fingertips. Dive in to customize your site, track performance, and collaborate with your team seamlessly.
      </p>
    </div>
  );
};

export default BeforeDashboard;
