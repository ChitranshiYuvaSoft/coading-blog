import "../Button/Button.style.css";

const FunButton = ({ item, handleAction, like }) => {
  const isLiked = item.name === "like" && like;

  return (
    <button
      className={`action_has flex items-center justify-center ${
        isLiked ? "text-red-500" : "text-white"
      }`}
      aria-label={item.name}
      type="button"
      onClick={() => handleAction(item)}
    >
      <h6 className="flex items-center justify-center font-bold text-xl">
        {item.icon}
      </h6>
    </button>
  );
};

export default FunButton;
