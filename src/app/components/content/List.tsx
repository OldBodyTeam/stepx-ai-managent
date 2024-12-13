import Image from "next/image";
const List = () => {
  return (
    <div className="bg-FFFFFF border-1 border-E8E8E9 p-16">
      <div className="mb-16 flex items-center">
        <div className="bg-D0FF71 w-44 h-44 mr-8">x</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-xs16 text-222222 font-medium flex items-center">
              Sync. labs
              <Image
                src="/yes-yellow.png"
                alt="yellow"
                width={14}
                height={14}
                className="ml-4"
              />
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-xs12 text-222222">Delete</div>
              <div className="text-xs12 text-222222">Edit</div>
            </div>
          </div>
          <div className="line-clamp-1 text-xs12 text-222222">
            Animate people speaking…
          </div>
        </div>
      </div>
      <div className="rounded-8 bg-E8E8E9 p-12 mb-16">
        <div className="flex items-center">
          <div className="border-r-[1px] border-F0F0F0 border-b-[1px] flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-222222 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
          <div className="border-F0F0F0 border-b-[1px] flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-222222 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-r-[1px] border-F0F0F0 flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-222222 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-222222 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
        </div>
      </div>
      <div className="h-44 rounded-44 w-full bg-D0FF71 flex items-center justify-center py-12 font-medium  text-222222 text-xs14">
        Renew
      </div>
    </div>
  );
};
export default List;
