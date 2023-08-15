const Footer = () => {
  return (
    <div className="w-full text-center text-sm text-darkslategray-100 font-dm-sans border-t-[1px] border-solid border-darkslategray-300">
      <div className="flex flex-grid px-5">
        <div className="flex flex-col w-1/2 h-11 border-r-[1px] items-baseline border-solid border-darkslategray-200">
          © Nicheless Inc. | built by @louispereira
        </div>
        <div className="flex flex-col w-1/2 items-end justify-center">
          <div className="grid grid-cols-3 h-11 gap-8">
            <div className="flex flex-col items-end">FAQs</div>
            <div>privacy policy</div>
            <div>terms of use</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
