const SmallButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-brown text-white font-normal py-1 px-6 rounded-3xl hover:bg-[#8a6047] transition-colors duration-300 shadow-lg"
    >
      {text}
    </button>
  );
}
export default SmallButton;