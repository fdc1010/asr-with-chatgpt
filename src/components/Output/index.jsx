import Heading from 'components/Heading'
import FilteredForm from './FilteredForm'
import { Img } from 'components'

const Output = () => {
  return (
    <div className="relative w-[1440px] h-[1006.59px] text-center text-5xs-2 text-tomato font-fraunces">
      <Heading />
      <FilteredForm />
      <div className="absolute w-full top-[710px] right-[0px] left-[0px] h-20">
        <Img
          className="absolute h-full w-[calc(100%_-_1360px)] top-[0px] right-[680px] bottom-[0px] left-[680px] rounded-181xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src=""
        />
        <Img
          className="absolute h-[calc(100%_-_50px)] w-[calc(100%_-_1410px)] top-[50px] right-[1390px] bottom-[0px] left-[20px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src=""
        />
        <Img
          className="absolute h-[calc(100%_-_50px)] w-[calc(100%_-_1410px)] top-[50px] right-[20px] bottom-[0px] left-[1390px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src=""
        />
      </div>
    </div>
  )
}

export default Output
