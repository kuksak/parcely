export interface ParcelDetails {
  id: string;
  parcelSku: string,
  description: string,
  town: string,
  country: string,
  deliveryDate: string
}

export interface CreateParcelDetailsRequest {
  parcelSku: string | null,
  description: string | null,
  town: string | null,
  country: string | null,
  deliveryDate: string | null
}

export interface ParcelDetailsByFilterConditions {
  country?: string;
  description?: string;
}
