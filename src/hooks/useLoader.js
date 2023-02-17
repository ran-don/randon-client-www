import React from 'react'
import { LoaderScreen } from '../components/Loader'

export const useLoader = loadingState => {
  return {
    Loader: () => loadingState ? <LoaderScreen /> : null,
  }
}
