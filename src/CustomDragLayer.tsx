import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "./style";
import { Column } from "./Column";

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffSet } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffSet: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffSet)}>
        <Column id={item.id} text={item.text} index={item.index} isPreview></Column>
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

function getItemStyles(currentOffSet: XYCoord | null): React.CSSProperties {
  if (!currentOffSet) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffSet;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}
