import { Img } from 'components'
const Content = () => {
  return (
    <div className="w-[200px] h-[54px] overflow-hidden">
      <div className="relative h-full overflow-hidden shrink-0">
        <Img
          className="absolute h-[101.89%] w-[100.4%] top-[-0.94%] right-[-0.2%] bottom-[-0.94%] left-[-0.2%] max-w-full overflow-hidden max-h-full"
          alt=""
          width={30}
          height={30}
          src="/assets/svg/vector.svg"
        />
        <b className="absolute top-[19.81%] left-[21.08%]">PRODUCT HUNT</b>
        <b className="absolute top-[44.34%] left-[20.68%] text-[12.8px]">#1 Product of the Day</b>
        <Img
          className="absolute h-[52.83%] w-[8.43%] top-[23.58%] right-[84.94%] bottom-[23.58%] left-[6.63%] max-w-full overflow-hidden max-h-full"
          alt=""
          width={30}
          height={30}
          src="/assets/svg/group.svg"
        />
      </div>
    </div>
  )
}

export default Content
