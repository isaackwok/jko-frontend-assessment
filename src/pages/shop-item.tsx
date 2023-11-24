import React from "react";

import { Button, Carousel, IconButton } from "../components";
import {
  ItemDetailsCard,
  ItemInfoCard,
} from "../components/features/shop-item";
import { mockShopItem } from "../mocks/shop-item";
import { BottomSheet } from "../components/features/shop-item/BottomSheet";

import { useShoppingCartStore } from "../stores/shopping-cart";

export default function ShopItemPage() {
  const { items: cartItems, addItem: addItemToCart } = useShoppingCartStore();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);
  const [buyType, setBuyType] = React.useState<"addToCart" | "direct">(
    "addToCart"
  );

  const handleOpenBottomSheet = (type: typeof buyType) => {
    setIsBottomSheetOpen(true);
    setBuyType(type);
  };

  return (
    <>
      <div className="container h-screen flex flex-col bg-gray-100 justify-between items-stretch m-auto ">
        <main className="flex flex-col flex-grow gap-3 overflow-auto">
          <div>
            <Carousel imgUrls={mockShopItem.allImages} />
          </div>
          <ItemInfoCard className="mx-3" data={mockShopItem} />
          <ItemDetailsCard className="mx-3 mb-3" data={mockShopItem} />
        </main>
        <div className="px-3 py-2 flex flex-row justify-between items-center gap-2 bg-gray-400">
          <IconButton
            badge={cartItems.length}
            label="購物車"
            icon="ShoppingCart"
            className="px-2.5"
          />
          <div className="flex flex-row flex-grow gap-2">
            <Button
              onClick={() => handleOpenBottomSheet("addToCart")}
              className="flex-grow"
              variants={{ hierarchy: "secondary" }}
            >
              加入購物車
            </Button>
            <Button
              onClick={() => handleOpenBottomSheet("direct")}
              className="flex-grow"
            >
              直接購買
            </Button>
          </div>
        </div>
      </div>
      <BottomSheet
        open={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        data={mockShopItem}
        onComplete={(item) => {
          switch (buyType) {
            case "addToCart":
              addItemToCart(item);
              break;
            case "direct":
              break;
          }
          setIsBottomSheetOpen(false);
        }}
      />
    </>
  );
}
