import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR(
    typeof window === "undefined" ? null : "/api/me"
  );
  const router = useRouter();
  // useEffect(() => {
  //   if (data && !data.ok) {
  //     router.replace("/");
  //   }
  // }, [data, router]);
  return { user: data, isLoading: !data && !error, error };
}