import { ReactElement, Fragment } from "react";
import VerticalNav from "../components/vertical-navs/VerticalNav";
import ActivityComponent from "../components/activity/ActivityComponent";

const ActivityPage = (): ReactElement => {
  return (
    <Fragment>
      <VerticalNav
        content={null}
        bucketMain={[<ActivityComponent key="ActivityComponent" />]}
      />
    </Fragment>
  );
};
export default ActivityPage;
