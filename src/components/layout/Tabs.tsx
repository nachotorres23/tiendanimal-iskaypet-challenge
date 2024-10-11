import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Tab } from "../../domain/layout"

const Tabs = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const tabContainerRef = useRef<HTMLDivElement | null>(null)

  const [ actualView, setActualView ] = useState<string>('my-data')

  const changeToTab = (goTo: string) => {
    setActualView(goTo)

    navigate(`/${goTo}`)
  }

  const tabs: Tab[] = [
    {
      name: 'Mis datos',
      route: 'my-data',
      action: () => changeToTab('my-data')
    },
    {
      name: 'Mis tareas',
      route: 'my-tasks',
      action: () => changeToTab('my-tasks')
    },
    {
      name: 'Mis devoluciones',
      route: 'my-refunds',
      action: () => changeToTab('my-refunds')
    },
    {
      name: 'Mis comunicaciones',
      route: 'my-communications',
      action: () => changeToTab('my-communications')
    },
    {
      name: 'Mis mejores amigos',
      route: 'my-best-friends',
      action: () => changeToTab('my-best-friends')
    }
  ]

  useEffect(() => {
    const container = tabContainerRef.current

    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }

    container.addEventListener('wheel', handleWheel)

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  useEffect(() => {
    const actualLocation = location.pathname.replace('/', '')

    if (actualLocation !== actualView) {
      setActualView(actualLocation)
    }
  }, [ location, actualView ])

  return (
    <div
      ref={tabContainerRef}
      style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.12)' }}
      className="
        flex overflow-x-auto max-w-[800px] invisible-scrollbar
        scroll-smooth
      "
    >
      {
        tabs.map((tab: Tab, index: number) => (
          <button
            key={`${tab.name}_${index}`}
            onClick={tab.action}
            className={`
              flex text-center text-base text-nowrap px-8 py-3 transition
              duration-300 relative
              ${ actualView === tab.route ? 'font-bold text-[#639605]' : 'font-semibold text-[#555555]' }
            `}
          >
            { tab.name }

            {
              actualView === tab.route &&
                <div
                  className="
                    absolute bottom-0 left-0 h-[4px] w-full rounded-t-md
                    bg-[#639605]
                  "
                />
            }
          </button>
        ))
      }
    </div>
  )
}

export default Tabs
