
export interface SearchBoxProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    disabled?: boolean;
  }