import { useCallback, useEffect, useRef } from "react";
import "./Menu.scss";

// @ts-expect-error svgr types missing
import SvgMap from "./karte-overlay.svg?react";

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
  const svgRef = useRef<SVGSVGElement>(null);
  const _onChange = useCallback(
    (id: number) => {
      scrollToBottom();
      onChange?.(id);
    },
    [onChange]
  );
  useEffect(() => {
    if (svgRef.current) {
      const elements = {
        kokoro: { el: svgRef.current.children[0], id: 9 },
        mneme: { el: svgRef.current.children[1], id: 10 },
        wandeltreppen: { el: svgRef.current.children[2], id: 13 },
        intention: { el: svgRef.current.children[3], id: 12 },
        inspiration: { el: svgRef.current.children[4], id: 4 },
        theorigin: { el: svgRef.current.children[5], id: 5 },
        entscheidung: { el: svgRef.current.children[6], id: 7 },
        glueck: { el: svgRef.current.children[7], id: 14 },
        spiegeln: { el: svgRef.current.children[8], id: 11 },
        inthoughts: { el: svgRef.current.children[9], id: 15 },
        ende: { el: svgRef.current.children[10], id: 1 },
        momentum: { el: svgRef.current.children[11], id: 6 },
        genesis: { el: svgRef.current.children[12], id: 3 },
        anfang: { el: svgRef.current.children[13], id: 2 },
        introspection: { el: svgRef.current.children[14], id: 8 },
      };
      Object.keys(elements).forEach((key) => {
        const el = elements[key as keyof typeof elements];
        el.el.classList.add("clickable");
        el.el.addEventListener("click", () => {
          scrollToBottom();
          onChange?.(el.id);
        });
      });
      return () => {
        Object.keys(elements).forEach((key) => {
          const el = elements[key as keyof typeof elements];
          el.el.removeEventListener("click", () => {
            scrollToBottom();
            onChange?.(el.id);
          });
        });
      };
    }
  }, [svgRef.current]);
  return (
    // <div className="menu-wrapper">
    //   <button onClick={openMenu}>Menu</button>
    //   <div className={`menu ${menuOpen ? "open" : "hidden"}`}>
    //     <button className="menu-close-button" onClick={closeMenu}>X</button>
    <div className="menu open">
      <MenuItem id={1} active={active} onChange={_onChange}>
        Ende
      </MenuItem>
      <MenuItem id={2} active={active} onChange={_onChange}>
        Anfang
      </MenuItem>
      <MenuItem id={3} active={active} onChange={_onChange}>
        Genesis
      </MenuItem>
      <MenuItem id={4} active={active} onChange={_onChange}>
        Inspiration
      </MenuItem>
      <MenuItem id={5} active={active} onChange={_onChange}>
        the origin
      </MenuItem>
      <MenuItem id={6} active={active} onChange={_onChange}>
        Momentum
      </MenuItem>
      <MenuItem id={7} active={active} onChange={_onChange}>
        Entscheidung
      </MenuItem>
      <MenuItem id={8} active={active} onChange={_onChange}>
        Introspection
      </MenuItem>
      <MenuItem id={9} active={active} onChange={_onChange}>
        Kokoro
      </MenuItem>
      <MenuItem id={10} active={active} onChange={_onChange}>
        Mneme
      </MenuItem>
      <MenuItem id={11} active={active} onChange={_onChange}>
        spiegeln
      </MenuItem>
      <MenuItem id={12} active={active} onChange={_onChange}>
        Intention
      </MenuItem>
      <MenuItem id={13} active={active} onChange={_onChange}>
        Wandeltreppen
      </MenuItem>
      <MenuItem id={14} active={active} onChange={_onChange}>
        .Glück
      </MenuItem>
      <MenuItem id={15} active={active} onChange={_onChange}>
        in thoughts
      </MenuItem>
      <div className="map-wrapper">
        <img
          className="menu-image"
          src={import.meta.env.BASE_URL + "assets/images/karte.jpeg"}
        />
        <SvgMap ref={svgRef} />
      </div>
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
