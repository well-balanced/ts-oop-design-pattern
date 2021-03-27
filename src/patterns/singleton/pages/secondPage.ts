import { Settings } from "../models/Setting.model";
export class SecondPage {
  private settings = Settings.getInstace();

  public printSettings() {
    const displayMode = this.settings.getDisplayMode();
    const fontSize = this.settings.fontSize;
    console.log(`displat mode: ${displayMode}\n font size: ${fontSize}`);
  }
}
