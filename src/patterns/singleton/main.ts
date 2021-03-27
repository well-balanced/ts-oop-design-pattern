import { FirstPage } from "./pages/firstPage";
import { SecondPage } from "./pages/SecondPage";
function main() {
  const firstPage = new FirstPage();
  firstPage.setSettings();
  firstPage.printSettings();

  const secondPage = new SecondPage();
  secondPage.printSettings();
}

main();
