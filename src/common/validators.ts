export const validTitle = (value: string | number) =>
  /^.{0,24}$/.test(value.toString())

export const validTextarea = (value: string | number) =>
  /^.{0,80}$/.test(value.toString())
