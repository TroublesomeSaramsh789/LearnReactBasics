import { Form } from 'antd'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "./CKEditor.scss"

export default function CKEditorCustom({ initialText, formItemName, rule, label }) {
   
    return (
       
        <Form.Item
            name={formItemName}
            label={label}
            valuePropName='data'
            getValueFromEvent={(event, editor) => {
                const data = editor.getData();
                return data;
            }}
            rules={rule}
        >
            <CKEditor
                editor={ClassicEditor}
            />
        </Form.Item>
    )
}