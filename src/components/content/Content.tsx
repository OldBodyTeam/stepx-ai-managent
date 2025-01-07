import ListEmpty from "../empty/ListEmpty";
import FilterTitle from "./FilterTitle";
import List from "./List";

const Content = () => {
  const listData = [];
  return listData.length > 0 ? (
    <div className="pb-16">
      <FilterTitle />
      <div className="grid desktop12:grid-cols-2 desktop14:grid-cols-3 desktop19:grid-cols-4 gap-16">
        {Array(20)
          .fill(1)
          .map((_, index) => {
            return (
              <div key={index}>
                <List />
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center w-full h-full flex-1">
      <ListEmpty />
    </div>
  );
};
export default Content;
