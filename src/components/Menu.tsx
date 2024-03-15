import { useCallback, useState } from "react";
import "./Menu.scss";

interface Props {
  active: number;
  onChange?: (id: number) => void;
}
const Menu: React.FC<Props> = ({ active, onChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);
  return (
    <div className="menu-wrapper">
      <button onClick={openMenu}>Menu</button>
      <div className={`menu ${menuOpen ? "open" : "hidden"}`}>
        <button className="menu-close-button" onClick={closeMenu}>X</button>
        <div>
          <MenuItem id={0} active={active} onChange={onChange} />
          <MenuItem id={1} active={active} onChange={onChange} />
          <MenuItem id={2} active={active} onChange={onChange} />
          <MenuItem id={3} active={active} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<{
  id: number;
  active: number;
  children?: React.ReactNode;
  onChange?: (id: number) => void;
}> = ({ children, id, active, onChange }) => {
  const _onClick = useCallback(() => {
    onChange?.(id);
  }, [id, onChange]);

  return (
    <div
      onClick={_onClick}
      className={`menu-item ${active === id ? "active" : "inactive"}`}
    >
      {children ?? "Page " + id}
    </div>
  );
};
export default Menu;
