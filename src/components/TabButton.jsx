// onClick is forwarded to the actual HTML button, as shown in class.
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  );
}
