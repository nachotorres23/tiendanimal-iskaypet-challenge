import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState('')
  const maxDots = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < maxDots) return prevDots + '.'

        return ''
      })
    }, 500)

    return () => clearInterval(interval)
  }, []);

  return (
    <p className="text-xl font-bold text-[#555555] animate-pulse">
      Cargando{dots}
    </p>
  )
}

export default Loading
