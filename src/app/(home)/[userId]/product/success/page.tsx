"use client";

import { useMount, useRequest } from "ahooks";
import { paySuccess } from "./actions";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
const PayProductionSuccess = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { run } = useRequest(paySuccess, { manual: true });
  useMount(() => {
    const payer_id = searchParams?.get("PayerID") ?? "";
    const payment_id = searchParams?.get("paymentId") ?? "";
    run({ payer_id, payment_id });
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
export default PayProductionSuccess;
