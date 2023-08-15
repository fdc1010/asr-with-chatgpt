import AuthFormContainer from '../components/AuthFormContainer'
import BlurControls from './BlurControls'
import { default as ModalProvider } from 'react-modal'

const SignUpModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById('root')}
      className="m-auto !w-[31%]"
      overlayClassName="backdrop-opacity-[0.5] bg-orange-A700_4c blur-[10.00px] fixed flex h-full inset-y-[0] w-full"
      {...props}>
      <div className="relative w-full h-[729px] overflow-hidden text-left text-sm text-black font-inter">
        <BlurControls />
        <div className="absolute h-[calc(100%_+_3px)] w-full top-[0px] right-[0px] bottom-[-3px] left-[0px] bg-orangered-200 [filter:blur(10px)]" />
        <AuthFormContainer />
      </div>
    </ModalProvider>
  )
}

export default SignUpModal
