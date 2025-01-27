"use client";

import { useMount, useRequest } from "ahooks";
import { payFail } from "./actions";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
const PayProductionFail = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { run } = useRequest(payFail, { manual: true });
  useMount(() => {
    const order_no = searchParams?.get("order_no") ?? "";
    run({ order_no });
  });
  const router = useRouter();
  return (
    <div className="flex-1">
      <div
        onClick={() =>
          router.push(
            (pathname || ("" as string)).split("/").slice(0, 3).join("/")
          )
        }
      >
        go back
      </div>
    </div>
  );
};
export default PayProductionFail;
