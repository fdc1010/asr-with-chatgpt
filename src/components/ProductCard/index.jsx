import Config from './Config'
import Content from './Content'
import Profile from './Profile'

const ProductCard = () => {
  return (
    <div className="w-full h-[54px] text-[7.2px] text-tomato font-inter">
      <div className="grid grid-cols-3 items-center w-full px-4">
        <div className="flex flex-col items-start justify-center">
          <Profile />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Content />
        </div>
        <div className="flex flex-col items-end justify-center">
          <Config />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
