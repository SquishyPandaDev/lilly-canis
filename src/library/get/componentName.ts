// our modules
import { ComponentTag } from "library/componentTag";

export default function(componentTag:ComponentTag):string {
  return ComponentTag[componentTag]
    .split("_")
    .map(
      (part) => part.charAt(0) + part.slice(1).toLocaleLowerCase()
    )
    .join("")
}
