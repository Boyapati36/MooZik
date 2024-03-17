export interface SeekbarProps {
    value: number;
    min: number;
    max: number;
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSeekTime: React.Dispatch<React.SetStateAction<number>>;
    appTime: number;
}