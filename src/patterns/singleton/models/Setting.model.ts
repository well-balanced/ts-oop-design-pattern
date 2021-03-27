export class Settings {
  private static instance: Settings;
  private _isDarkMode: boolean = false;
  private _fontSize = 13;

  private constructor() {}

  public static getInstace(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }

  public getDisplayMode(): string {
    return this._isDarkMode ? "dark" : "light";
  }

  public setDarkMode(): void {
    this._isDarkMode = true;
  }

  public setLightMode(): void {
    this._isDarkMode = false;
  }

  get fontSize(): number {
    return this._fontSize;
  }

  set fontSize(size: number) {
    this._fontSize = size;
  }
}
