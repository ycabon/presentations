# Point to point (source/target) view animation

The point to point animation is designed for general purpose single point
to point transitions, as are common for:

1. Interactive navigation such as zooming
1. Framing a layer
1. Applying a slide
1. Zoom widget

More specifically, it is the type of animation that is used to implement the
animation performed by `View.goTo`.

See [Animation.ts](./Animation.ts) for more details on the requirements and
method used to implement the point to point transitions.

## Modules

- [Animation.ts](./Animation.ts): the main animation class.
- [Camera.ts](./Camera.ts): interface defining a camera (view), to be
  implemented by users (View classes) of the animation.
- [Definition.ts](./Definition.ts): representation of parameters of a point to
  point transition.
- [InterpolateComponents.ts](./InterpolateComponents.ts): an interface defining
  the independent components (zoom, pan and rotate) to be interpolated.
- [Path.ts](./Path.ts): a base class for piece wise combination of single point
  to point transitions. A path is composed of multiple [Segments](./Segment.ts).
- [Segment.ts](./Segment.ts): implementation of a single point to point
  transition.
- [Settings.ts](./Settings.ts): animation settings interface.

- [apex/](./apex/): modules that implement animations including transition to
  and from an apex height to improve animation time.
