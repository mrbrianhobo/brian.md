import type { APIContext } from "astro";

const url =
  "https://drive.google.com/file/d/1Qc3TNKAHPhXGO5wvm8OJwdwhLcraRubG/view";

export function get({ redirect }: APIContext) {
  return redirect(url);
}
