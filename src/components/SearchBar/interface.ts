export interface SearchBarProps {
  term?: string
  onSearchTermChange: (term: string) => void
  onInputChange: (input: string) => void
}
