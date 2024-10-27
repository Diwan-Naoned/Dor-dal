import { Parents } from "./Space/Parents"
import { Evit } from "./Space/Evit"
import { AEP } from "./Space/AEP"

export const Apps = () => {
  return <div className="flex flex-col gap-6">
    <Parents />
    <Evit />
    <AEP />
  </div>
}