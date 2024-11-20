import "../Button/Button.style.css";

const FunButton = ({ item, handleComment }) => {
  console.log(item, "icon");
  return (
    <>
      <button
        className="action_has has_liked flex items-center justify-center"
        aria-label="like"
        type="button"
        onClick={()=>handleComment(item)}
      >
        <h6 className="flex items-center justify-center text-white font-bold text-xl">
          {item.icon}
        </h6>
      </button>
    </>
  );
};

export default FunButton;
