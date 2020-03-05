# Object Symbol Layer Orientation
The orientation of an Object symbol layer can be controlled using the 3 rotation axes `heading`, `tilt`, and `roll`. Those degrees of freedom are available both in the symbol layer itself (via respectively named properties), and in rotation visual variables (via the `axis` property).
 
By convention, the resources referenced by Object symbol layers (WOSR) should initially be oriented s.t.
* the **Y-axis** points into the same direction as the **forward direction** of the model,
* the **Z-axis** points into the same direction as the **up direction** of the model,
* the **X-axis** points to the **right** of the model.
 
 Given this orientation, and given that the scene is using an [ENU coordinate system](https://en.wikipedia.org/wiki/Axes_conventions), the rotation axes have the following effect:
* A positive `heading` value rotates the model in clockwise sense. At 0&deg;, the model points North. At 90&deg;, the model points East.
* A positive `tilt` value lifts the "nose" (front part) and lowers the "tail" of the model. At 0&deg;, the model points forward. At 90&deg;, the model points upward.
* A positive `roll` value lifts the left side and lowers the right side of the model. At 0&deg;, the model is level. At 90&deg;, the "left wing" of the model points upward.

## Implementation
The `heading`, `tilt`, and `roll` properties correspond to [intrinsic rotation angles](https://en.wikipedia.org/wiki/Euler_angles#Definition_by_intrinsic_rotations) around the z, x, and y axis (respectively). The same orientation can be achieved using *y-x-z* extrinsic rotation (where y = roll, x = tilt, z = heading). 

In the [canonical way for defining 3D rotations](https://en.wikipedia.org/wiki/Rotation_matrix#In_three_dimensions), a rotation appears counter-clockwise when the rotation axis faces the observer. Therefore, the `heading` angle typically needs to be negated to fulfill the orientation requirements of the previous section.

In summary, the desired orientation can be established by first rotating around the Y-axis by `roll`, then around the X-axis by `tilt`, and finally around the Z-axis by `-heading`.

## Visual Variables
Visual variables of type [`rotationInfo`](../rotationInfo_visualVariable.md) have an optional `axis` property which can take the values `"heading"` (default), `"tilt"`, and `"roll"`. A renderer can contain multiple such visual variables to drive all rotation axes with a different attribute.

Rotation from visual variables is applied to the entire symbol in a separate transformation. This transformation takes place after all symbol layer transformations (including the symbol layer orientation properties). Other than that, it follows the same rules as the symbol layer orientation. A symbol layer with orientation values *(heading, tilt, roll) = (r1, r2, r3)* and no rotationInfo visual variables on the renderer should receive the same orientation as a symbol layer with *(heading, tilt, roll) = (0, 0, 0)* and rotationInfo visual variables that resolve to the values *(r1, r2, r3)* for heading, tilt, and roll.

Note that non-zero values in the symbol layer orientation properties rotate the coordinate frame for the subsequent visual variable transformation. If a model is initially oriented as described in the first section, but then re-oriented in the symbol layer by `heading = 90`, a `rotationInfo` with `axis = "tilt"` does not effectively change the tilt of the model, as it still causes a rotation around the X-axis (which now corresponds to the model's roll axis).

The `rotationType` property of rotationInfo visual variables only has as effect for the heading axis. If `axis = "heading"` and `rotationType = "arithmetic"`, the output of the visual variable should be `90&deg; - fieldValue`. Otherwise, `rotationType` should not have any effect.
