import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ZIPCodeSearch = React.lazy(() => import("pages/ZIPCodeSearch"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const StoreCredits = React.lazy(() => import("pages/StoreCredits"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const ShippingChargeCalculator = React.lazy(() =>
  import("pages/ShippingChargeCalculator")
);
const ShippingAddressValidation = React.lazy(() =>
  import("pages/ShippingAddressValidation")
);
const ProductQuickview = React.lazy(() => import("pages/ProductQuickview"));
const Print = React.lazy(() => import("pages/Print"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const FreeCredits = React.lazy(() => import("pages/FreeCredits"));
const Favourites = React.lazy(() => import("pages/Favourites"));
const DiscountsOffers = React.lazy(() => import("pages/DiscountsOffers"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const CouponCodeGenerator = React.lazy(() =>
  import("pages/CouponCodeGenerator")
);
const AuctionBIdding = React.lazy(() => import("pages/AuctionBIdding"));
const AffiliateURL = React.lazy(() => import("pages/AffiliateURL"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/affiliateurl" element={<AffiliateURL />} />
          <Route path="/auctionbidding" element={<AuctionBIdding />} />
          <Route
            path="/couponcodegenerator"
            element={<CouponCodeGenerator />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discountsoffers" element={<DiscountsOffers />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/freecredits" element={<FreeCredits />} />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/print" element={<Print />} />
          <Route path="/productquickview" element={<ProductQuickview />} />
          <Route
            path="/shippingaddressvalidation"
            element={<ShippingAddressValidation />}
          />
          <Route
            path="/shippingchargecalculator"
            element={<ShippingChargeCalculator />}
          />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/storecredits" element={<StoreCredits />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/zipcodesearch" element={<ZIPCodeSearch />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
