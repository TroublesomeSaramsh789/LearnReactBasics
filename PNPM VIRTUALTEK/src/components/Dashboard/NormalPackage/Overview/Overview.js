import { Form, Input, Button, Space } from "antd";
import { useParams } from "react-router-dom";

import {
  useAddOverviewNP,
  useEditOverviewNP,
} from "../../../../services/NormalPackageManagementService";
import CKEditorCustom from "../../CKEditor/CKEditor";
const { TextArea } = Input;

export default function Overview({ data, mode }) {
  const params = useParams();

  const { mutate: addOverViewNPMutate, isLoading: addOverViewNPLoading } =
    useAddOverviewNP();
  const { mutate: editOverViewNPMutate, isLoading: editOverViewNPLoading } =
    useEditOverviewNP(params?._id);

  const addOverViewNP = (values) => {
    values["trekType"] = "Normal";

    if (mode === "create") {
      addOverViewNPMutate(values);
    } else {
      editOverViewNPMutate(values);
    }
  };

  if (addOverViewNPLoading || editOverViewNPLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={addOverViewNP}
        autoComplete="off"
        initialValues={{
          title: data?.title || "",
          subTitle: data?.subTitle || "",
          name: data?.subTitle || "",
          content: data?.content || "",
          destination: data?.destination || "",
          duration: data?.duration || "",
          country: data?.country || "",
          trekLevel: data?.trekLevel || "",
          maxAltitude: data?.maxAltitude || "",
          activity: data?.activity || "",
          startAtAddress: data?.startAtAddress || "",
          endAtAddress: data?.endAtAddress || "",
          trekRoute: data?.trekRoute || "",
          bestSeason: data?.bestSeason || "",
        }}
      >
        <Form.Item
          label="Package Title"
          name="title"
          rules={[{ required: true, message: "Enter package title" }]}
        >
          <Input placeholder="Package Title" />
        </Form.Item>

        <Form.Item
          label="Package Subtitle"
          name="subTitle"
          rules={[{ required: true, message: "Enter package subtitle" }]}
        >
          <Input placeholder="Package Title" />
        </Form.Item>
        <Form.Item
          label="Package Content"
          name="content"
          rules={[{ required: true, message: "Enter the package content" }]}
        >
          <TextArea rows={5} placeholder="Package Content" />
        </Form.Item>
        <Form.Item
          name="destination"
          label="Destination"
          rules={[{ required: true, message: "Enter the destination" }]}
        >
          <Input placeholder="Destination" />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[{ required: true, message: "Enter the duration" }]}
        >
          <Input placeholder="Duration" />
        </Form.Item>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Enter country" }]}
            >
              <Input placeholder="Country" />
            </Form.Item>
          </div>
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Trip Level"
              name="trekLevel"
              rules={[{ required: true, message: "Enter the trip level" }]}
            >
              <Input placeholder="Trip Level" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Max Altitude"
              name="maxAltitude"
              rules={[{ required: true, message: "Enter max altitude" }]}
            >
              <Input placeholder="Max Altitude" />
            </Form.Item>
          </div>
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Activity"
              name="activity"
              rules={[{ required: true, message: "Enter activity" }]}
            >
              <Input placeholder="Activity" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Starts At"
              name="startAtAddress"
              rules={[{ required: true, message: "Enter start address" }]}
            >
              <Input placeholder="Starts At" />
            </Form.Item>
          </div>
          <div className="col-md-6 col-lg-6">
            <Form.Item
              label="Ends At"
              name="endAtAddress"
              rules={[{ required: true, message: "Enter end address" }]}
            >
              <Input placeholder="Ends At" />
            </Form.Item>
          </div>
        </div>

        <Form.Item
          label="Trek Route"
          name="trekRoute"
          rules={[{ required: true, message: "Trip Route is required" }]}
        >
          <TextArea cols={3} />
        </Form.Item>
        <Form.Item
          label="Best Season"
          name="bestSeason"
          rules={[{ required: true, message: "Best Season is required" }]}
        >
          <TextArea cols={3} />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button htmlType="button">Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
