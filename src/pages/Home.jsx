/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import RecordNotes from '../components/RecordNotes'
import SignUpModal from 'modals/SignUpModal'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onHandleClick = useCallback(() => {
    if (isModalOpen) onHandleModalClose()
    else onHandleModalOpen()
  }, [isModalOpen])
  const onHandleModalOpen = () => setIsModalOpen(true)
  const onHandleModalClose = () => setIsModalOpen(false)
  return (
    <div className="[background:radial-gradient(100%_100%_at_50%_-40%,_#ff5c0a,_#f7f0f0,_#f7f0f0)] text-[#3D3F54] box-border w-full overflow-hidden flex flex-col items-center justify-start gap-[129px] mix-blend-normal border-[1px] border-solid border-darkslategray-300">
      <SignUpModal
        isOpen={isModalOpen}
        onRequestClose={onHandleModalClose}
        shouldCloseOnOverlayClick={true}
      />
      <Header onHandleClick={onHandleClick} />
      <Body />
      <Footer />
      <RecordNotes />
    </div>
  )
}

export default Home
