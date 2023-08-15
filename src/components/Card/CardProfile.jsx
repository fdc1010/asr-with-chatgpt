import { Img } from 'components'

const CardProfile = () => {
  return (
    <div className="flex flex-col w-[269px]">
      <div className="w-full rounded-9980xl bg-gray flex flex-row items-start justify-start">
        <Img
          className="rounded-9980xl overflow-hidden shrink-0 object-cover max-w-[42px]"
          alt=""
          src="/assets/images/profile-photo-image1@2x.png"
        />
        <div className="w-full max-w-[190px] mx-2 flex flex-col items-start justify-start">
          <div className="leading-[24px] font-medium">Arvid Kahl 🌻</div>
          <div className="text-sm leading-[20px] text-slategray">@arvidkahl</div>
        </div>
        <Img
          className="w-5 h-5 overflow-hidden object-cover"
          alt=""
          src="/assets/images/link-twitterlogo@2x.png"
        />
      </div>
    </div>
  )
}

export default CardProfile
