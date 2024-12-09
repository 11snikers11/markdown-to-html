import RootStore from '@/store/rootStore'
import { createContext } from 'react'

const StoreContext = createContext<RootStore | null>(null)

StoreContext.displayName = 'StoreContext'
export default StoreContext
