import Camera from "../Camera";
import Button from "../GUI/Button";
import Checkbox from "../GUI/Checkbox";
import Div from "../GUI/Div";
import Progress from "../GUI/Progress";
import Slider from "../GUI/Slider";
import EditText from "../GUI/Text/EditText";
import TextObject2D from "../GUI/Text/TextObject2D";
import TextObject3D from "../GUI/Text/TextObject3D";
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
