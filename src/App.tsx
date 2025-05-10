import Body from "./components/Body";
import HeaderComponent from "./components/Navigation";
import img from "./assets/img.png";

import SideBarComponent from "./components/SideBar";
import img1 from "./assets/img.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";

const hostelImages: string[] = [img1, img2, img3, img4, img5];

function App() {
  return (
    <div className="px-20">
      <HeaderComponent />
      <div className="flex justify-between gap-x-12 py-6">
        <div className="flex flex-col gap-y-4">
          <SideBarComponent
            heading="Other hostels"
            name={"Evandy"}
            location={"Afrifa, Kumasi"}
            img={img}
          />
          <SideBarComponent
            name={"Hall 7"}
            location={"Campus, Kumasi"}
            img={img}
          />
          <SideBarComponent
            name={"Brunei"}
            location={"Campus, Kumasi"}
            img={img}
          />
        </div>

        <Body imgs={hostelImages} />
      </div>
    </div>
  );
}

export default App;
