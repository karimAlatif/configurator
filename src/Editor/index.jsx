//Libs
import React, {
  createRef,
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Typography, Spin, Layout, Menu, Button } from "antd";

//Components
import LeftSideMenu from "../LeftSideMenu";
import BabylonManager from "../BabylonManager";
// import EditorButtons from './EditorButtons';

//
const { Header } = Layout;
const { Title } = Typography;

const gmRef = createRef(null);
export const GmContext = createContext(null);
//

const Editor = () => {
  const [gameManager, setGameManager] = useState(null);
  const studioSceneHandlers = useMemo(() => {
    return {
      onSelect: (params) => {},
      onDrag: () => {
        console.log("Ui Drag Action !!");
      },
      onDrop: (faceCompsData) => {
        console.log("Ui Drop Action !!", faceCompsData);
      },
      onDeselect: () => {},
    };
  }, []);

  useEffect(() => {
    const GManger = BabylonManager(gmRef.current).GManger; //Create Babylonjs Ref
    GManger.studioSceneManager.handlers = studioSceneHandlers; //Hnadlers
    setGameManager(GManger);
  }, [setGameManager, studioSceneHandlers]);

  console.log("sss", gameManager);
  return (
    <GmContext.Provider value={gameManager}>
      <Row style={{ height: "100%" }} type="flex">
        {/* <Col span={7}>
          <LeftSideMenu
          // styles = {styles}
          />
        </Col> */}
        {/* 14 */}
        <Col span={17} style={{ height: "100%" }}>
          {/* <div className="container"> */}
          <canvas {...{}} className="canvas" ref={gmRef} />
          {/* <EditorButtons 
                  /> */}
          {/* </div> */}
        </Col>
      </Row>
    </GmContext.Provider>
  );
};
export default Editor;

// On Windows Shift + Alt + F.
// On Mac Shift + Option + F.
