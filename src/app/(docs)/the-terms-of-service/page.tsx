import { getAgreementListCreate } from "./actions";

const TheTermsOfService = async () => {
  const { data } = await getAgreementListCreate();
  return (
    <div>
      {data?.items?.map((v) => {
        if (v.level === 1) {
          return <div key={v.id}>{v.content}</div>;
        } else if (v.level === 2) {
          return <div key={v.id}>{v.content}</div>;
        } else {
          return <div key={v.id}>{v.content}</div>;
        }
      })}
    </div>
  );
};
export default TheTermsOfService;
