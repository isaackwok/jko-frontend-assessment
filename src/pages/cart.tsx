import { useNavigate } from "react-router-dom"
import { Button, DetailCard } from "../components"
import { useShoppingCartStore } from "../stores/shopping-cart"
import { ItemPreviewCardContent } from "../components/features/shop-item"

export const CartPage = () => {
  const { items, removeItem } = useShoppingCartStore()
  const navigate = useNavigate()

  const backButton = (
    <Button
      className="mt-4"
      onClick={() => {
        navigate("/")
      }}>
      返回
    </Button>)

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-white">
        <span className="text-3xl font-medium">購物車是空的</span>
        <span className="text-gray-500">快去逛逛吧</span>
        {backButton}
      </div>
    )
  }

  return (
    <div className="container h-screen flex flex-col bg-gray-100 justify-between items-stretch p-2 m-auto">
      <div className="overflow-auto">

        <DetailCard>
          {
            items.map(({ item, count }, idx) => (
              <ItemPreviewCardContent
                key={`${item.id}-${idx}`}
                item={item}
                renderTitle={() => <h2 className="text-p2">{`${item.name} x ${count}`}</h2>}
                onCloseButtonClicked={() => {
                  removeItem(idx)
                }}
              />
            ))
          }
        </DetailCard>
      </div>
      {backButton}
    </div>
  )
}