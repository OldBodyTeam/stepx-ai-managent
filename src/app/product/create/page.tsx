import Input from "@/components/base/Input";
import Upload from "@/components/base/Upload";
import Title from "@/components/base/Title";
import LabelProgress from "@/components/base/LabelProgress";
import Editor from "@/components/editor";

const ProductCreate = () => {
  return (
    <div>
      <div>
        <Title className="mb-16">Product Information</Title>
        <div className="p-16 rounded-16 bg-FFFFFF mb-24">
          <div className="flex space-x-12 items-center">
            <div className="space-y-8 flex flex-col flex-1">
              <Input placeholder="Please enter the product name" />
              <Input placeholder="Please enter subtitle" />
              <Input placeholder="Please enter the product link" />
            </div>
            <div className="space-x-10 h-full">
              <Upload
                imagePreview
                listType="picture-card"
                text="Upload Cover"
              />
              <Upload imagePreview listType="picture-card" text="Upload logo" />
            </div>
          </div>
        </div>
        <Title className="mb-16">Edit Content</Title>
        <div className="p-16 rounded-16 bg-FFFFFF mb-24 min-h-400">
          <Editor />
        </div>
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

      <button type="submit">Create Post</button>
    </div>
  );
};
export default ProductCreate;
