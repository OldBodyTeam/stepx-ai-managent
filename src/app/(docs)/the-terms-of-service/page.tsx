import { getAgreementListCreate } from "./actions";

const TheTermsOfService = async () => {
  const { data } = await getAgreementListCreate();
  return (
    <div className="flex flex-col justify-center w-[720px]">
      {data?.items?.map((v) => {
        if (v.level === 0) {
          return (
            <div
              key={v.content}
              className="text-222222 font-bold text-xs26 flex items-center justify-center mb-6 mt-40"
            >
              {v.content}
            </div>
          );
        } else if (v.level === 1) {
          return (
            <div
              key={v.content}
              className="text-222222 text-xs12 flex items-center justify-center mb-32"
            >
              {v.content}
            </div>
          );
        } else if (v.level === 2) {
          return (
            <div
              key={v.content}
              className="text-222222 font-bold text-xs20 mb-16"
            >
              {v.content}
            </div>
          );
        } else if (v.level === 3) {
          return (
            <div
              key={v.content}
              className="text-222222 font-bold text-xs14 mb-16"
            >
              {v.content}
            </div>
          );
        } else if (v.level === 4) {
          return (
            <div key={v.content} className="text-222222  text-xs14 mb-16">
              {v.content}
            </div>
          );
        } else if (v.level === 5) {
          return (
            <div
              key={v.content}
              className="text-222222 font-bold text-xs14 mb-16"
            >
              {v.content}
            </div>
          );
        } else if (v.level === 6) {
          return (
            <div
              key={v.content}
              className="text-222222  text-xs14 flex items-start mb-8"
            >
              <div className="w-8 h-8 bg-D0FF71 rounded-8 mr-2 mt-6"></div>
              {v.content}
            </div>
          );
        }
      })}
    </div>
  );
};
export default TheTermsOfService;
