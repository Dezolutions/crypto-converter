export type Tcoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume: number;
}

export type TCoinDiff = { 
  [key: string]: string 
};

export type TSelectedCoin = {
  name: string;
  price: number;
};

export type TsummObj = {
  value1: number,
  value2: number
}

export type Tstate = {
  items: Tcoin[],
  diffObj: TCoinDiff
}