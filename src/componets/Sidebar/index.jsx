import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";
import { SidebarItems } from "..";

const MOBILE_VIEW = window.innerWidth < 468;

export default function Sidebar({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);
  const [userEmail, setUserEmail] = useState(""); // State to store the email
  const [error, setError] = useState(null);

  // Fetch user email on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Retrieve token from storage
    console.log("Token:", token);

    axios
      .get("http://127.0.0.1:8000/API/user/email", {
        headers: {
          Authorization: `Token ${token}`, // Add token to headers
        },
      })
      .then((response) => setUserEmail(response.data.email)) // Set userEmail directly
      .catch((error) => {
        console.error("Error fetching user email:", error);
        setError("Error fetching user email");
      });
  }, []);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
          {/* {userEmail || (error ? "Error loading email" : "Loading...")} */}

            <SidebarLogo href="#">
              <SidebarBrand
                displaySidebar={displaySidebar}
                className="app__brand__text"
              >
              </SidebarBrand>

              <br />
            </SidebarLogo>

            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <div className="outer__circle">
                <div className="inner__circle" />
              </div>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
