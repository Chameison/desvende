interface BusinessStatus {
    business_status: string; // OPERATIONAL
  }
  
  interface FormattedAddress {
    formatted_address: string; // R. Eldorado, 119 - Jorge Lavocate, Rio Branco - AC, 69922-014, Brazil
  }
  
  interface Location {
    lat: number; // -9.9281866
    lng: number; // -67.8390443
  }
  
  interface Geometry {
    location: Location;
    viewport: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
  }
  
  interface Icon {
    icon: string; // https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png
    icon_background_color: string; // #4B96F3
    icon_mask_base_uri: string; // https://maps.gstatic.com/mapfiles/place_api/icons/v2/shoppingcart_pinlet
  }
  
  interface OpeningHours {
    open_now: boolean; // false
  }
  
  interface Photo {
    height: number; // 1200
    html_attributions: string[]; // ["<a href="https://maps.google.com/maps/contrib/115589966451026766797">A Google User</a>"]
    photo_reference: string; // "ATJ83zgKKdKJMBk1VttzJbH5LLxo5WThAsJo0IK7nsxHQfz8r3NrTQYRsNwTQElCBj3zOgZ-yHsHxq7jxrV4ZneopBJHYl3Kt_7QE3hOPZMH6IqIfK3DljiXLZ3ScREoLgLdzhtU7AeXNDautsF8WA6gwWQL6VEild8TD2WLQ5qS7bNFqg1P"
    width: number; // 1600
  }
  
  interface PlusCode {
    compound_code: string; // 35C6+P9 Jorge Lavocate, Rio Branco - State of Acre
    global_code: string; // 672J35C6+P9
  }
  
  interface Place {
    business_status: BusinessStatus;
    formatted_address: FormattedAddress;
    geometry: Geometry;
    icon: Icon;
    name: string; // Supermercado kauan
    opening_hours: OpeningHours;
    photos: Photo[];
    place_id: string; // ChIJxaiDXl-Lf5ERDF1QlGrel5s
    plus_code: PlusCode;
    rating: number; // 4.4
    reference: string; // ChIJxaiDXl-Lf5ERDF1QlGrel5s
    types: string[]; // ["supermarket", "grocery_or_supermarket", "store", "food", "point_of_interest", "establishment"]
    user_ratings_total: number; // 127
  }
  
  export type { Place };