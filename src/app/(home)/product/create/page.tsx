"use client";

import Title from "@/components/base/Title";
import LabelProgress from "@/components/base/LabelProgress";
import { useMemoizedFn, useMount, useRequest } from "ahooks";
import { Button, Cascader, Form, Input } from "antd";
import Upload from "@/components/base/Upload";
import EditorPreview from "@/components/editor";
import { useMemo } from "react";
import { getList } from "./actions";
import { CategoryListCreate200ResponseDataItems } from "@/services";
import ColorList from "@/components/color-list/ColorList";

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
  const { run, data, loading } = useRequest(getList, { manual: true });
  useMount(() => {
    run();
  });
  const list = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    const transformData = (
      items?: CategoryListCreate200ResponseDataItems[]
    ): any[] => {
      if (!items) return [];
      return items.map((item) => ({
        label: item.name,
        value: item.id,
        children: item.children ? transformData(item.children) : undefined,
      }));
    };

    return transformData(Array.isArray(data.data.items) ? data.data.items : []);
  }, [data?.data]);
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
          <div
            className="flex space-x-12 items-center"
            style={{ alignItems: "stretch" }}
          >
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
                  options={list}
                  multiple
                  maxTagCount="responsive"
                  className="[&_.ant-select-selector]:!py-5 [&_.ant-select-selector]:!rounded-12 "
                  loading={loading}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="logo"
              className="min-h-0 overflow-hidden [&_.ant-form-item-row]:!h-full [&_.ant-form-item-control]:!h-full [&_.ant-form-item-control-input]:!h-full [&_.ant-form-item-control-input-content]:!h-full"
            >
              <Upload imagePreview listType="picture-card" text="Upload logo" />
            </Form.Item>
          </div>
          <div className="text-xs12 font-medium text-101010 mt-16 mb-12">
            Logo Background Color
          </div>
          <Form.Item name="color">
            <ColorList />
          </Form.Item>
          <div className="text-xs12 font-medium text-101010 mt-16 mb-12">
            Upload Pictures
          </div>
          <Form.Item name="cover">
            <Upload
              imagePreview
              listType="picture-card"
              text="Upload Cover"
              className={"!w-104 !h-104"}
            />
          </Form.Item>
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
