import Body from "components/Body";
import Footer from "components/Footer";
import RecordingTimer from "components/RecordingTimer";

const RecordingPage = () => {
  return (
    <div className="relative [background:radial-gradient(50%_50%_at_50%_50%,_#ff5c0a,_#f7f0f0,_#f7f0f0)] box-border w-full overflow-auto flex flex-col items-center justify-start gap-[129px] mix-blend-normal border-[1px] border-solid border-darkslategray-300">
      <RecordingTimer />
      <Body />
      <Footer />
    </div>
  );
};

export default RecordingPage;