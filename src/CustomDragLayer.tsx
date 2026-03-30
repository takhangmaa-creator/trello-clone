import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "./style";
import { Column } from "./Column";
import { Card } from "./Card";

export const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffSet } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffSet: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffSet)}>
        {item.type === "COLUMN" ? (
          <Column
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview
          ></Column>
        ) : (
          <Card
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview
            columnId={item.columnId}
          ></Card>
        )}
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
