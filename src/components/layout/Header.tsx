const Header = () => (
  <div
    className="
      flex w-full justify-between items-center p-3 border-b border-[#DBDBDB]
    "
  >
    <button
      className="
        flex flex-col justify-center items-center mt-2 gap-0 text-[#575757]
      "
    >
      <i className="ri-menu-line ri-lg font-bold" />

      <p className="uppercase m-0 text-[8px]">
        Menu
      </p>
    </button>

    <button className="text-[#575757]">
      <i className="ri-search-line ri-lg" />
    </button>

    <div className="flex font-bold text-3xl">
      <p className="text-[#5C514E]">
        Tiend
      </p>

      <p className="text-[#70A62D]">
        animal
      </p>
    </div>

    <button className="text-[#575757]">
      <i className="ri-user-line ri-lg" />
    </button>

    <button className="relative text-[#575757]">
      <i className="ri-shopping-cart-2-line ri-lg" />

      <div
        className="
          text-[8px] bg-red-600 rounded-full text-white absolute px-1
          font-bold -top-1 -right-2
        "
      >
        2
      </div>
    </button>
  </div>
)

export default Header
