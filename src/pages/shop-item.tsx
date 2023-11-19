import { Button } from "../components";
import {
  ItemDetailsCard,
  ItemInfoCard,
} from "../components/features/shop-item";
import { ShopItem } from "../schemas/shop-item";
const mockData = ShopItem.parse({
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
});

export default function ShopItemPage() {
  return (
    <div className="container h-screen flex flex-col justify-between items-stretch m-auto ">
      <main className="flex flex-col flex-grow items-stretch gap-2 bg-gray-100 p-3 overflow-auto">
        <ItemInfoCard data={mockData} />
        <ItemDetailsCard data={mockData.details} />
      </main>
      <div className="px-3 py-2 flex flex-row justify-end gap-2 bg-gray-400">
        <Button variants={{ hierarchy: "secondary" }}>加入購物車</Button>
        <Button>直接購買</Button>
      </div>
    </div>
  );
}
