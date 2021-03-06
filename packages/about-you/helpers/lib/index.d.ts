import { UiMediaGalleryItem, AgnosticProductAttribute } from '@vue-storefront/interfaces';
import { ProductVariant, Cart } from '@vue-storefront/boilerplate-api/src/types';
export declare const getProductName: (product: ProductVariant) => string;
export declare const getProductSlug: (product: ProductVariant) => string;
export declare const getProductPrice: (product: ProductVariant) => number;
export declare const getProductGallery: (product: ProductVariant) => UiMediaGalleryItem[];
export declare const getProductVariants: (products: ProductVariant[], filters?: any) => ProductVariant | ProductVariant[];
export declare const getProductAttributes: (products: ProductVariant[], filters?: string[]) => AgnosticProductAttribute[];
export declare const getProductDescription: (product: ProductVariant) => string;
export declare const getCategoryProducts: (category: any, options?: any) => ProductVariant[];
export declare const getCategoryName: (category: any) => string;
export declare const getCartProducts: (cart: Cart, includeAttributes?: string[]) => any;
export declare const getCartTotalPrice: (cart: Cart) => number;
export declare const getCartSubtotalPrice: (cart: Cart) => number;
export declare const getCartShippingPrice: (cart: Cart) => number;
export declare const getCartTotalItems: (cart: Cart) => number;
export declare const getShippingMethodId: (shippingMethod: any) => string;
export declare const getShippingMethodName: (shippingMethod: any) => string;
export declare const getShippingMethodDescription: (shippingMethod: any) => string;
export declare const getShippingMethodPrice: (shippingMethod: any) => number;
