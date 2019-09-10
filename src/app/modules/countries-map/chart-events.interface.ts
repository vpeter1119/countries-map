export interface ChartSelectEvent {
  selected: boolean;
  value: number | null;
  country: string;
}

export enum CharErrorCode {loading = 'loading'}

export interface ChartErrorEvent {
  id: string | CharErrorCode;
  message: string;
  detailedMessage?: string;
  options?: Object;
}
