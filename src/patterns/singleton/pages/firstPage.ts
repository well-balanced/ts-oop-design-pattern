import { Settings } from "../models/Setting.model";

export class FirstPage {
  private settings = Settings.getInstace();

  public setSettings() {
    this.settings.setDarkMode();
    this.settings.fontSize = 15;
  }

  public printSettings() {
    const displayMode = this.settings.getDisplayMode();
    const fontSize = this.settings.fontSize;
    console.log(`displat mode: ${displayMode}\n font size: ${fontSize}`);
  }
}
