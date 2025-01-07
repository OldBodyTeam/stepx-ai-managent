"use client";

import Title from "@/components/base/Title";
import LabelProgress from "@/components/base/LabelProgress";
import { useMemoizedFn } from "ahooks";
import { Button, Cascader, Form, Input } from "antd";
import Upload from "@/components/base/Upload";
import EditorPreview from "@/components/editor";

const ProductCreate = () => {
  const [form] = Form.useForm();
  const handleSubmit = useMemoizedFn(async () => {
    try {
      await form.validateFields();
      const data = form.getFieldsValue();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Form
      onChange={console.log}
      wrapperCol={{ span: 24 }}
      className="[&_.arco-form-layout-horizontal]:!mb-0"
      form={form}
    >
      <div>
        <Title className="mb-16">Product Information</Title>
        <div className="p-16 rounded-16 bg-FFFFFF mb-24">
          <div className="flex space-x-12 items-center">
            <div className="space-y-8 flex flex-col flex-1">
              <Form.Item name="product_name">
                <Input placeholder="Please enter the product name" />
              </Form.Item>
              <Form.Item name="subtitle">
                <Input placeholder="Please enter subtitle" />
              </Form.Item>
              <Form.Item name="product_link">
                <Input placeholder="Please enter the product link" />
              </Form.Item>
              <Form.Item name="a">
                <Cascader
                  placeholder="Please enter the product link"
                  style={{ width: "100%" }}
                  options={[
                    {
                      value: "zhejiang",
                      label: "Zhejiang",
                      children: [
                        {
                          value: "hangzhou",
                          label: "Hangzhou",
                          children: [
                            {
                              value: "xihu",
                              label: "West Lake",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      value: "jiangsu",
                      label: "Jiangsu",
                      children: [
                        {
                          value: "nanjing",
                          label: "Nanjing",
                          children: [
                            {
                              value: "zhonghuamen",
                              label: "Zhong Hua Men",
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                  multiple
                  maxTagCount="responsive"
                  className="[&_.ant-select-selector]:!py-5 [&_.ant-select-selector]:!rounded-12 "
                />
              </Form.Item>
            </div>
            <div className="space-x-10 h-full flex items-start">
              <Form.Item name="cover">
                <Upload
                  imagePreview
                  listType="picture-card"
                  text="Upload Cover"
                />
              </Form.Item>
              <Form.Item name="logo">
                <Upload
                  imagePreview
                  listType="picture-card"
                  text="Upload logo"
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <Title className="mb-16">Edit Content</Title>
        <Form.Item name="content">
          <EditorPreview />
        </Form.Item>
        <Title className="mb-16">SEO Settings</Title>
        <div className="p-16 rounded-16 bg-FFFFFF">
          <div className="flex space-x-12 items-center">
            <div className="space-y-8 flex flex-col flex-1">
              <LabelProgress
                title="Title"
                explain="Title"
                placeholder="This is what will appear in the first line when this post shows up in the search results."
                base={60}
              />
              <LabelProgress
                title="Permalink"
                explain="Title"
                placeholder="This is the unique URL of this page,displayed below the post title in the search results."
                base={75}
              />
              <LabelProgress
                type="textarea"
                base={160}
                title="Description"
                explain="Title"
                placeholder="This is what will appear as the description when this post shows up in the search results."
              />
            </div>
          </div>
        </div>
      </div>

      <Button onClick={handleSubmit}>Create Post</Button>
    </Form>
  );
};
export default ProductCreate;
