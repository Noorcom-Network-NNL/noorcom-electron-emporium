
/**
 * Firestore collection schemas for documentation & usage consistency.
 * These are TypeScript types, Firestore is still schemaless.
 */

// User document (from registration)
export interface UserDoc {
  email: string;
  createdAt: Date;           // or Firebase Timestamp
  displayName?: string;
  phone?: string;
  role?: "customer" | "admin";
}

// Order document (per purchase)
export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderDoc {
  userId: string;                   // Reference to users (uid)
  items: OrderItem[];               // Cart at purchase time
  total: number;                    // Total order amount
  status: OrderStatus;
  createdAt: Date;                  // or Firebase Timestamp
  deliveryInfo?: {
    deliveredAt?: Date;             // Timestamp when delivered
    address?: string;               // (optional) delivery address
    by?: string;                    // Name of delivery person (optional)
    trackingNumber?: string;        // (if shipped by carrier)
  }
}

// Product document (optional)
export interface ProductDoc {
  name: string;
  category: string;
  price: number;
  stock: number;
  image?: string;
  status?: "Active" | "Inactive";
  createdAt: Date;                  // or Firebase Timestamp
}

// Message from "Contact Us" form (example, already in your code)
export interface ContactMessage {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: Date;
}
