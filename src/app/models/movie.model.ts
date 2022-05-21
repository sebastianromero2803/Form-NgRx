export interface MovieListResponse {
  data: {results: any; totalResults: number};
  error: boolean;
  Response: string;
}

export interface MovieInterface {
  id: string;
  poster: string;
  title: string;
  type: string;
  year: string;
  registerDate?: Date;
  comment?: string;
}
