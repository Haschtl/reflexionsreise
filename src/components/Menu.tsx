import { useCallback } from "react";
import "./Menu.scss";

// Function to scroll to the bottom of the page
function scrollToBottom() {
  // Use setTimeout to allow DOM updates before scrolling
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 0);
}
interface Props {
  active: number;
  onChange?: (id: number) => void;
}
const Menu: React.FC<Props> = ({ active, onChange }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const openMenu = useCallback(() => {
  //   setMenuOpen(true);
  // }, []);
  // const closeMenu = useCallback(() => {
  //   setMenuOpen(false);
  // }, []);
  const _onChange = useCallback(
    (id: number) => {
      scrollToBottom();
      onChange?.(id);
    },
    [onChange]
  );
  return (
    // <div className="menu-wrapper">
    //   <button onClick={openMenu}>Menu</button>
    //   <div className={`menu ${menuOpen ? "open" : "hidden"}`}>
    //     <button className="menu-close-button" onClick={closeMenu}>X</button>
    <div className="menu open">
      <img
        className="menu-image"
        src={import.meta.env.BASE_URL + "assets/images/karte.jpeg"}
      />
      <MenuItem id={0} active={active} onChange={_onChange}>
        Ende
      </MenuItem>
      <MenuItem id={1} active={active} onChange={_onChange}>
        Anfang
      </MenuItem>
      <MenuItem id={2} active={active} onChange={_onChange}>
        Genesis
      </MenuItem>
      <MenuItem id={3} active={active} onChange={_onChange}>
        Inspiration
      </MenuItem>
      <MenuItem id={4} active={active} onChange={_onChange}>
        the origin
      </MenuItem>
      <MenuItem id={5} active={active} onChange={_onChange}>
        Momentum
      </MenuItem>
      <MenuItem id={6} active={active} onChange={_onChange}>
        Entscheidung
      </MenuItem>
      <MenuItem id={7} active={active} onChange={_onChange}>
        Introspection
      </MenuItem>
      <MenuItem id={8} active={active} onChange={_onChange}>
        Kokoro
      </MenuItem>
      <MenuItem id={9} active={active} onChange={_onChange}>
        Mneme
      </MenuItem>
      <MenuItem id={10} active={active} onChange={_onChange}>
        spiegeln
      </MenuItem>
      <MenuItem id={11} active={active} onChange={_onChange}>
        Intention
      </MenuItem>
      <MenuItem id={12} active={active} onChange={_onChange}>
        Wandeltreppen
      </MenuItem>
      <MenuItem id={13} active={active} onChange={_onChange}>
        .Glück
      </MenuItem>
      <MenuItem id={14} active={active} onChange={_onChange}>
        in thoughts
      </MenuItem>
    </div>
    //   </div>
    // </div>
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
