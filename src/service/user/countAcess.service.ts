const accessControl: number[] = [];
export function countAcess(accessId: number, isPush: boolean): number[] {
  if (isPush) {
    accessControl.push(accessId);
  }
  return accessControl;
}
