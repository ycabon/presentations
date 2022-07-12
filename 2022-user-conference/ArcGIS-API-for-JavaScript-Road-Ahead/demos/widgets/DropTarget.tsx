import {
  property, subclass
} from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Widget from "@arcgis/core/widgets/Widget";

function isThenable<T>(obj: any): obj is Promise<T> {
  return obj && typeof obj.then === "function";
}

interface DropTarget<T> {
  on(name: "drop", eventHandler: (event: { item: T }) => void): IHandle;
}

@subclass("widgets.DropTarget")
class DropTarget<T = any> extends Widget {
  constructor(
    props?: Partial<
      Pick<DropTarget<T>, "drop"> & __esri.WidgetProperties
    >
  ) {
    super(props as any);
  }

  @property()
  drop?: (dataTransfer: DataTransfer) => T | Promise<T>;

  @property()
  private state: "ready" | "dragging" | "hover" | "loading" = "ready";

  render() {
    const style = "padding-top: 32px; padding-bottom: 20px; background-color: rgb(248, 248, 248); box-sizing: border-box; border: 2px dashed rgb(202, 202, 202); text-align: center;";

    if (this.state === "hover") {}

    return (
      <div bind={this} style={style} ondragend={this._dragLeaveHandler} ondragenter={this._dragEnterHandler} ondragleave={this._dragLeaveHandler} ondragover={this._dragOverHandler} ondrop={this._dropHandler}>
        <svg
          width="42"
          height="54"
          viewBox="0 0 42 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.566 0H0V53.8H41.8V10.234L31.566 0ZM31.8 1.366L40.434 10H31.8V1.366ZM0.799999 53V0.8H31V10.8H41V53H0.799999Z"
            fill="#6A6A6A"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.9004 38V25.707L18.2544 28.354L17.5474 27.647L21.4004 23.793L25.2544 27.647L24.5474 28.354L21.9004 25.707V38H20.9004ZM14.9004 21H27.9004V20H14.9004V21Z"
            fill="#6A6A6A"
          ></path>
        </svg>
        <h3>Drop here your image or video file</h3>
      </div>
    );
  }

  private _dragEnterHandler = (event: DragEvent) => {
    this._receiveEvent(event);
    this.state = "dragging";
  };

  private _dragLeaveHandler = (event: DragEvent) => {
    if (event.currentTarget !== this.container) {
      this.state = "ready";
    }
  };

  private _dropHandler = (event: DragEvent) => {
    this._receiveEvent(event);

    const dataTransfer = event.dataTransfer;

    if (this.drop && dataTransfer) {
      const dropped = this.drop(dataTransfer);

      if (isThenable(dropped)) {
        this.state = "loading";

        dropped
          .then((dropped) => {
            this.state = "ready";
            this.emit("drop", {
              item: dropped,
            });
          })
          .catch(() => {
            this.state = "ready";
          });
      } else {
        this.state = "ready";
        this.emit("drop", {
          item: dropped,
        });
      }
    } else {
      this.state = "ready";

      this.emit("drop", {
        item: dataTransfer,
      });
    }
  };

  private _dragOverHandler = (event: DragEvent) => {
    this._receiveEvent(event);
  };

  private _receiveEvent = (event: DragEvent) => {
    event.preventDefault();
    this.state = "hover";
  };
}

export default DropTarget;
