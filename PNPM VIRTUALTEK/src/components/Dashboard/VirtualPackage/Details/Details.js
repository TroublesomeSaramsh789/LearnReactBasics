import { Form, Space, Button } from 'antd'
import { useParams } from 'react-router-dom';

import CKEditorCustom from '../../CKEditor/CKEditor';

import { useEditDetailsVP } from '../../../../services/VirtualPackageManagementService';
export default function Details({data, mode}) {
    const params = useParams()
    const { mutate: editDetailsVPMutate, isLoading: editDetailsVPLoading } = useEditDetailsVP(params._id)

    if (editDetailsVPLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const editDetails = (values) => {
        editDetailsVPMutate(values)
    }
    return (
        <div>
            <Form
                layout="vertical"
                onFinish={editDetails}
                initialValues = {{
                    trekHighlights:data?.trekHighlights || "", 
                    trekDescription: data?.trekDescription || "", 
                    includeExclude:data?.includeExclude || ""

                }}
            >
                <CKEditorCustom
                    intialText=""
                    formItemName="trekHighlights"

                    label="Trip Highlights"
                    rule={[{ required: true, message: "Trip Highlights is required" }]}
                />
                <CKEditorCustom
                    intialText=""
                    formItemName="trekDescription"

                    label="Trip Description"
                    rule={[{ required: true, message: "Trip Description is required" }]}
                />
                <CKEditorCustom
                    intialText=""
                    formItemName="includeExclude"

                    label="Includes/Excludes"
                    rule={[{ required: true, message: "Includes/Excludes is required" }]}
                />


                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                        <Button htmlType="button">
                            Cancel
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}