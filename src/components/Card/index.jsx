import CardProfile from './CardProfile'
import StartRating from './StartRating'
import CardContent from './CardContent'
import CardDetails from './CardDetails'
import CardMisc from './CardMisc'

const Card = () => {
  return (
    <div className="rounded-2xl bg-white w-[302px] overflow-hidden flex flex-row p-4 box-border items-start justify-start text-left text-base text-dimgray font-dm-sans">
      <div className="w-[270px] flex flex-col items-start justify-start gap-[8px]">
        <div className="flex-row">
          <CardProfile />
        </div>
        <div className="flex-row">
          <StartRating />
        </div>
        <div className="flex-row">
          <CardContent />
        </div>
        <div className="flex-row">
          <CardDetails />
        </div>
        <div className="flex-row">
          <CardMisc />
        </div>
      </div>
    </div>
  )
}

export default Card
