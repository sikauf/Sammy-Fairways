"use client";

import { testRemoveCourse } from "@/app/actions/test-remove";
import { useTransition } from "react";

export default function TestRemoveButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => {
        startTransition(async () => {
          try {
            const res = await testRemoveCourse();
            alert(`Deleted row id: ${res.deletedId}`);
          } catch (e) {
            console.error(e);
            alert("Delete failed. Check console.");
          }
        });
      }}
      disabled={pending}
      className="px-4 py-2 rounded-md border text-sm font-medium"
    >
      {pending ? "Deleting..." : "Test Remove"}
    </button>
  );
}
