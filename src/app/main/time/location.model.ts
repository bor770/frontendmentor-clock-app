export type IpbaseAPIResponse = {
  data: { location: { city: { name: string }; country: { name: string } } };
};

export type Location = { city: string; country: string };
