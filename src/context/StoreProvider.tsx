import StoreContext from './storeContext'
import RootStore from '@/store/rootStore'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreContext.Provider value={new RootStore()}>{children}</StoreContext.Provider>
}

StoreProvider.displayName = 'StoreProvider'
export default StoreProvider
