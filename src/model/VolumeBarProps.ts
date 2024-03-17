export interface VolumeBarProps {
    value: number;
    min: number;
    max: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
}