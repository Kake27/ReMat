export interface Bin {
  id: string | number;
  name?: string;
  location: {
    lat: number;
    lng: number;
  };
  status?: "active" | "inactive" | "maintenance" | string;
  fill_level?: number;
}