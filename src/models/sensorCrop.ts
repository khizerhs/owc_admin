export interface SensorCrop {
  _id : string;
  crop_id : string
  user_id : string,
  name: string,
  description:string,
  stage : string,
  field_size: string,
  field_capacity: string,
  acreage : string,
  mad : string,
  sensors : string[],
  water_pouring_time : string
}