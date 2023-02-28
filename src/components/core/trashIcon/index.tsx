import { FC, useState } from "react";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

interface IProps {
  onDelete: () => void;
}

export const TrashIcon: FC<IProps> = ({ onDelete }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <IconButton
      aria-label="Delete"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onDelete}
    >
      <DeleteIcon color={isHovering ? "secondary" : "inherit"} />
    </IconButton>
  );
};
