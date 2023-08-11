import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AudiopenHowItWorks = React.lazy(() => import("pages/AudiopenHowItWorks"));
const AudiopenOutput = React.lazy(() => import("pages/AudiopenOutput"));
const AudiopenRecording = React.lazy(() => import("pages/AudiopenRecording"));
const AudiopenRecordingOne = React.lazy(() =>
  import("pages/AudiopenRecordingOne"),
);
const AudiopenLP = React.lazy(() => import("pages/AudiopenLP"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/audiopenlp" element={<AudiopenLP />} />
          <Route
            path="/audiopenrecordingone"
            element={<AudiopenRecordingOne />}
          />
          <Route path="/audiopenrecording" element={<AudiopenRecording />} />
          <Route path="/audiopenoutput" element={<AudiopenOutput />} />
          <Route path="/audiopenhowitworks" element={<AudiopenHowItWorks />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
