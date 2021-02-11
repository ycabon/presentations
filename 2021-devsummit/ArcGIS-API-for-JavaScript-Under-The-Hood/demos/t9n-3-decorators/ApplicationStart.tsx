import { jsx } from "../utils/rendering";
import Widget from "./Widget";

class Application extends Widget {
  constructor(params: Pick<Application, "container">) {
    super(params);

    this.bundlesInfo.push(
      {
        property: "messages",
        bundleName: "application",
      },
      {
        property: "common",
        bundleName: "common",
      }
    );
  }

  messages!: {
    helloWorld: string;
  };

  common!: {
    unit: string;
  };

  render() {
    return (
      <div>
        <p>{this.messages.helloWorld}</p>
        <p>{this.common.unit}</p>
      </div>
    );
  }
}

export default Application;
