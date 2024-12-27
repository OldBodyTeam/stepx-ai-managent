import { FC, PropsWithChildren } from "react";

const RegisterLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="p-48 flex w-full h-full bg-EDEDED">
      {children}
      <div>right</div>
    </div>
  );
};
export default RegisterLayout;
