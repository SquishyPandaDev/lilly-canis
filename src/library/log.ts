// npm modules
import colors from "colors/safe"

// our modules
import { ComponentTag } from "library/componentTag"
import * as Get         from "library/get/@all"
import * as Type        from "library/type/@all"

export enum Level {
  INFO,
  WARNING,
  ERROR,
}

interface LevelDescriptor {
  color : (text:string) => string
  target: typeof console.log
}


const levelDescriptors:Type.ObjectMap<LevelDescriptor> = {
  [Level.INFO]: {
    color : colors.green,
    target: console.log,
  },

  [Level.WARNING]: {
    color : colors.yellow,
    target: console.log,
  },

  [Level.ERROR]: {
    color : colors.red,
    target: console.error,
  },
}

export function Write(
  level       : Level,
  componentTag: ComponentTag,
  message     : string,
): void {
  const levelDescriptor = levelDescriptors[level]

  const timeStamp = colors.blue(
    `[${Get.IsoDate()}]`,
  )

  const componentName = colors.white(
    `{${Get.ComponentName(componentTag)}}`,
  )

  const formattedMessage = levelDescriptor.color(
    `<${Level[level]}> ${message}`,
  )

  levelDescriptor.target(
    `${timeStamp}${componentName}${formattedMessage}`
  )
}

export function Info(
  componentTag: ComponentTag,
  message     : string
): void {
  Write(
    Level.INFO,
    componentTag,
    message,
  )
}

export function Warning(
  componentTag: ComponentTag,
  message     : string
): void {
  Write(
    Level.WARNING,
    componentTag,
    message,
  )
}

export function Error(
  componentTag: ComponentTag,
  message     : string
): void {
  Write(
    Level.ERROR,
    componentTag,
    message,
  )
}
