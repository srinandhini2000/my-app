export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4F46E5] text-white px-4 py-2 rounded hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}