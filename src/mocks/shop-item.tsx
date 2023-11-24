import { ShopItemTransformed } from "../schemas/shop-item";
export const mockShopItem = ShopItemTransformed.parse({
  id: "jko-mock-1",
  name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
  tags: ["街口結帳享九折優惠", "訂單滿 399 免運費"],
  remarks: [
    "請於訂單備註填寫您需要的球員",
    "球員搭配之號碼不可替換",
    "球員款客製訂單出貨需要十四個工作天",
  ],
  details: [
    { title: "商品分類", content: "這邊可以填寫純文字內容。" },
    {
      title: "商品描述",
      content:
        "靈感來自 90 年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒風尚，適合日常生活穿搭。",
    },
    {
      title: "商品備註",
      content:
        "請於訂單備註填寫您需要的號碼，若未填寫將以空白球衣寄出，客製化商品不接受退換貨。",
    },
  ],
  variations: [
    {
      id: "LIONEERS-TSHIRT-WHITE-S",
      name: "新竹攻城獅 - 狂獅球衣 S (白)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec32779cce0031640eb3/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec3277a054002e787f3d/800x.webp?source_format=jpg",
      ],
      price: 799,
      priceAfterDiscount: 549,
      variationIds: ["SIZE-SMALL", "COLOR-WHITE"],
      stock: 3,
    },
    {
      id: "LIONEERS-TSHIRT-WHITE-M",
      name: "新竹攻城獅 - 狂獅球衣 M  (白)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec32779cce0031640eb3/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec3277a054002e787f3d/800x.webp?source_format=jpg",
      ],
      price: 799,
      priceAfterDiscount: 549,
      variationIds: ["SIZE-MID", "COLOR-WHITE"],
      stock: 0,
    },
    {
      id: "LIONEERS-TSHIRT-WHITE-L",
      name: "新竹攻城獅 - 狂獅球衣 L (白)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec32779cce0031640eb3/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6392ec3277a054002e787f3d/800x.webp?source_format=jpg",
      ],
      price: 799,
      priceAfterDiscount: 549,
      variationIds: ["SIZE-LARGE", "COLOR-WHITE"],
      stock: 1,
    },
    {
      id: "LIONEERS-TSHIRT-BLACK-S",
      name: "新竹攻城獅 - 狂獅球衣 S (黑)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a001f528188/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a002b5280ef/800x.webp?source_format=jpg",
      ],
      price: 999,
      priceAfterDiscount: 749,
      variationIds: ["SIZE-SMALL", "COLOR-BLACK"],
      stock: 0,
    },
    {
      id: "LIONEERS-TSHIRT-BLACK-M",
      name: "新竹攻城獅 - 狂獅球衣 M (黑)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a001f528188/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a002b5280ef/800x.webp?source_format=jpg",
      ],
      price: 999,
      priceAfterDiscount: 749,
      variationIds: ["SIZE-MID", "COLOR-BLACK"],
      stock: 0,
    },
    {
      id: "LIONEERS-TSHIRT-BLACK-L",
      name: "新竹攻城獅 - 狂獅球衣 L (黑)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a001f528188/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/638ac1fbc9e31a002b5280ef/800x.webp?source_format=jpg",
      ],
      price: 999,
      priceAfterDiscount: 749,
      variationIds: ["SIZE-LARGE", "COLOR-BLACK"],
      stock: 0,
    },
    {
      id: "LIONEERS-TSHIRT-PURPLE-S",
      name: "新竹攻城獅 - 狂獅球衣 S (紫)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c2e1e6c0028c6f938/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c62a5b034e9e1db2a/800x.webp?source_format=jpg",
      ],
      price: 849,
      priceAfterDiscount: 599,
      variationIds: ["SIZE-SMALL", "COLOR-PURPLE"],
      stock: 20,
    },
    {
      id: "LIONEERS-TSHIRT-PURPLE-M",
      name: "新竹攻城獅 - 狂獅球衣 M (紫)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c2e1e6c0028c6f938/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c62a5b034e9e1db2a/800x.webp?source_format=jpg",
      ],
      price: 849,
      priceAfterDiscount: 599,
      variationIds: ["SIZE-MID", "COLOR-PURPLE"],
      stock: 0,
    },
    {
      id: "LIONEERS-TSHIRT-PURPLE-L",
      name: "新竹攻城獅 - 狂獅球衣 L (紫)",
      imageUrls: [
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c2e1e6c0028c6f938/800x.webp?source_format=jpg",
        "https://shoplineimg.com/5eb233ef887c44005422cc79/6385f81c62a5b034e9e1db2a/800x.webp?source_format=jpg",
      ],
      price: 849,
      priceAfterDiscount: 599,
      variationIds: ["SIZE-LARGE", "COLOR-PURPLE"],
      stock: 20,
    },
  ],
  variationTypes: [
    {
      id: "SIZE",
      name: "尺寸",
      tags: [
        { id: "SIZE-SMALL", name: "S" },
        { id: "SIZE-MID", name: "M" },
        { id: "SIZE-LARGE", name: "L" },
      ],
    },
    {
      id: "COLOR",
      name: "顏色",
      tags: [
        { id: "COLOR-WHITE", name: "白色" },
        { id: "COLOR-BLACK", name: "黑色" },
        { id: "COLOR-PURPLE", name: "紫色" },
      ],
    },
  ],
});
