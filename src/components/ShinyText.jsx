import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span 
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ 
        '--animation-duration': animationDuration,
        animation: disabled ? 'none' : undefined
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

