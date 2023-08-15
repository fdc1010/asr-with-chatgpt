import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
const HowItWorks = React.lazy(() => import('pages/HowItWorks'))
const OutputPage = React.lazy(() => import('pages/OutputPage'))
const RecordingPage = React.lazy(() => import('pages/RecordingPage'))
const TranscribingPage = React.lazy(() => import('pages/TranscribingPage'))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/lp" element={<Home />} />
          <Route path="/recording" element={<RecordingPage />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/transcribing" element={<TranscribingPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}
export default ProjectRoutes
