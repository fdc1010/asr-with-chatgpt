import { Button, Img } from 'components'
const Config = () => {
  return (
    <Button>
      <Img
        className="overflow-hidden object-cover"
        alt=""
        width={30}
        height={30}
        src="/assets/images/settings@2x.png"
      />
    </Button>
  )
}

export default Config
