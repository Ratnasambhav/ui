export function classNames(classMap: Record<string, boolean>): string {
  let classes = '';
  for (let c in classMap) {
    classes += classMap[c] ? classMap[c] : '';
  }
  return classes;
}
