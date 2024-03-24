import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();

  console.log("holas", sliderList);

  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
