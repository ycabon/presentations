import { jsx } from "../utils/rendering";
import Widget from "./Widget";

class Application extends Widget {
  @messageBundle("application")
  messages!: {
    helloWorld: string;
  };

  @messageBundle("common")
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

// TypeScript decorators to inject message bundle information
function messageBundle(bundleName: string): PropertyDecorator {
  return (target, propertyKey) => {
    const proto = Object.getPrototypeOf(target);

    proto.bundlesInfo = [
      ...(proto.bundlesInfo ?? []),
      {
        property: propertyKey,
        bundleName,
      },
    ];
  };
}

export default Application;
