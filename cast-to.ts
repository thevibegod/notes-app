const castTo = <R>(value: R | any): R => (value as unknown) as R;
export default castTo;

export const identity = <Return>(value: Return): Return => value;