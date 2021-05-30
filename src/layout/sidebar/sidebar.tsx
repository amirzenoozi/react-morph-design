import * as React from "react";
import { SidebarWrapper, UserInfo, MainMenu } from "./sidebar.style";

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <UserInfo>
        <figure>
          <img
            src={
              "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
            }
          />
        </figure>
        <p>
          Hi,<strong>Lily</strong>
        </p>
      </UserInfo>
      <MainMenu>
        <ul>
          <li>Dashboard</li>
          <li>BranchList</li>
          <li>Services</li>
          <li>Statistics</li>
          <li>Activities</li>
        </ul>
      </MainMenu>
    </SidebarWrapper>
  );
};

export { Sidebar };
