import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}
const Btn = ({children}: Props) => {
  return (
    <button className="px-3 py-1.5 rounded-sm bg-foreground text-background cursor-pointer hover:bg-foreground/80 transition-colors">{ children }</button>
  )
}

export default Btn