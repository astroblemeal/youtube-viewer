import { useState } from 'react'

export const withSearchBar = (Component: React.FC<any>) => {
  function HOC({ onSearchTermChange }) {
    const [term, setTerm] = useState('')

    const onInputChange = (term: string) => {
      setTerm(term)
      onSearchTermChange(term)
    }

    const newProps = {
      onInputChange,
      term,
    }

    return <Component {...newProps} />
  }
  return HOC
}
