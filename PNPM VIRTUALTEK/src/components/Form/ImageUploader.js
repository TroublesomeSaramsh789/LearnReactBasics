import { useState } from 'react'
import { Upload, Form } from "antd";
import { notification } from 'antd'

import { getBearerToken } from "../../utils/auth";
import { normFile } from '../../services/normFile/normFile';

const beforeUpload = (file) => {
    if (
        file?.size &&
        file.size > process.env.REACT_APP_MAX_IMAGE_UPLOAD_SIZE
    ) {
        notification.error({
            message: "Image size is large",
            description: `Please choose image less than ${process.env.REACT_APP_MAX_IMAGE_UPLOAD_SIZE / 1024
                }KB!`,
        });
        return Upload.LIST_IGNORE;
    }

 

    if (
        file?.type !== "image/jpg" && file?.type !== "image/jpeg" && file?.type !== "image/png" && file?.type !== "image/webp"
    ) {
        notification.error({
            message: "Images only allowed",
            description: `Please choose a jpg, png or webp image file!`,
        });
        return Upload.LIST_IGNORE;
    }

    return true;
};


export default function ImageUploader(props) {

    return (
        <Upload
            name="upload"
            action={`${process.env.REACT_APP_BASE_API_URL}upload?folder=${props?.folder || ""}`}
            headers={{
                "Authorization": getBearerToken()
            }}
            beforeUpload={beforeUpload}
            {...props}
        >
            <div>
                Upload (Max: {props.maxCount})
            </div>

        </Upload>
    );
}

export function ImageUploaderMultiple(props) {

    const [imageCount, setImageCount] = useState(props.initialImageCount);

    const handleChange = ({ fileList }) => {
        setImageCount(fileList.length)
    }
    return (
        <Form.Item
            label={props.label}
            name={props.name}
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={props.rules}

        >
            <Upload
                name="upload"
                action={`${process.env.REACT_APP_BASE_API_URL}upload?folder=${props.folder || ""}`}
                headers={{
                    "Authorization": getBearerToken()
                }}
                listType="picture-card"
                beforeUpload={beforeUpload}
                onChange={handleChange}
                // {...props}
            >
                {(imageCount >= props.max_count) ?
                    null
                    :
                    <div>
                        Upload (Max: {props.max_count})


                    </div>
                }

            </Upload>
        </Form.Item>

    );
}


