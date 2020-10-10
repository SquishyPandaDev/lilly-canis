// our modules
import * as Type from "library/type/@all"

export default function(
  templateString: string,
  valueMap      : Type.ObjectMap<unknown>,
  doWrap = true,
): string {
  return templateString.replace(
    /\$\{(.+?)\}/g,
    (
      _match,
      p1,
    ) => {
      return (doWrap)
        ? `<${valueMap[p1]}>`
        : `${valueMap[p1]}`
    }
  )
}
