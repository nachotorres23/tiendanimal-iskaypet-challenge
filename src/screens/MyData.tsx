import { useState } from "react"
import Card from "../components/atoms/Card"
import Input from "../components/atoms/Input"
import Button from "../components/atoms/Button"

const MyData = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')

  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-xl font-bold text-[#555555]">
        Mis datos
      </p>

      <Card customClass="flex flex-col w-full p-4">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <Input
              label="Nombre"
              value={name}
              onInputChange={e => setName(e.target.value)}
            />

            <Input
              label="Email"
              value={email}
              onInputChange={e => setEmail(e.target.value)}
            />

            <Input
              label="Teléfono"
              value={phone}
              onInputChange={e => setPhone(e.target.value)}
            />
          </div>

          <Button
            label="Guardar"
            customClass="bg-[#639605] text-white"
          />
        </div>
      </Card>
    </div>
  )
}

export default MyData
