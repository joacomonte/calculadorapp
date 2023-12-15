const buttons = [
  { label: "(", color: "white" },
  { label: ")", color: "white" },
  { label: "back", color: "dark-gray" },
  { label: "AC", color: "orange", extraClass: "sideButton" },
  { label: "7", color: "gray" },
  { label: "8", color: "gray" },
  { label: "9", color: "gray" },
  { label: "/", color: "gray", extraClass: "sideButton" },
  { label: "4", color: "gray" },
  { label: "5", color: "gray" },
  { label: "6", color: "gray" },
  { label: "*", color: "gray", extraClass: "sideButton" },
  { label: "1", color: "gray" },
  { label: "2", color: "gray" },
  { label: "3", color: "gray" },
  { label: "-", color: "gray", extraClass: "sideButton" },
  { label: ".", color: "gray" },
  { label: "0", color: "gray" },
  { label: "=", color: "orange" },
  { label: "+", color: "gray", extraClass: "sideButton" },
];

type ButtonComponentProps = {
  onButtonClick: (label: string) => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onButtonClick }) => (
  <div>
    {buttons.map(({ label, color, extraClass }, index) => (
      <button
        key={index}
        className={`button ${extraClass ?? ""}`}
        type="button"
        onClick={() => onButtonClick(label)}
      >
        <span className={`button-inside ${color}`}>{label}</span>
      </button>
    ))}
  </div>
);

export default ButtonComponent;
