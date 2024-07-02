import Camera from "../../Objects/Camera";
import Button from "./Objects/Button";
import Checkbox from "./Objects/Checkbox";
import Div from "./Objects/Div";
import Progress from "./Objects/Progress";
import Slider from "./Objects/Slider";
import EditText from "./Objects/Text/EditText";
import TextObject2D from "./Objects/Text/TextObject2D";
import TextObject3D from "./Objects/Text/TextObject3D";
export declare class OverlayRendering {
    private camera;
    private guiObjects3D;
    private guiObjects2D;
    constructor(camera?: Camera);
    setCamera(camera: Camera): void;
    clear(): void;
    hide(): void;
    show(): void;
    getNew3DText(): TextObject3D;
    getNew2DText(parentDiv?: Div): TextObject2D;
    getNewCheckbox(parentDiv?: Div): Checkbox;
    getNewButton(parentDiv?: Div): Button;
    getNewSlider(parentDiv?: Div): Slider;
    getNewEditText(parentDiv?: Div): EditText;
    getNewProgress(parentDiv?: Div): Progress;
    getNewDiv(parentDiv?: Div): Div;
    draw(): void;
}
