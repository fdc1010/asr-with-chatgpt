import { Button, Img } from 'components'
const Profile = () => {
  return (
    <Button>
      <Img
        className="overflow-hidden object-cover"
        alt=""
        width={30}
        height={30}
        src="/assets/images/profile@2x.png"
      />
    </Button>
  )
}

export default Profile
