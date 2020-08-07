import { SvelteComponent } from "svelte";
import * as view from "./view";

import Blank from "../Screen/Blank.svelte";
import Help from "../Screen/Help.svelte";
import IdentityCreation from "../Screen/IdentityCreation.svelte";
import Profile from "../Screen/Profile.svelte";
import ProjectCreation from "../Screen/ProjectCreation.svelte";
import UserRegistration from "../Screen/UserRegistration.svelte";

export enum Screen {
  Blank = "Blank",
  Help = "Help",
  IdentityCreation = "IdentityCreation",
  ProfileProjects = "ProfileProjects",
  ProjectCreation = "ProjectCreation",
  UserRegistration = "UserRegistration",
}

export const map: view.Map<Screen, typeof SvelteComponent> = {
  [Screen.Blank]: Blank,
  [Screen.Help]: Help,
  [Screen.IdentityCreation]: IdentityCreation,
  [Screen.ProfileProjects]: Profile,
  [Screen.ProjectCreation]: ProjectCreation,
  [Screen.UserRegistration]: UserRegistration,
};

export const nav: view.Navigation<Screen> = view.create(map, Screen.ProfileProjects);
export const set = (key: Screen, props?: view.Props): void => nav.set(key, props);
