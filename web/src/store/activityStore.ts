/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Activity } from "./../models/activity";

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  loading = false;
  constructor() {
    makeAutoObservable(this);
  }

  activitiesByDate = (): Activity[] => {
    return Array.from(this.activityRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  };
  loadActivities = async () => {
    try {
      this.setLoading(true);
      const activities = await agent.activities.list();
      activities.map((activity) =>
        this.activityRegistry.set(activity.id, activity)
      );
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      console.error(error.message);
    }
  };
  setLoading = (state: boolean) => {
    this.loading = state;
  };
  deleteActivity = async (id: string) => {
    try {
      await agent.activities.delete(id);
      this.activityRegistry.delete(id);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
