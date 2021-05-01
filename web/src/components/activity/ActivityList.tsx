import { ReactElement, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import PeopleRounded from "@material-ui/icons/PeopleRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import { Activity } from "../../models/activity";
import { useStore } from "../../store/store";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles((theme) => ({
  ListClass: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
type ActivityListProps = {
  activity: Activity;
};

const ActivityList = ({ activity }: ActivityListProps): ReactElement => {
  const classes = useStyles();
  const { activityStore } = useStore();

  const handleDelete = (id: string) => {
    activityStore.deleteActivity(id);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
        <div className={classes.ListClass}>
          <List dense={false}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PeopleRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.title}
                secondary={
                  <Fragment>
                    <Typography component="span" variant="body2">
                      {activity.description}
                    </Typography>
                    <Typography
                      component="span"
                      style={{ display: "block", marginTop: "2px" }}
                      variant="body2"
                    >
                      {activity.date}
                    </Typography>
                    <Typography
                      component="span"
                      style={{ display: "block" }}
                      variant="body2"
                    >
                      {activity.city} - {activity.venue}
                    </Typography>
                  </Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(activity.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
};
export default observer(ActivityList);
