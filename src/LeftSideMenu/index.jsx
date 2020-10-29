import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { GmContext } from "../Editor/";
import { Tabs, Input, Typography, Button, Form } from "antd";
import {
  BuildOutlined,
  FullscreenOutlined,
  WindowsOutlined,
  BgColorsOutlined,
  SendOutlined,
  GatewayOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;
const { Title } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
  labelCol: {
    // offset: 1,
  },
};

const tailLayout1 = {
  wrapperCol: {
    offset: 3,
    span: 20,
  },
  labelCol: {
    offset: 1,
  },
};

const LeftSideMenu = () => {
  const [form] = Form.useForm();
  const onFinish = (gameManager, data) => {
    gameManager.studioSceneManager.buildCushion(data);
  };

  return (
    <GmContext.Consumer>
      {(gameManager) => {
        if (!gameManager) {
          return null;
        }
        return (
          <React.Fragment>
            <Row style={{ paddingTop: "20px", marginBottom: "20px" }}>
              <Col offset={3}>
                <Title
                  style={{ color: "#000", textDecoration: "underline" }}
                  level={2}
                >
                  Cushion Customizer
                </Title>
              </Col>
            </Row>
            <Form
              // style={{marginLeft:"15px"}}
              {...layout}
              form={form}
              name="horizontal_login"
              layout="vertical"
              onFinish={(data) =>onFinish(gameManager, data)}
            >
              <Row
                gutter={24}
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                }}
              >
                <Col span={8}>
                  <Form.Item
                    style={{color:"red"}}
                    {...tailLayout1}
                    label="WIDTH"
                    name="width"
                    rules={[
                      {
                        required: true,
                        message: "width is messing!",
                      },
                    ]}
                  >
                    <Input placeholder={10} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    {...tailLayout1}
                    label="LENGTH"
                    name="length"
                    rules={[
                      {
                        required: true,
                        message: "length is messing!",
                      },
                    ]}
                  >
                    <Input placeholder={10} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    {...tailLayout1}
                    label="HEIGHT"
                    name="height"
                    rules={[
                      {
                        required: true,
                        message: "height is messing!",
                      },
                    ]}
                  >
                    <Input placeholder={2} />
                  </Form.Item>
                </Col>
              </Row>

              {/* LENGTH (A) */}
              <Row style={{ paddingTop: "10px" }}>
                <Col offset={1}>
                  <Form.Item {...tailLayout1} label="LENGTH (A)" name="lengthA">
                    <Input style={{ width: "120px" }} placeholder={280} />
                  </Form.Item>
                </Col>
              </Row>

              {/* FRONT HEIGHT (B) */}
              <Row style={{ paddingTop: "5px" }}>
                <Col offset={1} span={8}>
                  <Form.Item
                    {...tailLayout1}
                    label="FRONT HEIGHT (B)"
                    name="frontHeight"
                  >
                    <Input style={{ width: "120px" }} placeholder={280} />
                  </Form.Item>
                </Col>
              </Row>

              {/* REAR HEIGHT (C) */}
              <Row style={{ paddingTop: "5px" }}>
                <Col offset={1} span={8}>
                  <Form.Item
                    {...tailLayout1}
                    label="REAR HEIGHT (C)"
                    name="rearHeight"
                  >
                    <Input style={{ width: "120px" }} placeholder={280} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item {...tailLayout}>
                <Button
                  style={{
                    width: "200px",
                    height: "50px",
                    fontSize: "20px",
                    marginTop: "15px",
                  }}
                  size="large"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </React.Fragment>
        );
      }}
    </GmContext.Consumer>
  );
};
export default LeftSideMenu;
