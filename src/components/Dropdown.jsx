import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");

  const arr = ["Telegram bot", "Websayt", "SMM xizmati", "Grafik dizayn"];

  const listDelegation = (evt) => {
    if (evt.target.matches(".nav_sub_item")) {
      setSelectedValue(evt.target.textContent);
      setIsopen(false);
    }
  };

  return (
    <div className={isOpen ? "dropdown dropdown--open" : "dropdown"}>
      <div className="select-opener" onClick={() => setIsopen(!isOpen)}>
        {selectedValue}
      </div>
      <ul className="nav_sub_list" onClick={listDelegation}>
        <li className="nav_sub_item nav_sub_item--selected" value="bot">
          Telegram bot
        </li>
        <li className="nav_sub_item" value="web">
          Websayt
        </li>
        <li className="nav_sub_item" value="smm">
          SMM xizmati
        </li>
        <li className="nav_sub_item" value="web">
          Websayt
        </li>
        <li className="nav_sub_item" value="smm">
          SMM xizmati
        </li>
        <li className="nav_sub_item" value="design">
          Grafik dizayn
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
