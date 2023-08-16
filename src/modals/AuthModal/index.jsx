import { default as ModalProvider } from 'react-modal'
import Container from './Container'

const AuthModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById('root')}
      className="mt-20 ml-[39%] !w-[31%]"
      overlayClassName="backdrop-blur-sm bg-orange-A700_4c fixed flex h-full inset-y-[0] w-full"
      {...props}>
      <Container />
    </ModalProvider>
  )
}

export default AuthModal
