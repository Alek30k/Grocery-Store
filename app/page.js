import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList = GlobalApi.getSliders();

  console.log(">>>>>", sliderList);

  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
