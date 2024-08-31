
export interface SearchBoxProps {
    value: string;
    onChange: (event: string) => void;
    onSearch: () => void;
    disabled?: boolean;
  }