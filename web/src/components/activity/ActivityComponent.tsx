import { Fragment, ReactElement, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ActivityList from "./ActivityList";
import { useStore } from "../../store/store";

const ActivityComponent = (): ReactElement => {
  const { activityStore } = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  return (
    <Fragment>
      {activityStore.activitiesByDate().map((activity) => (
        <ActivityList key={activity.id} activity={activity} />
      ))}
    </Fragment>
  );
};

export default observer(ActivityComponent);
