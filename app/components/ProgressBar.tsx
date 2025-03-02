interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className="bg-purpleots text-xs font-medium text-white text-center p-1 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    );
  };
  
  export default ProgressBar;