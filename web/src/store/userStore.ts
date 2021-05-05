import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Login, User } from "../models/user";
import history from "../utils/history";
import { store } from "./store";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  get isLoggedIn() {
    return !!this.user;
  }
  login = async (creds: Login) => {
    try {
      const user = await agent.account.login(creds);
      if (user) {
        store.commonStore.setToken(user.token);
        history.push("/");
        runInAction(() => {
          this.user = user;
        });
      } else {
        throw new Error("invalid email or password");
      }
    } catch (error) {
      throw error;
    }
  };
}
