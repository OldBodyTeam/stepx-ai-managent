"use client";

import Title from "@/components/base/Title";
import LabelProgress from "@/components/base/LabelProgress";
import { useMemoizedFn, useMount } from "ahooks";
import { Cascader, Form, Input } from "antd";
import Upload from "@/components/base/Upload";
import EditorPreview from "@/components/editor";
import { FC, useMemo } from "react";
import {
  CategoryListCreate200ResponseDataItemsInner,
  CoverColorListCreate200ResponseDataItemsInner,
  PaymentPlanListCreate200ResponseDataItemsInner,
  ProductDetailCreate200ResponseData,
} from "@/services";
import ColorList from "@/components/color-list/ColorList";
import Image from "next/image";
import AntdUpload from "@/components/base/AntdUpload";
import { updateProductList } from "@/app/(home)/[userId]/product/create/actions";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { get } from "lodash";
export interface ProductCreateProps {
  colorList?: CoverColorListCreate200ResponseDataItemsInner[];
  categoryList?: CategoryListCreate200ResponseDataItemsInner[];
  paymentPlanListData?: PaymentPlanListCreate200ResponseDataItemsInner[];
  editFormData?: ProductDetailCreate200ResponseData;
}
const ProductEdit: FC<ProductCreateProps> = (props) => {
  const { colorList, categoryList, editFormData } = props;
  const [form] = Form.useForm();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleSubmit = useMemoizedFn(async (payData?: any) => {
    try {
      await form.validateFields();
      const params = form.getFieldsValue();
      console.log(params, payData, editFormData);
      const data = await updateProductList({
        ...editFormData,
        ...params,
        ...payData,
      });
      console.log(data);
      showErrorMessage(data ?? {});
    } catch (error) {
      console.log(error);
      messageApi.error(get(error, "errorFields.0.errors.0"));
    }
  });

  useMount(() => {
    form.setFieldsValue(editFormData);
  });

  const list = useMemo(() => {
    const transformData = (
      items?: CategoryListCreate200ResponseDataItemsInner[]
    ): any[] => {
      if (!items) return [];
      return items.map((item) => ({
        label: item.name,
        value: item.id,
        children: item.children ? transformData(item.children) : undefined,
      }));
    };

    return transformData(Array.isArray(categoryList) ? categoryList : []);
  }, [categoryList]);
  const formatCategory = useMemo(() => {
    const map = new Map<number, { fatherId: number }>();
    list.forEach((item) => {
      item.children.forEach((element: any) => {
        map.set(element.value, { fatherId: item.value });
      });
    });
    return map;
  }, [list]);
  const handleCategoryIds = useMemoizedFn((value: any) => {
    // console.log([...value].map((v) => v.slice(1)).flat());
    if (!value.some((item: any) => item instanceof Array)) {
      return value;
    }
    return (value ?? ([[]] as number[][]))
      .map((v: number[]) => {
        const childId = [...v].slice(1);
        if (childId.length === 0 && v.at(0)) {
          const { children } = list.find((m) => m.value === v.at(0)) ?? {};
          return children.map((s: any) => s.value);
        }
        return childId;
      })
      .flat();
  });
  const handleFormatCategoryIds = useMemoizedFn((value: any) => {
    const formatData = ((value || []) as number[]).reduce((initValue, item) => {
      if (formatCategory.has(item)) {
        const { fatherId } = formatCategory.get(item)!;
        if (initValue.has(fatherId)) {
          const childList = initValue.get(fatherId)!;
          childList?.add(item);
          initValue.set(fatherId, childList);
        } else {
          const childList = new Set([item]);
          initValue.set(fatherId, childList);
        }
      }
      return initValue;
    }, new Map() as Map<number, Set<number>>);
    const list = [] as any[][];
    Object.entries(formatData).forEach(([key, value]) => {
      Array.from(value).forEach((v) => {
        list.push([key, v]);
      });
    });
    return list as any;
  });
  return (
    <div className="overflow-y-auto overflow-x-hidden scrollbar-none flex-1">
      {contextHolder}
      <Form
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
                <Form.Item name="product_name" rules={[{ required: true }]}>
                  <Input placeholder="Please enter the product name" />
                </Form.Item>
                <Form.Item name="subtitle">
                  <Input placeholder="Please enter subtitle" />
                </Form.Item>
                <Form.Item name="product_link" rules={[{ required: true }]}>
                  <Input placeholder="Please enter the product link" />
                </Form.Item>
                <Form.Item
                  name="category_ids"
                  normalize={handleCategoryIds}
                  getValueProps={handleFormatCategoryIds}
                >
                  <Cascader
                    placeholder="Please enter the product link"
                    style={{ width: "100%" }}
                    options={list}
                    multiple
                    maxTagCount="responsive"
                    className="[&_.ant-select-selector]:!py-5 [&_.ant-select-selector]:!rounded-12 "
                    tagRender={(props) => {
                      return (
                        <div className="bg-D0FF71 px-10 py-4 rounded-25 text-xs12 text-101010 font-medium flex items-center mx-2">
                          {props.label}
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/rate/close.png`}
                            width={10}
                            height={10}
                            alt="close"
                            className="ml-2"
                          />
                        </div>
                      );
                    }}
                  />
                </Form.Item>
              </div>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues: any, curValues: any) =>
                  prevValues.cover_color_id !== curValues.cover_color_id
                }
              >
                {({ getFieldValue }) => {
                  const colorId = getFieldValue("cover_color_id");
                  const color = colorList?.find((v) => v.id === colorId);
                  console.log(color);
                  return (
                    <Form.Item
                      name="logo"
                      className="min-h-0 overflow-hidden [&_.ant-form-item-row]:!h-full [&_.ant-form-item-control]:!h-full [&_.ant-form-item-control-input]:!h-full [&_.ant-form-item-control-input-content]:!h-full"
                    >
                      <Upload
                        imagePreview
                        listType="picture-card"
                        text="Upload logo"
                        showErrorMessage={showErrorMessage}
                        key={"logo"}
                        bgColor={color?.background_color}
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
            </div>
            <div className="text-xs12 font-medium text-101010 mt-16 mb-12">
              Logo Background Color
            </div>
            <Form.Item name="cover_color_id">
              <ColorList colorList={colorList} />
            </Form.Item>
            <div className="text-xs12 font-medium text-101010 mt-16 mb-12">
              Upload Pictures
            </div>
            <Form.Item name="cover">
              <AntdUpload
                imagePreview
                listType="picture-card"
                text="Upload Cover"
                className={"!w-104 !h-104 !min-h-104"}
                showClassName="!h-104 !min-h-104"
                showErrorMessage={showErrorMessage}
                key={"cover"}
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
                <Form.Item name="title" rules={[{ required: true }]}>
                  <LabelProgress
                    title="Title"
                    explain="Title"
                    placeholder="This is what will appear in the first line when this post shows up in the search results."
                    base={60}
                  />
                </Form.Item>
                <Form.Item name="permalink" rules={[{ required: true }]}>
                  <LabelProgress
                    title="Permalink"
                    explain="Title"
                    placeholder="This is the unique URL of this page,displayed below the post title in the search results."
                    base={75}
                    type="input"
                  />
                </Form.Item>
                <Form.Item name="description">
                  <LabelProgress
                    type="textarea"
                    base={160}
                    title="Description"
                    explain="Title"
                    placeholder="This is what will appear as the description when this post shows up in the search results."
                  />
                </Form.Item>
                <Form.Item name={"focus_keyword"}>
                  <LabelProgress
                    type="select"
                    base={10}
                    title="Focus Keyword"
                    explain="Title"
                    placeholder="This is what will appear as the description when this post shows up in the search results."
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-101010 text-xs14 font-medium rounded-48 bg-FFFFFF my-16"
          onClick={handleSubmit}
        >
          Submit For Review
        </div>
      </Form>
    </div>
  );
};
export default ProductEdit;
